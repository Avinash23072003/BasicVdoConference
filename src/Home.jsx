import "./App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/room/${roomCode}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="Home">
          <label>Enter Room no.</label>
          <input
            type="text"
            placeholder="Enter a room number"
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
          ></input>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};
export default Home;
