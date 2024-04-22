import {useEffect } from "react"
import io from 'socket.io-client';
import {useNavigate} from "react-router-dom"
import '../App.css'

const Member = () => {
  const navigateTo = useNavigate();
  useEffect(()=>{
    const socketInstance = io('https://en-nft.vercel.app');
    console.log("connect", socketInstance);
    socketInstance.on('nftsUpdated', (data)=>{
      console.log(data.userNFTs);
      if(data.userNFTs<1){
        navigateTo('/');
      }
    }
      )
      
      return()=>{
        socketInstance.disconnect()
      }
    },[navigateTo])

    return (
      <div className="members-only-page">
        <h1>Welcome to the Premium Members Only Page!</h1>
        <p>This is some exclusive content for our premium members.</p>
      </div>
    );
}

export default Member;
