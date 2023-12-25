import "./_CommentStyles.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { reorder, timeElapsed } from "../../../../utilityfunctions.js";
import axios from "axios";

import CommentCard from "../commentcard/CommentCardComp.jsx";
import AvatarComp from "../../../utility_components/avatar_component/AvatarComp.jsx";
import FormComp from "../../../utility_components/form_component/FormComp.jsx";

export default function CommentSection({
  selectedcommentsdata,
  api_key,
  domain,
  video_subdirectory,
}) {
  const { pageid } = useParams();
  const [codestate, setCodeState] = useState(true);
  const [commentstate, setCommentState] = useState(selectedcommentsdata) // this just set the inital comments array for that tab
  const defualtpageid = "84e96018-4022-434e-80bf-000ce4cd12b8" // this section allows functionality on defualt page (ex. http://localhost:3000/)


  function fetchcomments(){
    axios.get(domain + video_subdirectory + `/${pageid}` + api_key).then((result) => {
      let commentdata = result.data.comments;
      setCommentState(commentdata);
      setCodeState(false);
    }).catch((e) => {
      console.log("promise broken", e);
    });
  }

    function fetchcomments2(){
      // this section allows functionality on defualt page (ex. http://localhost:3000/)
      // ... that being able to grab the most updated comment array...
    axios.get(domain + video_subdirectory + `/${defualtpageid}` + api_key).then((result) => {
      let commentdata = result.data.comments;
      setCommentState(commentdata);
      setCodeState(false);
    }).catch((e) => {
      console.log("promise broken", e);
    });
  }

  function postComment(pagidintake, name, comment){
    axios
      .post(
        domain + video_subdirectory + `/${pagidintake}/comments` + api_key, {
          name: `${name}`,
          comment: `${comment}`
      }).then(result => {
        if (pageid===undefined){
      // this section allows functionality on defualt page (ex. http://localhost:3000/)
          fetchcomments2()
        }else{
          fetchcomments()
        }

      })
      .catch((e)=>console.log("promise broken"));
  }

  useEffect(() => {
    if (pageid === undefined) {
      // this section allows functionality on defualt page (ex. http://localhost:3000/)
      fetchcomments2()
      setCodeState(false);
    }
  }, []);

  useEffect(() => {
    if (pageid !== undefined) {
      fetchcomments()
    }
  }, [pageid]);



  function onClickFormHandler(name, comment) {
    if(!comment){
      alert("Empty comment?")
    }else if (pageid!==undefined){
      postComment(pageid, name, comment)
    } else {
      // this section allows functionality on defualt page (ex. http://localhost:3000/)
      // that being able to post commments on the default page, and see them rendered with fetchcomments2
      postComment(defualtpageid, name, comment)
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
                <div className="commentform__top">{`${commentstate.length} Comments`}</div>
                <div className="commentform__bot">
                  <div className="commentleft">
                    <AvatarComp location="formicon" icon="true" />
                  </div>
                  <FormComp
                    onClickFormHandler={onClickFormHandler}
                  />
                </div>
              </div>

              <div className="commentscollection"></div>
              {reorder(commentstate).map((iteration) => (
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
