require("dotenv").config()
const axios = require('axios');

const headers = {
  'accept': 'application/json',
  'x-api-key': process.env.QN_API_KEY  //YOUR API-KEY from Quicknode
};

const body = {
  name: 'transfer_alert',
  //Generate Base64 encode of the metadata given at the bottom
  expression: 'KHR4X2xvZ3NfdG9waWMxID1+ICdFQzFiMzE0QWE1YWNFNjFjOEE0MGJDQjEyZjk0QjNkYzFBRTJEMGE3JykgJiYgKHR4X2xvZ3NfYWRkcmVzcyA9PSAnMHg4NUYyMzg5MEFhQ2EyMDY5NUQwODhjNDdCRjgxRTY4OTA2ZDlDNTFBJykgJiYgKHR4X2xvZ3NfdG9waWMwID09ICcweGRkZjI1MmFkMWJlMmM4OWI2OWMyYjA2OGZjMzc4ZGFhOTUyYmE3ZjE2M2M0YTExNjI4ZjU1YTRkZjUyM2IzZWYnKQ==',
  network: 'ethereum-sepolia',
  //node .\destination.js to generate id
  destinationIds: ['62619292-0045-45ed-89b6-0791c64c2ef9']
};

axios.post('https://api.quicknode.com/quickalerts/rest/v1/notifications', body, { headers })
  .then(response => console.log(response.data))
  .catch(error => console.log('error', error));


// (tx_logs_topic1 =~ 'EC1b314Aa5acE61c8A40bCB12f94B3dc1AE2D0a7') && 
// (tx_logs_address == '0x85F23890AaCa20695D088c47BF81E68906d9C51A') && 
// (tx_logs_topic0 == '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef')

  // tx_logs_topic1 : ACCOUNT UNDER SURVEILLIANCE
  //tx_logs_address: CONTRACT ADDRESS
  //tx_logs_topic1: transfer event emitted 