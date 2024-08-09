import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router";
import { AppId, Token } from "./utils/constant";

const RoomPage = () => {
  const { roomId } = useParams();
  const myMeeting = async (element) => {
    const appId = 1137922331;
    const serverSecret = "a0d2cbd80c846d38f5fa20a48722b4e4";

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      roomId,
      Date.now().toString(),
      "Avinash"
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  };

  return (
    <div className="room">
      <div ref={myMeeting}></div>
    </div>
  );
};

export default RoomPage;
