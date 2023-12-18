import "./_NextVideoCardStyles.scss";

export default function NextVideoCard({ data2, onClickNxtShuffle }) {
  return (
    <section
      className="nxtvideocard"
      onClick={() => {
        onClickNxtShuffle(data2.title);
      }}
    >
      <div className="nxtvideocard__thumbnailcontainer">
        <img className="thumbnail_image" src={data2.image} alt="somealt" />
      </div>
      <div className="nxtvideocard__info">
        <div className="title">{data2.title}</div>
        <div className="author">{data2.channel}</div>
      </div>
    </section>
  );
}
