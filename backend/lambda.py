import json
import os
import boto3
from datetime import datetime

sns_client = None

def get_sns_client():
    global sns_client
    if sns_client is None:
        sns_client = boto3.client('sns')
    return sns_client

def lambda_handler(event, context):
    """
    AWS Lambda handler for GlassData Contact Form submissions.
    Publishes form details (First Name, Last Name, Email, Company, Message) to AWS SNS topic to send email notifications.
    """
    # Extract requesting origin dynamically for CORS
    headers_dict = event.get('headers') or {}
    request_origin = '*'
    if isinstance(headers_dict, dict):
        for k, v in headers_dict.items():
            if k.lower() == 'origin' and v:
                request_origin = v
                break

    cors_headers = {
        "Access-Control-Allow-Origin": request_origin,
        "Access-Control-Allow-Headers": "Content-Type,Authorization,X-Amz-Date,X-Api-Key,X-Amz-Security-Token",
        "Access-Control-Allow-Methods": "OPTIONS,POST",
        "Access-Control-Max-Age": "86400"
    }

    # Handle CORS Preflight OPTIONS Request
    req_context = event.get('requestContext', {})
    http_obj = req_context.get('http', {}) if isinstance(req_context, dict) else {}
    http_method = (http_obj.get('method') or event.get('httpMethod') or req_context.get('httpMethod') or '').upper()

    if http_method == 'OPTIONS':
        return {
            "statusCode": 200,
            "headers": cors_headers,
            "body": ""
        }

    try:
        # Extract body payload
        raw_body = event.get('body', '{}')
        if event.get('isBase64Encoded', False):
            import base64
            raw_body = base64.b64decode(raw_body).decode('utf-8')

        if isinstance(raw_body, str):
            try:
                data = json.loads(raw_body)
            except Exception:
                import urllib.parse
                parsed = urllib.parse.parse_qs(raw_body)
                data = {k: v[0] for k, v in parsed.items()}
        else:
            data = raw_body or {}

        # Extract fields matching the Contact Form:
        # Supports both camelCase (firstName, lastName) and short keys (fname, lname)
        first_name = (data.get('firstName') or data.get('fname') or '').strip()
        last_name = (data.get('lastName') or data.get('lname') or '').strip()
        email = data.get('email', '').strip()
        company = data.get('company', '').strip()
        message = data.get('message', '').strip()

        if not email or not message:
            return {
                "statusCode": 400,
                "headers": cors_headers,
                "body": json.dumps({"status": "error", "message": "Email and message are required fields."})
            }

        # Topic ARN from environment variables
        sns_topic_arn = os.environ.get('SNS_TOPIC_ARN')
        if not sns_topic_arn:
            print("[ERROR] SNS_TOPIC_ARN environment variable is not configured.")
            return {
                "statusCode": 500,
                "headers": cors_headers,
                "body": json.dumps({"status": "error", "message": "Server configuration error: SNS Topic ARN missing."})
            }

        # Format SNS Email Notification Message
        timestamp = datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S UTC')
        full_name = f"{first_name} {last_name}".strip() or "Anonymous"
        company_info = company if company else "N/A"
        
        email_subject = f"[GlassData Contact Form] Inquiry from {full_name} ({company_info})"
        email_body = f"""
=================================
GLASSDATA WEBSITE CONTACT INQUIRY
=================================
Timestamp: {timestamp}

CONTACT DETAILS:
- First Name: {first_name or 'N/A'}
- Last Name:  {last_name or 'N/A'}
- Email:      {email}
- Company:    {company_info}

MESSAGE:
{message}

=================================
Sent via GlassData Official Site
=================================
"""

        # Publish to AWS SNS
        publish_response = get_sns_client().publish(
            TopicArn=sns_topic_arn,
            Subject=email_subject[:100],  # SNS Subject max length is 100 characters
            Message=email_body
        )

        message_id = publish_response.get('MessageId')
        print(f"[SUCCESS] Form published to SNS Topic. MessageId: {message_id}")

        return {
            "statusCode": 200,
            "headers": cors_headers,
            "body": json.dumps({
                "status": "success",
                "message": "Inquiry submitted successfully.",
                "message_id": message_id
            })
        }

    except Exception as e:
        print(f"[ERROR] Exception processing contact form: {str(e)}")
        return {
            "statusCode": 500,
            "headers": cors_headers,
            "body": json.dumps({"status": "error", "message": f"Server processing error: {str(e)}"})
        }
