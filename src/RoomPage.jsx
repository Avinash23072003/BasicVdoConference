import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router";
import { useEffect, useRef } from "react";

const RoomPage = () => {
  const { roomId } = useParams();
  const roomElement = useRef(null);

  useEffect(() => {
    const initMeeting = async () => {
      const AppId = 1137922331;
      const Token = "a0d2cbd80c846d38f5fa20a48722b4e4";

      console.log("AppId:", AppId);
      console.log("Server Secret:", Token);

      if (!AppId || !Token) {
        console.error("Environment variables are not set correctly.");
        return;
      }

      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        AppId,
        Token,
        roomId,
        Date.now().toString(),
        "Avinash"
      );

      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: roomElement.current,
        scenario: {
          mode: ZegoUIKitPrebuilt.VideoConference,
        },
      });
    };

    initMeeting();
  }, [roomId]);

  return (
    <div className="room">
      <div ref={roomElement}></div>
    </div>
  );
};

export default RoomPage;
