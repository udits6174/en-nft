import {useEffect } from "react"
import io from 'socket.io-client';
import {useNavigate} from "react-router-dom"
import '../App.css'

const Member = () => {
  const navigateTo = useNavigate();
    useEffect(()=>{
      const socketInstance = io('http://localhost:5000');
      console.log("connect1", socketInstance);
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
    },[])

    return (
      <div className="members-only-page">
        <h1>Welcome to the Premium Members Only Page!</h1>
        <p>This is some exclusive content for our premium members.</p>
      </div>
    );
}

export default Member;
