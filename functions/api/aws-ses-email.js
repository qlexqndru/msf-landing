import { AwsClient } from 'aws4fetch';

// AWS SES implementation for Cloudflare Workers
async function sendEmailViaSES(env, formData) {
  // Check if we have the required environment variables
  if (!env.AWS_ACCESS_KEY_ID || !env.AWS_SECRET_ACCESS_KEY) {
    console.log('AWS credentials not configured, skipping email send');
    return false;
  }

  const aws = new AwsClient({
    accessKeyId: env.AWS_ACCESS_KEY_ID,
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
    region: env.AWS_REGION || 'eu-central-1'
  });

  const senderEmail = env.SENDER_EMAIL || 'info@securityforum.md';
  const senderName = 'Moldova Security Forum';

  // Email content will be set when you provide the text
  let emailHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Registration Confirmation - Moldova Security Forum 2025</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f4f4; font-family:Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; margin:20px 0; border-radius:8px; overflow:hidden;">
          <tr>
            <td style="background: linear-gradient(135deg, #034889 0%, #031226 100%); padding:30px; text-align:center;">
              <h1 style="color:#ffffff; margin:0; font-size:24px;">Moldova Security Forum 2025</h1>
              <p style="color:#ffffff; margin:10px 0 0; font-size:14px;">18-19 November 2025 | maib Park, Chișinău</p>
            </td>
          </tr>
          <tr>
            <td style="padding:30px;">
              <h2 style="color:#034889; margin:0 0 20px;">Registration Received</h2>
              <p style="color:#666666; line-height:1.6; margin:0 0 20px;">
                Dear ${formData.firstName} ${formData.lastName},
              </p>
              <p style="color:#666666; line-height:1.6; margin:0 0 20px;">
                Thank you for registering for the Moldova Security Forum 2025!
              </p>
              <p style="color:#666666; line-height:1.6; margin:0 0 20px;">
                We have successfully received your registration. Our team will review all applications and contact selected participants with confirmation and additional details.
              </p>
              <div style="background-color:#f8f8f8; padding:20px; border-radius:5px; margin:20px 0;">
                <h3 style="color:#034889; margin:0 0 15px;">Registration Details:</h3>
                <p style="color:#666666; margin:5px 0;"><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
                <p style="color:#666666; margin:5px 0;"><strong>Institution:</strong> ${formData.institution}</p>
                <p style="color:#666666; margin:5px 0;"><strong>Position:</strong> ${formData.jobTitle}</p>
                <p style="color:#666666; margin:5px 0;"><strong>Email:</strong> ${formData.email}</p>
                ${formData.phone ? `<p style="color:#666666; margin:5px 0;"><strong>Phone:</strong> ${formData.phone}</p>` : ''}
              </div>
              <p style="color:#666666; line-height:1.6; margin:20px 0;">
                For any questions, please contact us at <a href="mailto:info@securityforum.md" style="color:#034889;">info@securityforum.md</a>
              </p>
              <p style="color:#666666; line-height:1.6; margin:30px 0 0;">
                Best regards,<br>
                <br>
                The MSF 2025 Organizing Team
              </p>
            </td>
          </tr>
          <tr>
            <td style="background-color:#f8f8f8; padding:20px; text-align:center; color:#999999; font-size:12px;">
              Moldova Security Forum is organized by Konrad Adenauer Foundation, Ministry of Foreign Affairs of Moldova, Institute for European Policies and Reforms (IPRE), and NATO Liaison Office in Moldova.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  let emailText = `Registration Confirmation - Moldova Security Forum 2025

Dear ${formData.firstName} ${formData.lastName},

Thank you for registering for the Moldova Security Forum 2025!

We have successfully received your registration. Our team will review all applications and contact selected participants with confirmation and additional details.

Registration Details:
- Name: ${formData.firstName} ${formData.lastName}
- Institution: ${formData.institution}
- Position: ${formData.jobTitle}
- Email: ${formData.email}
${formData.phone ? `- Phone: ${formData.phone}` : ''}

Event Details:
- Date: 18-19 November 2025
- Location: maib Park, Chișinău

For any questions, please contact us at info@securityforum.md

Best regards,
The MSF 2025 Organizing Team`;

  const subject = 'Registration Confirmation - Moldova Security Forum 2025';

  try {
    // Use SES v2 API endpoint
    const response = await aws.fetch(
      `https://email.${env.AWS_REGION || 'eu-central-1'}.amazonaws.com/v2/email/outbound-emails`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          FromEmailAddress: `${senderName} <${senderEmail}>`,
          Destination: {
            ToAddresses: [formData.email]
          },
          Content: {
            Simple: {
              Subject: {
                Data: subject,
                Charset: 'UTF-8'
              },
              Body: {
                Html: {
                  Data: emailHtml,
                  Charset: 'UTF-8'
                },
                Text: {
                  Data: emailText,
                  Charset: 'UTF-8'
                }
              }
            }
          }
        })
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error('SES Response:', response.status, error);
      throw new Error(`SES Error ${response.status}: ${error}`);
    }

    const result = await response.json();
    console.log('Email sent successfully:', result.MessageId);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

export { sendEmailViaSES };