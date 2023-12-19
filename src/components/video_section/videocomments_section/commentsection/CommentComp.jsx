import "./_CommentStyles.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { dateCoverstion, reorder, timeElapsed } from "../../../../utilityfunctions.js";
import axios from "axios";

import CommentCard from "../commentcard/CommentCardComp.jsx";
import AvatarComp from "../../../utility_components/avatar_component/AvatarComp.jsx";
import FormComp from "../../../utility_components/form_component/FormComp.jsx";

export default function CommentSection({
  selectedcommentsdata,
  apk,
  domain,
  vidat,
}) {
  const { pageid } = useParams();
  const [codestate, setCodeState] = useState(true);
  const [newcomments, setNewComments] = useState(null);

  if (pageid !== undefined) {
    selectedcommentsdata = newcomments;
  }

  function fetchcomments(){
    axios.get(domain + vidat + `/${pageid}` + apk).then((result) => {
      let commentdata = result.data.comments;
      setNewComments(commentdata);
      setCodeState(false);
    }).catch(console.log("promise broken"));
  }

  useEffect(() => {
    if (pageid !== undefined) {
      fetchcomments()
    }
  }, [pageid]);

  useEffect(() => {
    if (pageid === undefined) {
      setCodeState(false);
    }
  }, []);


  function onclicklikehandler(name, comment) {
    if(!comment){
      alert("Empty comment?")
    }else{
      axios
      .post(
        domain + vidat + `/${pageid}/comments` + apk, {
          name: `${name}`,
          comment: `${comment}`
      }).then(result => {
          fetchcomments()
      })
      .catch((error) => {
        console.log(error);
      });
    }

  }
  return (
    <>
      {codestate ? (
        <section>Loading Comments</section>
      ) : (
        <>
          <div className="commentsectionbackground">
            <div className="commentsection">
              <div className="commentform">
                <div className="commentform__top">{`${selectedcommentsdata.length} Comments`}</div>
                <div className="commentform__bot">
                  <div className="commentleft">
                    <AvatarComp location="formicon" icon="true" />
                  </div>
                  <FormComp
                    onclicklikehandler={onclicklikehandler}
                  />
                </div>
              </div>

              <div className="commentscollection"></div>
              {reorder(selectedcommentsdata).map((iteration) => (
                <CommentCard
                  message={iteration.comment}
                  name={iteration.name}
                  time={timeElapsed(iteration.timestamp)}
                  key={iteration.id}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
