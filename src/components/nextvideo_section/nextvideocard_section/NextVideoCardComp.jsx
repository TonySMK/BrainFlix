import "./_NextVideoCardStyles.scss";
import { useParams } from "react-router-dom";

export default function NextVideoCard({ data1, data2, onClickNxtShuffle }) {
  // console.log(data2)

  // before we were leverageing the format of the render of the NextVdieoSection array.title,
  // to dictact what information should be used to .find then .filer then .map for
  // the information that would be used in the main body...
  // now we have decoupled the the object for rendering the NextVdieoSection and what will be shown on in the main body

  // now we can rework those existing functions that help change the final output array to render the NextVdieoSection
  function log(thing) {
    console.log(thing.title);
  }
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
