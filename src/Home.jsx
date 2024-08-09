import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css"; // Make sure this path matches the location of your CSS file

const Home = () => {
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/room/${roomCode}`);
  };
  return (
    <div className="flex justify-center p-10">
      <form onSubmit={handleSubmit}>
        <div className="bg-red-600  m-auto w-full  h-full rounded-xl ">
          <div className=" pt-6 ml-6">
            <label className="text-3xl ">Enter Room no:</label>
            <input
              type="text"
              placeholder="Enter a room number"
              className="pl-6 m-6 h-12"
              required
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
            ></input>
          </div>
          <div className=" flex justify-center mb-10">
            <button className="border border-black bg-green-500 h-12 w-1/4 rounded-md">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Home;
