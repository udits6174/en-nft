import {useNavigate,useLocation} from "react-router-dom"

const Home=()=>{
    const location = useLocation()
    const navigateTo=useNavigate()

    const revealMsg=async()=>{
        try{
          const _walletAddress = location.state.address;
           const res = await fetch(`http://localhost:5000/members`,{
              method:"POST",
              headers:{
                "content-type":"application/json"
              },
              body:JSON.stringify({from:_walletAddress})
           })
           const data = await res.json();
           if(data.status===200){
             navigateTo("/members")
           }else{
             window.alert("You currently do not hold any NFTs in collection")
           }
        }catch(error){
           console.error(error)
        }
    }
    return(
    <>
        <span className="beautiful-sentence">I have a secret message for holders of my NFT collection</span>
        <br></br>
        <br></br>
        <button onClick={revealMsg}>Reveal Message</button>
    </>
    )
 }
 export default Home;