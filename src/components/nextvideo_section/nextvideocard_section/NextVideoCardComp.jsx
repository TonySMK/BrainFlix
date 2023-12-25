import "./_NextVideoCardStyles.scss";

export default function NextVideoCard({ sidedata, onClickNxtShuffle }) {
  return (
    <section
      className="nxtvideocard"
      onClick={() => {
        onClickNxtShuffle(sidedata.title);
      }}
    >
      <div className="nxtvideocard__thumbnailcontainer">
        <img className="thumbnail_image" src={sidedata.image} alt="somealt" />
      </div>
      <div className="nxtvideocard__info">
        <div className="title">{sidedata.title}</div>
        <div className="author">{sidedata.channel}</div>
      </div>
    </section>
  );
}
