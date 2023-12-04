import "./NextVideoCardStyles.scss";

export default function NextVideoCard({
  data2,
  onClickNxtShuffle,
  onClickInfoHandler,
  onClickForCommentHandler,
}) {
  //   console.log(data2.title);

  function functionhandler(titlereference1) {
    onClickNxtShuffle(titlereference1);
    onClickInfoHandler(titlereference1);
    onClickForCommentHandler(titlereference1);
  }

  return (
    <section
      className="nxtvideocard"
      onClick={() => {
        functionhandler(data2.title);
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
