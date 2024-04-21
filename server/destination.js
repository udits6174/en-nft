const axios = require('axios');

const headers = {
  'accept': 'application/json',
  'x-api-key': 'QN_faccd3f65dab4ace849187fc66c85da1'  //YOUR API-KEY from Quicknode
};

const data = {
  name: 'My Destination',
  //The forwarding URL to backend using NGROK
  to_url: '/webhook',
  webhook_type: 'POST',
  service: 'webhook',
  payload_type: 5
};

axios.post('https://api.quicknode.com/quickalerts/rest/v1/destinations', data, { headers })
  .then(response => console.log("Response Data",response.data))
  .catch(error => console.log('error', error));