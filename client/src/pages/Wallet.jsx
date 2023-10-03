
import { useState } from "react";
import {ethers} from 'ethers';
import {useNavigate} from 'react-router-dom'

function Wallet() {
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const navigateTo = useNavigate();
  
  async function connectWallet() {
    try{
      if(window.ethereum){
        if (!connected) {
          const provider = new ethers.BrowserProvider(window.ethereum);
          const signer = await provider.getSigner();
          const _walletAddress = await signer.getAddress();
          setConnected(true);
          setWalletAddress(_walletAddress);
          navigateTo('/home', {state:{address:_walletAddress }})
        }
      }else{
        alert("Metamask is not installed")
      }
    }catch(err){
      console.log(err);
    }
  }

  return (

        <div className="content">
          <button className="btn" onClick={connectWallet}>
            {connected ? walletAddress.slice(0,20)+'...': "Connect Wallet"}
          </button>
        </div>
  );
}

export default Wallet;