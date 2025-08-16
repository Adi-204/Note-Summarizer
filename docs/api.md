# Notes Summarizer - API Documentation

## Overview

The Notes Summarizer API provides endpoints for AI-powered transcript summarization and email sharing functionality. The application uses Google's Gemini model for intelligent summarization and Nodemailer for email delivery.

## Base URL

- **Development**: `http://localhost:3000`
- **Production**: Your deployed domain

## Authentication

Currently, the API endpoints do not require authentication. However, ensure your environment variables are properly configured for the services to work.

## Endpoints

### 1. Generate Summary

**POST** `/api/generate-summary`

Generates an AI-powered summary from uploaded transcript text using Google's Gemini model.

#### Request Body

```json
{
  "transcript": "string",
  "prompt": "string"
}
```

#### Parameters

- `transcript` (required): The raw transcript text to summarize
- `prompt` (required): Custom instructions for how to format the summary

#### Example Request

```bash
curl -X POST http://localhost:3000/api/generate-summary \
  -H "Content-Type: application/json" \
  -d '{
    "transcript": "Meeting transcript content here...",
    "prompt": "Summarize in bullet points for executives"
  }'
```

#### Response

**Success (200)**
```json
{
  "summary": "Generated summary content here..."
}
```

**Error (400)**
```json
{
  "error": "Transcript and prompt are required"
}
```

**Error (500)**
```json
{
  "error": "Failed to generate summary"
}
```

### 2. Send Email

**POST** `/api/send-email`

Sends the generated summary via email using Nodemailer.

#### Request Body

```json
{
  "recipients": "string",
  "subject": "string",
  "summary": "string"
}
```

#### Parameters

- `recipients` (required): Comma-separated list of email addresses
- `subject` (required): Email subject line
- `summary` (required): The summary content to send

#### Example Request

```bash
curl -X POST http://localhost:3000/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "recipients": "user1@example.com, user2@example.com",
    "subject": "Meeting Summary - Q4 Planning",
    "summary": "Summary content here..."
  }'
```

#### Response

**Success (200)**
```json
{
  "message": "Email sent successfully"
}
```

**Error (400)**
```json
{
  "error": "Recipients, summary, and subject are required"
}
```

**Error (500)**
```json
{
  "error": "Failed to send email"
}
```

## Environment Variables

The following environment variables must be configured in your `.env.local` file:

```env
# Google AI API Key
GEMINI_API_KEY=your_google_ai_api_key_here
# Email Configuration
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_specific_password_here
```

## Error Handling

All API endpoints return appropriate HTTP status codes:

- **200**: Success
- **400**: Bad Request (missing required parameters)
- **500**: Internal Server Error

Error responses include a descriptive message in the response body.

## Rate Limiting

Currently, no rate limiting is implemented. Consider implementing rate limiting for production use.

## CORS

The API supports CORS for cross-origin requests. Configure CORS settings in your Next.js configuration if needed.

## Security Considerations

1. **API Key Security**: Keep your Google AI API key secure and never expose it in client-side code
2. **Email Security**: Use app-specific passwords for email services
3. **Input Validation**: All inputs are validated server-side
4. **HTTPS**: Use HTTPS in production for secure data transmission

## Example Usage

### Frontend Integration

```typescript
// Generate summary
const generateSummary = async (transcript: string, prompt: string) => {
  const response = await fetch('/api/generate-summary', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ transcript, prompt })
  });
  
  if (response.ok) {
    const data = await response.json();
    return data.summary;
  }
  throw new Error('Failed to generate summary');
};

// Send email
const sendEmail = async (recipients: string, subject: string, summary: string) => {
  const response = await fetch('/api/send-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ recipients, subject, summary })
  });
  
  if (response.ok) {
    return await response.json();
  }
  throw new Error('Failed to send email');
};
```

## Troubleshooting

### Common Issues

1. **API Key Invalid**: Ensure your Google AI API key is correct and has sufficient quota
2. **Email Not Sending**: Verify email credentials and app-specific password setup
3. **CORS Errors**: Check CORS configuration in Next.js
4. **Environment Variables**: Ensure all required environment variables are set

### Debug Mode

Enable debug logging by setting `NODE_ENV=development` in your environment.

## Support

For API-related issues, check the application logs and ensure all environment variables are properly configured.
