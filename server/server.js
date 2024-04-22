const express = require('express');
require("dotenv").config()
const cors = require('cors')
const ethers = require('ethers');
const ABI =require('./ABI.json')
const socketIO = require('socket.io')
const app = express();

app.use(cors())
app.use(express.json());
 
const PORT = process.env.STATUS === 'production' ? (process.env.PROD_PORT) : (process.env.DEV_PORT);
const API_URL = process.env.API_URL;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
// const PRIVATE_KEY = process.env.PRIVATE_KEY; 

const infuraProvider = new ethers.providers.JsonRpcProvider(API_URL);

// const signer = new ethers.Wallet(PRIVATE_KEY, infuraProvider);

const NFTContract = new ethers.Contract(CONTRACT_ADDRESS, ABI, infuraProvider);

const fetchNFTs = async(account)=>{
    try{
        const nftBalance = await NFTContract.balanceOf(account);
        return nftBalance.toNumber();
    }catch(error){
       console.log('Error fetching NFTs',error);
    }
}

app.post('/members',async(req,res)=>{
    try{
       const account = req.body.from;
       const numNFTs = await fetchNFTs(account);
       if(numNFTs>0){
         res.status(200).json({status:200,numNFTs})
       }else{
         res.status(404).json({status:404,message:"You don't own any nft", contract: NFTContract.address});
       }
    }catch(error){
        res.status(500).json({status:500,message:"Internal Server Error"});
    }
})

app.get('/', (req, res)=>{
  res.send("Hi");
})
app.post('/webhook',async(req,res)=>{
    try{
      const account = req.body[0].from;
      const numNFTs = await fetchNFTs(account);
      io.emit('nftsUpdated',{userNFTs:numNFTs})
      res.status(200).json({status:200,message:"Webhook Triggered"})
    }catch(error){
      console.error(error)
    }
})

const server = app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})

const io = socketIO(server, {cors: {origin: "*"}});

io.on('connection',()=>{
  console.log("Connected")
})
