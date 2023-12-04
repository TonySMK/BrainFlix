import "./VideoTitleStyles.scss";

export default function TitleVideoComp({ titledata }) {
  return (
    <div className="videotitlebackground">
      <div className="videotitle">{titledata}</div>
    </div>
  );
}
