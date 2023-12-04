import "./CommentStyles.scss";
import { useState } from "react";

import CommentCard from "../commentcard/CommentCardComp.jsx";
import AvatarComp from "../../../utility_components/avatar_component/AvatarComp.jsx";
import Button from "../../../utility_components/button_component/ButtonComp.jsx";

export default function CommentSection({ mappedelements, commentdata }) {
  // console.log(commentdata.length);

  // const something = commentsdata.map((iteration) => (
  //   <CommentCard
  //     message={iteration.comment}
  //     name={iteration.name}
  //     time={dateCoverstion(iteration.timestamp)}
  //     likes={iteration.likes}
  //     key={iteration.id}
  //   />
  // ));

  // console.log(something);

  // const [commentrender, setCommentRender] = useState(something);

  return (
    <div className="commentsectionbackground">
      <div className="commentsection">
        <div className="commentform">
          <div className="commentform__top">{`${commentdata.length} Comments`}</div>
          <div className="commentform__bot">
            <div className="commentleft">
              <AvatarComp location="formicon" icon="true" />
            </div>

            <form className="commentright">
              <label className="commentright__label">
                Join the Conversation
              </label>
              <textarea
                className="commentright__textarea"
                id="message"
                type="text"
                placeholder="add a new comment"
                maxLength="250"
              ></textarea>
              <Button name="comment" />
            </form>
          </div>
        </div>

        <div className="commentscollection"></div>
        {mappedelements}
      </div>
    </div>
  );
}
