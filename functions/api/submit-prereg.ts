import axios from 'axios';

const SEATABLE_APP_TOKEN = '46115d34ded6894cdbad78a5da9f6b6488230adc';
const SEATABLE_BASE_UUID = '39b706f5-40d3-4807-9152-df74547e3eb6';
const SEATABLE_SERVER = 'https://cloud.seatable.io';
const TABLE_NAME = 'prereg';

export async function onRequestPost(context: any) {
  try {
    const formData = await context.request.json();

    // Prepare data for SeaTable
    const seatableData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      jobTitle: formData.jobTitle,
      institution: formData.institution,
      email: formData.email,
      phone: formData.phone || '',
      dietaryPreferences: formData.dietaryPreferences || '',
      accessibilityNeeds: formData.accessibilityNeeds || '',
      dataConsent: formData.dataConsent,
      termsConsent: formData.termsConsent,
      createdAt: new Date().toISOString()
    };

    // Step 1: Get base token using API token
    const tokenResponse = await axios.get(
      `${SEATABLE_SERVER}/api/v2.1/dtable/app-access-token/`,
      {
        headers: {
          'Authorization': `Bearer ${SEATABLE_APP_TOKEN}`,
          'Accept': 'application/json'
        },
        timeout: 10000 // 10 second timeout
      }
    );

    const { access_token } = tokenResponse.data;

    // Step 2: Add row using base token
    await axios.post(
      `${SEATABLE_SERVER}/api-gateway/api/v2/dtables/${SEATABLE_BASE_UUID}/rows/`,
      {
        table_name: TABLE_NAME,
        rows: [seatableData]
      },
      {
        headers: {
          'Authorization': `Bearer ${access_token}`,
          'Content-Type': 'application/json'
        },
        timeout: 10000 // 10 second timeout
      }
    );

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Pre-registration submitted successfully!' 
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    });

  } catch (error) {
    console.error('Error submitting to SeaTable:', error);
    
    const errorDetails: {
      message: string;
      status: number | null;
      data: unknown;
    } = {
      message: 'An error occurred while submitting the form. Please try again.',
      status: null,
      data: null
    };
    
    if (axios.isAxiosError(error)) {
      console.error('Response data:', error.response?.data);
      console.error('Response status:', error.response?.status);
      
      errorDetails.status = error.response?.status || null;
      errorDetails.data = error.response?.data || null;
      
      // More specific error messages
      if (error.response?.status === 401) {
        errorDetails.message = 'Authentication error. Invalid API token.';
      } else if (error.response?.status === 404) {
        errorDetails.message = 'API endpoint not found.';
      } else if (error.response?.status === 405) {
        errorDetails.message = 'Incorrect HTTP method.';
      } else if (error.response?.data?.detail) {
        errorDetails.message = `Error: ${error.response.data.detail}`;
      }
    }

    return new Response(JSON.stringify({ 
      success: false, 
      message: errorDetails.message,
      debug: {
        status: errorDetails.status,
        data: errorDetails.data
      }
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}

// Handle CORS preflight
export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}