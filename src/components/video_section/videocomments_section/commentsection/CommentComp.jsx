import "./_CommentStyles.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { dateCoverstion } from "../../../../utilityfunctions.js";

import CommentCard from "../commentcard/CommentCardComp.jsx";
import AvatarComp from "../../../utility_components/avatar_component/AvatarComp.jsx";
import Button from "../../../utility_components/button_component/ButtonComp.jsx";
import FormComp from "../../../utility_components/form_component/FormComp.jsx";

export default function CommentSection({selectedcommentsdata }) {
  const { pageid } = useParams();

  const intialcommentrender = selectedcommentsdata.map((iteration) => (
    <CommentCard
      message={iteration.comment}
      name={iteration.name}
      time={dateCoverstion(iteration.timestamp)}
      likes={iteration.likes}
      key={iteration.id}
    />
  ));
  const [commentpayload, setCommentPayload] = useState(selectedcommentsdata)
  const [commentrender, setCommentRender] = useState(intialcommentrender);

  useEffect(() => {
    console.log("mounting");
    const anothercommentrender = selectedcommentsdata.map((iteration) => (
      <CommentCard
        message={iteration.comment}
        name={iteration.name}
        time={dateCoverstion(iteration.timestamp)}
        likes={iteration.likes}
        key={iteration.id}
      />
    ));
    setCommentRender(anothercommentrender);
  }, [pageid]);

  function updatingCommentPayloadduetoFormInput(takeinanobject) {
    let newcommentpayload = [takeinanobject, ...commentpayload];

    setCommentPayload(newcommentpayload);
    const updatecomments = newcommentpayload.map((iteration) => (
      <CommentCard
        message={iteration.comment}
        name={iteration.name}
        time={dateCoverstion(iteration.timestamp)}
        likes={iteration.likes}
        key={iteration.id}
      />
    ));
    setCommentRender(updatecomments);
  }

  return (
    <div className="commentsectionbackground">
      <div className="commentsection">
        <div className="commentform">
          <div className="commentform__top">{`${commentpayload.length} Comments`}</div>
          <div className="commentform__bot">
            <div className="commentleft">
              <AvatarComp location="formicon" icon="true" />
            </div>
            <FormComp 
            onClickDataHandler = {updatingCommentPayloadduetoFormInput}
            />
          </div>
        </div>

        <div className="commentscollection"></div>
        {commentrender}
      </div>
    </div>
  );
}
