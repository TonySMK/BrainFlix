import "./_NextVideoSectionStyles.scss";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function NextVideoSection({sideDataRender}) {
  // console.log(render)

  return (
    <section className="nextvideosection">
      <div className="nextvideosection__title">next videos</div>
      <div className="nextvideosection__list">{sideDataRender}</div>
    </section>
  );
}
