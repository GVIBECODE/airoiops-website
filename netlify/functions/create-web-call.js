// Mints a Retell web-call access token for the Discovery Annie agent.
// The Retell API key must never reach the browser, so this runs server-side
// as a Netlify Function.
//
// Required Netlify environment variables (set in the Netlify UI later):
//   RETELL_API_KEY            the secret Retell API key
//   RETELL_DISCOVERY_AGENT_ID the Discovery Annie agent id

exports.handler = async function (event) {
  const headers = { 'Content-Type': 'application/json' };

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  const apiKey = process.env.RETELL_API_KEY;
  const agentId = process.env.RETELL_DISCOVERY_AGENT_ID;

  if (!apiKey || !agentId) {
    return {
      statusCode: 502,
      headers,
      body: JSON.stringify({ error: 'Server is not configured for web calls yet.' })
    };
  }

  try {
    const res = await fetch('https://api.retellai.com/v2/create-web-call', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ agent_id: agentId })
    });

    if (!res.ok) {
      const detail = await res.text();
      return {
        statusCode: 502,
        headers,
        body: JSON.stringify({ error: 'Retell rejected the request.', detail: detail })
      };
    }

    const data = await res.json();
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ access_token: data.access_token, call_id: data.call_id })
    };
  } catch (err) {
    return {
      statusCode: 502,
      headers,
      body: JSON.stringify({ error: 'Could not reach Retell.', detail: String(err) })
    };
  }
};
