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

  console.log(pageid);
  console.log(selectedcommentsdata);

  if (pageid !== undefined) {
    selectedcommentsdata = newcomments;
  }

  function fetchcomments(){
    axios.get(domain + vidat + `/${pageid}` + apk).then((result) => {
      console.log(result.data.comments);
      let commentdata = result.data.comments;
      setNewComments(reorder(commentdata));
      setCodeState(false);
    }).catch(console.log("promise broken"));
  }

  useEffect(() => {
    if (pageid !== undefined) {
      console.log("hahaha");
      fetchcomments()
    }
  }, [pageid]);

  useEffect(() => {
    if (pageid === undefined) {
      // console.log("222222");
      setCodeState(false);
    }
  }, []);


  function onclicklikehandler(name, comment) {
    axios
      .post(
        domain + vidat + `/${pageid}/comments` + apk, {
          name: `${name}`,
          comment: `${comment}`
      }).then(result => {
          console.log(result)
          console.log("the post is successful")
          fetchcomments()
      })
      .catch((error) => {
        console.log(error);
      });

    console.log("sdfs");
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
                {/* <div className="commentform__top">{`${commentpayload.length} Comments`}</div> */}
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
              {selectedcommentsdata.map((iteration) => (
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
