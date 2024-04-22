import { useEffect } from "react";
import io from "socket.io-client";
import { useNavigate } from "react-router-dom";
import "../App.css";
import NFT1 from "../assets/NFT1.png";
import NFT2 from "../assets/NFT2.png";
import NFT3 from "../assets/NFT3.png";
const Member = () => {
  const navigateTo = useNavigate();
  useEffect(() => {
    const socketInstance = io("https://en-nft.onrender.com", {
    reconnectionAttempts: 3,
    timeout: 10000,
  });

    socketInstance.on("nftsUpdated", (data) => {
      console.log(data.userNFTs);
      if (data.userNFTs < 1) {
        navigateTo("/");
      }
    });

    return () => {
      socketInstance.disconnect();
    };
  }, [navigateTo]);

  return (
    <>
      <div className="members-only-page">
        <h1>Welcome to the Premium Members Only Page!</h1>
        <p>These are some exclusive NFTs for our premium members.</p>
      </div>
      <div
        style={{ display: "flex", justifyContent: "space-between", padding:"50px" }}
      >
        <div>
          <img
            src={NFT1}
            style={{ width: "150px", height: "200px" }}
            alt="Ticket"
          />
          <h2>cryptopunks</h2>
        </div>
        <div>
          <img
            src={NFT2}
            style={{ width: "150px", height: "200px" }}
            alt="Ticket"
          />
          <h2> LNFTs by Dicaso</h2>
        </div>
        <div>
          <img
            src={NFT3}
            style={{ width: "150px", height: "200px" }}
            alt="Ticket"
          />
          <h2>nakamigos</h2>
        </div>
      </div>
    </>
  );
};

export default Member;
