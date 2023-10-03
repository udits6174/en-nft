const axios = require('axios');

const headers = {
  'accept': 'application/json',
  'x-api-key': 'QN_faccd3f65dab4ace849187fc66c85da1'  //YOUR API-KEY from Quicknode
};

const data = {
  name: 'NFT Transfer',
  //Generate Base64 encode of the metadata given at the bottom
  expression: 'KHR4X2xvZ3NfdG9waWMxID1+ICdFQzFiMzE0QWE1YWNFNjFjOEE0MGJDQjEyZjk0QjNkYzFBRTJEMGE3JykgJiYgKHR4X2xvZ3NfYWRkcmVzcyA9PSAnMHhBN0U5Yjg3NURGRjNBYzQ0ODA5YzM3ZjAzN2I0OTUxNTg0NTM3MTBiJykgJiYgKHR4X2xvZ3NfdG9waWMwID09ICcweGRkZjI1MmFkMWJlMmM4OWI2OWMyYjA2OGZjMzc4ZGFhOTUyYmE3ZjE2M2M0YTExNjI4ZjU1YTRkZjUyM2IzZWYnKQ==',
  network: 'polygon-mumbai',
  //node .\destination.js to generate id
  destinationIds: ['cb7274dd-46f6-4fd3-a589-8c0180b37ecf']
};

axios.post('https://api.quicknode.com/quickalerts/rest/v1/notifications', data, { headers })
  .then(response => console.log(response.data))
  .catch(error => console.log('error', error));


// (tx_logs_topic1 =~ 'EC1b314Aa5acE61c8A40bCB12f94B3dc1AE2D0a7') && 
// (tx_logs_address == '0xA7E9b875DFF3Ac44809c37f037b495158453710b') && 
// (tx_logs_topic0 == '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef')

  // tx_logs_topic1 : ACCOUNT ADDRESS UNDER SURVEILLIANCE
  //tx_logs_address: CONTRACT ADDRESS
  //tx_logs_topic1: function to be looked upon