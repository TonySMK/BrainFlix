import "./_NextVideoSectionStyles.scss";
import { useState } from "react";

import NextVideoCard from "./nextvideocard_section/NextVideoCardComp.jsx";

export default function NextVideoSection({
  data1,
  data2,
  onClickInfoHandler,
  onClickForCommentHandler,
}) {
  // console.log(data2);

  const initalrender = data2
    .filter((data2set) => data2set.title !== data2[0].title)
    .map((object) => (
      <NextVideoCard
        key={object.id}
        onClickInfoHandler={onClickInfoHandler}
        data2={object}
        onClickNxtShuffle={onClickNxtShuffle}
        onClickForCommentHandler={onClickForCommentHandler}
      />
    ));

  const [render, setRender] = useState(initalrender);

  function onClickNxtShuffle(titleofclickeddiv) {
    const updatedrender = data2
      .filter((data2set) => data2set.title !== titleofclickeddiv)
      .map((object) => (
        <NextVideoCard
          key={object.id}
          data2={object}
          onClickNxtShuffle={onClickNxtShuffle}
          onClickInfoHandler={onClickInfoHandler}
          onClickForCommentHandler={onClickForCommentHandler}
        />
      ));
    setRender(updatedrender);
  }

  return (
    <section className="nextvideosection">
      <div className="nextvideosection__title">next videos</div>
      <div className="nextvideosection__list">{render}</div>
    </section>
  );
}
