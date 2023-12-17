import "./_NextVideoSectionStyles.scss";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

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
      <Link key={object.id} to={`/${object.id}`}>
        {/* this where we attach the object specific ID to the url */}
        <NextVideoCard
          data1 ={data1}
          onClickInfoHandler={onClickInfoHandler}
          data2={object}
          onClickNxtShuffle={onClickNxtShuffle}
          onClickForCommentHandler={onClickForCommentHandler}
      />
      </Link>
    ));

  const [render, setRender] = useState(initalrender);

  function onClickNxtShuffle(titleofclickeddiv) {
    const updatedrender = data2
      .filter((data2set) => data2set.title !== titleofclickeddiv)
      .map((object) => (
        <Link key={object.id} to={`/${object.id}`}>
          {/* this where we attach the object specific ID to the url */}
          <NextVideoCard
            data1 ={data1}
            onClickInfoHandler={onClickInfoHandler}
            data2={object}
            onClickNxtShuffle={onClickNxtShuffle}
            onClickForCommentHandler={onClickForCommentHandler}
          />
        </Link>
      ));
    setRender(updatedrender);
  }

  return (
    <section className="nextvideosection">
      <div className="nextvideosection__title">next videos</div>
      <div className="nextvideosection__list">
        {render}
      </div>
    </section>
  );
}
