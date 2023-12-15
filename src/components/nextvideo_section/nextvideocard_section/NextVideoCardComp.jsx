import "./_NextVideoCardStyles.scss";
import { useParams } from "react-router-dom";

export default function NextVideoCard({
  data1,
  data2,
  onClickNxtShuffle,
  onClickInfoHandler,
  onClickForCommentHandler,
}) {
  const { pageid } = useParams();

  console.log(pageid)
  
  // let sam = data1.find((eachone) => eachone.id === pageid)
  // console.log(sam)
  // console.log(sam.title)
  // idk why "sam.title" does not work, but "sam" return an object

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
