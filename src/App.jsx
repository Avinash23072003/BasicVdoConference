import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import RoomPage from "./RoomPage";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/room/:roomId" element={<RoomPage></RoomPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
