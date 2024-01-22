import "./_CommentCardStyles.scss";
import AvatarComp from "../../../utility_components/avatar_component/AvatarComp.jsx";

export default function CommentCard({ message, name, time }) {
  return (
    <>
      <div className="cardouterwrap">
        <div className="cardleft">
          <AvatarComp location="formicon" icon="false" />
        </div>

        <div className="cardright">
          <div className="cardright__top">
            <div className="cardright__top__name">{name}</div>
            <div className="cardright__top__date">{time}</div>
          </div>

          <div className="cardright__mid">{message}</div>
        </div>
      </div>
    </>
  );
}
