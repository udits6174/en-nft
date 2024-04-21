require("dotenv").config()
const axios = require('axios');

const headers = {
  'accept': 'application/json',
  'x-api-key': 'QN_faccd3f65dab4ace849187fc66c85da1'  //YOUR API-KEY from Quicknode
};

const data = {
  name: 'NFT Transfer',
  //Generate Base64 encode of the metadata given at the bottom
  expression: 'KHR4X2xvZ3NfdG9waWMxID1+ICdFQzFiMzE0QWE1YWNFNjFjOEE0MGJDQjEyZjk0QjNkYzFBRTJEMGE3JykgJiYgKHR4X2xvZ3NfYWRkcmVzcyA9PSAnMHg3MDVDYzdDOWY1QzcwODk0YzNiZjFjOUJENUIzNDljOTk4ZjMzRTIzJykgJiYgKHR4X2xvZ3NfdG9waWMwID09ICcweGRkZjI1MmFkMWJlMmM4OWI2OWMyYjA2OGZjMzc4ZGFhOTUyYmE3ZjE2M2M0YTExNjI4ZjU1YTRkZjUyM2IzZWYnKQ==',
  network: 'ethereum-sepolia',
  //node .\destination.js to generate id
  destinationIds: ['']
};

axios.post('https://api.quicknode.com/quickalerts/rest/v1/notifications', data, { headers })
  .then(response => console.log(response.data))
  .catch(error => console.log('error', error));


// (tx_logs_topic1 =~ 'EC1b314Aa5acE61c8A40bCB12f94B3dc1AE2D0a7') && 
// (tx_logs_address == '0x705Cc7C9f5C70894c3bf1c9BD5B349c998f33E23') && 
// (tx_logs_topic0 == '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef')

  // tx_logs_topic1 : ACCOUNT UNDER SURVEILLIANCE
  //tx_logs_address: CONTRACT ADDRESS
  //tx_logs_topic1: transfer event emitted 