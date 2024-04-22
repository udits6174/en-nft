import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const location = useLocation();
  const navigateTo = useNavigate();

  const revealMsg = async () => {
    try {
      const _walletAddress = location.state.address;
      const response = await axios.post(
        "https://en-nft.vercel.app/members",
        {
          from: _walletAddress,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      if (data.status === 200) {
        navigateTo("/members");
      } else {
        window.alert("You currently do not hold any NFTs in collection");
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };
  return (
    <>
      <span className="beautiful-sentence">
        I have a secret message for holders of my NFT collection
      </span>
      <br></br>
      <br></br>
      <button onClick={revealMsg}>Reveal Message</button>
    </>
  );
};
export default Home;
