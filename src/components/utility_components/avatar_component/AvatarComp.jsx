import "./_AvatarStyles.scss";
import AvatarIcon from "../../../assets/images/Mohan-muruge.jpg";
import AvatarPlaceholder from "../../../assets/images/avatar_placeholder.png";

export default function AvatarLogo(props) {
  let iconImage;
  let suffix;
  let alterateText;

  if (props.icon === "true") {
    iconImage = AvatarIcon;
    suffix = "img1";
    alterateText = "MohanM";
  } else {
    iconImage = AvatarPlaceholder;
    suffix = "img2";
    alterateText = "Undefined";
  }

  return (
    <div className={"avatar__" + props.location}>
      <img
        className={"avatar__" + props.location + "__" + suffix}
        src={iconImage}
        alt={alterateText}
      />
    </div>
  );
}
