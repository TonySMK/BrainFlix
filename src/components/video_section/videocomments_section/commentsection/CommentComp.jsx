import "./_CommentStyles.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { reorder, timeElapsed } from "../../../../utilityfunctions.js";
import axios from "axios";

import CommentCard from "../commentcard/CommentCardComp.jsx";
import AvatarComp from "../../../utility_components/avatar_component/AvatarComp.jsx";
import FormComp from "../../../utility_components/form_component/FormComp.jsx";

export default function CommentSection({
  selectedCommentsData,
  apiKey,
  domain,
  videoSubdirectory,
}) {
  const { pageId } = useParams();
  const [compState, setCompState] = useState(true);
  const [commentState, setCommentState] = useState(selectedCommentsData) // this just set the inital comments array for that tab
  const defualtPageId = "VROOLYJIBOSGYRSXTAAFDINPYFDLJQ" // this section allows functionality on defualt page (ex. http://localhost:3000/)


  function fetchComments(){
    // this fetch function handles the grabbing of comments when the url has a pageId
    axios.get(domain + videoSubdirectory + `/${pageId}` + apiKey).then((result) => {
      let getCommentData = result.data.comments;
      setCommentState(getCommentData);
      setCompState(false);
    }).catch((e) => {
      console.log("promise broken", e);
    });
  }

    function fetchComments2(){
      // this section allows functionality on defualt page (ex. http://localhost:3000/)
      // ... that being able to grab the most updated comment array...
      // this fetch function handles the grabbing of comment for the deftualt page(iow, the page with the bmx thing...)
    axios.get(domain + videoSubdirectory + `/${defualtPageId}` + apiKey).then((result) => {
      let getCommentData = result.data.comments;
      setCommentState(getCommentData);
      setCompState(false);
    }).catch((e) => {
      console.log("promise broken", e);
    });
  }

  function postComment(pageIdIntake, name, comment){
    axios
      .post(
        domain + videoSubdirectory + `/${pageIdIntake}/comments` + apiKey, {
          name: `${name}`,
          comment: `${comment}`
      }).then(result => {
        if (pageId===undefined){
      // this section allows functionality on defualt page (ex. http://localhost:3000/)
          fetchComments2()
        }else{
          fetchComments()
        }

      })
      .catch((e)=>console.log("promise broken"));
  }

  useEffect(() => {
    if (pageId !== undefined) {
      // this are the initial fetches
      fetchComments()
    }else{
      fetchComments2()
    }
  }, [pageId]);



  function onClickFormHandler(name, comment) {
    if(!comment){
      alert("Empty comment?")
    }else if (pageId!==undefined){
      postComment(pageId, name, comment)
    } else {
      // this section allows functionality on defualt page (ex. http://localhost:3000/)
      // that being able to post commments on the default page, and see them rendered with fetchcomments2
      postComment(defualtPageId, name, comment)
    }
    
  }

  return (
    <>
      {compState ? (
        <section>Loading Comments</section>
      ) : (
        <>
          <div className="commentsectionbackground">
            <div className="commentsection">
              <div className="commentform">
                <div className="commentform__top">{`${commentState.length} Comments`}</div>
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
              {reorder(commentState).map((iteration) => (
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
