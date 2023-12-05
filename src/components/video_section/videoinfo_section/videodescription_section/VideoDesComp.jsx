import "./_VideoDesStyles.scss";

export default function VideoDesComp({ descriptiondata }) {
  return (
    <div className="videodesbackground">
      <div className="videodes">{descriptiondata}</div>
    </div>
  );
}
