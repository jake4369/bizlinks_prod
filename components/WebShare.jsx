import { RWebShare } from "react-web-share";
import { FaShare } from "react-icons/fa";

const WebShare = ({ profileUrl, userName }) => {
  return (
    <RWebShare
      data={{
        text: `Leave reviews for ${userName} at - `,
        url: profileUrl,
        title: "Share",
      }}
      onClick={() => console.log("shared successfully!")}
    >
      <button className="blue__btn">
        Share <FaShare className="ml-2" />
      </button>
    </RWebShare>
  );
};

export default WebShare;
