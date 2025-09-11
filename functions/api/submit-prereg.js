const SEATABLE_APP_TOKEN = '46115d34ded6894cdbad78a5da9f6b6488230adc';
const SEATABLE_BASE_UUID = '39b706f5-40d3-4807-9152-df74547e3eb6';
const SEATABLE_SERVER = 'https://cloud.seatable.io';
const TABLE_NAME = 'prereg';

export async function onRequestPost(context) {
  try {
    const request = context.request;
    const formData = await request.json();

    // Prepare data for SeaTable
    const seatableData = {
      email: formData.email,
      createdAt: new Date().toISOString()
    };

    // Step 1: Get base token using API token
    const tokenResponse = await fetch(
      `${SEATABLE_SERVER}/api/v2.1/dtable/app-access-token/`,
      {
        headers: {
          'Authorization': `Bearer ${SEATABLE_APP_TOKEN}`,
          'Accept': 'application/json'
        }
      }
    );

    if (!tokenResponse.ok) {
      throw new Error(`Token request failed: ${tokenResponse.status}`);
    }

    const tokenData = await tokenResponse.json();
    const { access_token } = tokenData;

    // Step 2: Add row using base token
    const response = await fetch(
      `${SEATABLE_SERVER}/api-gateway/api/v2/dtables/${SEATABLE_BASE_UUID}/rows/`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${access_token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          table_name: TABLE_NAME,
          rows: [seatableData]
        })
      }
    );

    if (!response.ok) {
      throw new Error(`SeaTable request failed: ${response.status}`);
    }

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Pre-registration submitted successfully!' 
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
    });

  } catch (error) {
    console.error('Error submitting to SeaTable:', error);
    
    return new Response(JSON.stringify({
      success: false,
      message: 'An error occurred while submitting the form. Please try again.',
      error: error.message
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
    });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
  });
}