import "./_NextVideoSectionStyles.scss";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import NextVideoCard from "./nextvideocard_section/NextVideoCardComp.jsx";

export default function NextVideoSection({data2 }) {
  const { pageid } = useParams();

  let intialfilteroutitle

  if (pageid !== undefined) {
    let something = data2.find((element) => element.id === pageid);
    intialfilteroutitle = something.title;
  } else if (pageid === undefined) {
    intialfilteroutitle = data2[0].title;
  }

  const initalrender = data2
    .filter((data2set) => data2set.title !== intialfilteroutitle)
    .map((object) => (
      <Link key={object.id} to={`/${object.id}`}>
        <NextVideoCard
          data2={object}
          onClickNxtShuffle={onClickNxtShuffle}
        />
      </Link>
    ));

  const [render, setRender] = useState(initalrender);

  function onClickNxtShuffle(titleofclickeddiv) {
    const updatedrender = data2
      .filter((data2set) => data2set.title !== titleofclickeddiv)
      .map((object) => (
        <Link key={object.id} to={`/${object.id}`}>
          <NextVideoCard
            data2={object}
            onClickNxtShuffle={onClickNxtShuffle}
          />
        </Link>
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
