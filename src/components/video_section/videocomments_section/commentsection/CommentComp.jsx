import "./_CommentStyles.scss";
import { useState } from "react";


import CommentCard from "../commentcard/CommentCardComp.jsx";
import AvatarComp from "../../../utility_components/avatar_component/AvatarComp.jsx";
import Button from "../../../utility_components/button_component/ButtonComp.jsx";
import FormComp from "../../../utility_components/form_component/FormComp.jsx";

export default function CommentSection({ mappedelements, commentdata, updatecommentpayload }) {
  
// console.log(mappedelements)
  return (
    <div className="commentsectionbackground">
      <div className="commentsection">
        <div className="commentform">
          {/* <div className="commentform__top">{`${commentdata.length} Comments`}</div> */}
          <div className="commentform__bot">
            <div className="commentleft">
              <AvatarComp location="formicon" icon="true" />
            </div>
            <FormComp 
            onClickDataHandler = {updatecommentpayload}
            />
          </div>
        </div>

        <div className="commentscollection"></div>
        {mappedelements}
      </div>
    </div>
  );
}
