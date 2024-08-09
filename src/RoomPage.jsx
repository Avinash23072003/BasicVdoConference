import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router";
const RoomPage = () => {
  const { roomId } = useParams();
  const myMeeting = async (element) => {
    const appId = import.meta.env.VITE_ZEGOCLOUD_APP_ID;
    const serverSecret = import.meta.env.VITE_ZEGOCLOUD_SERVER_SECRET;

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
