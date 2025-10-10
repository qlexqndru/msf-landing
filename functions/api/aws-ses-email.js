import { AwsClient } from 'aws4fetch';

// AWS SES implementation for Cloudflare Workers
async function sendEmailViaSES(env, formData) {
  // Check if we have the required environment variables
  console.log('Email function called with:', {
    hasAccessKey: !!env.AWS_ACCESS_KEY_ID,
    hasSecretKey: !!env.AWS_SECRET_ACCESS_KEY,
    region: env.AWS_REGION,
    senderEmail: env.SENDER_EMAIL,
    recipientEmail: formData.email
  });
  
  if (!env.AWS_ACCESS_KEY_ID || !env.AWS_SECRET_ACCESS_KEY) {
    console.log('AWS credentials not configured, skipping email send');
    return false;
  }

  const aws = new AwsClient({
    accessKeyId: env.AWS_ACCESS_KEY_ID,
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
    region: env.AWS_REGION || 'eu-central-1'
  });

  const senderEmail = env.SENDER_EMAIL || 'noreply@myf.md';
  const senderName = 'Moldova Security Forum';

  // Email content
  let emailHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Confirmation of Registration - Moldova Security Forum 2025</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f4f4; font-family:Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; margin:20px 0; border-radius:8px; overflow:hidden;">
          <tr>
            <td style="padding:30px; text-align:center;">
              <img src="https://img.unde.io/2025-10-10T08:09:43.662923697_811b8aaf-873f-4a07-a1e5-be3e26003575" alt="Moldova Security Forum 2025" style="width:120px; height:120px; display:block; margin:0 auto; object-fit:contain;">
            </td>
          </tr>
          <tr>
            <td style="padding:30px;">
              <p style="color:#666666; line-height:1.6; margin:0 0 20px;">
                Dear ${formData.firstName} ${formData.lastName},
              </p>
              <p style="color:#666666; line-height:1.6; margin:0 0 20px;">
                Thank you for registering for the Moldova Security Forum 2025, which will take place on 18–19 November 2025 in Chișinău, Republic of Moldova.
              </p>
              <p style="color:#666666; line-height:1.6; margin:0 0 20px;">
                We are pleased to confirm that your registration has been successfully received. Due to the limited number of seats available at the venue, all registrations are currently being reviewed by the organizing committee.
              </p>
              <p style="color:#666666; line-height:1.6; margin:0 0 20px;">
                You will receive a follow-up email with confirmation of participation and a personal QR code for check-in, should your registration be accepted. Please note that access to the Forum will be granted only to confirmed participants.
              </p>
              <p style="color:#666666; line-height:1.6; margin:0 0 20px;">
                We sincerely appreciate your interest in the Moldova Security Forum and your engagement in advancing dialogue on regional security and democratic resilience. If you have any questions please do not hesitate to reach out at <a href="mailto:info@securityforum.md" style="color:#034889; text-decoration:none;">info@securityforum.md</a>.
              </p>
              <p style="color:#666666; line-height:1.6; margin:30px 0 0;">
                Warm regards,<br>
                <br>
                Moldova Security Forum Team
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

  let emailText = `Confirmation of Registration - Moldova Security Forum 2025

Dear ${formData.firstName} ${formData.lastName},

Thank you for registering for the Moldova Security Forum 2025, which will take place on 18–19 November 2025 in Chișinău, Republic of Moldova.

We are pleased to confirm that your registration has been successfully received. Due to the limited number of seats available at the venue, all registrations are currently being reviewed by the organizing committee.

You will receive a follow-up email with confirmation of participation and a personal QR code for check-in, should your registration be accepted. Please note that access to the Forum will be granted only to confirmed participants.

We sincerely appreciate your interest in the Moldova Security Forum and your engagement in advancing dialogue on regional security and democratic resilience. If you have any questions please do not hesitate to reach out at info@securityforum.md.

Warm regards,
Moldova Security Forum Team`;

  const subject = 'Confirmation of Registration - Moldova Security Forum 2025';

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