import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "../App.css";
import Ticket from "../assets/Ticket.png";
import General from "../assets/general_pass.png";

const Home = () => {
  const location = useLocation();
  const navigateTo = useNavigate();

  const revealMsg = async () => {
    try {
      const _walletAddress = location.state.address;
      const response = await axios
        .post(
          "https://en-nft.vercel.app/members",
          {
            from: _walletAddress,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        // .then((response) => {
        //   let token = response.data.access; // Extract the token
        //   localStorage.setItem("SavedToken", "Bearer " + token); // Save to localStorage
        //   axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        // });
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
      <div style={{ display: "flex", justifyContent: "space-even", gap: "150px" }}>
        <div>
          <img
            src={Ticket}
            style={{ width: "256px", height: "256px" }}
            alt="Ticket"
          />
          <h2>EXCLUSIVE ACCESS TICKET</h2>
        </div>
        <div>
          <img
            src={General}
            style={{ width: "256px", height: "256px" }}
            alt="Ticket"
          />
          <h2>GENERAL ACCESS TICKET</h2>
        </div>
      </div>
      <span className="beautiful-sentence">
        Click below for exclusive members only page.
      </span>
      <br></br>
      <br></br>
      <button onClick={revealMsg}>Reveal Message</button>
    </>
  );
};
export default Home;
