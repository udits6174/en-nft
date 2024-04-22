require("dotenv").config()
const axios = require('axios');

const headers = {
  'accept': 'application/json',
  'x-api-key': process.env.QN_API_KEY  //YOUR API-KEY from Quicknode
};
const data = {
  name: 'My Destination',
  to_url: 'https://nftune-be.vercel.app/webhook',
  webhook_type: 'POST',
  service: 'webhook',
  payload_type: 5
};

axios.post('https://api.quicknode.com/quickalerts/rest/v1/destinations', data, { headers })
  .then(response => console.log("Response Data",response.data))
  .catch(error => console.log('error', error));
  