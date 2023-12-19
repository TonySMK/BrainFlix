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
  // const [newcomments, setNewComments] = useState(null);
  const [commentstate, setCommentState] = useState(selectedcommentsdata)
  const defualtpageid = "84e96018-4022-434e-80bf-000ce4cd12b8"

  // if (pageid !== undefined) {
  //   selectedcommentsdata = newcomments;
  // }

//----------
  // useEffect(()=>{
  //   if (pageid !== undefined) {
  //     console.log(newcomments)
  //     setCommentState(newcomments)
  //   }
  // })

  function fetchcomments(){
    axios.get(domain + vidat + `/${pageid}` + apk).then((result) => {
      let commentdata = result.data.comments;
      // setNewComments(commentdata);
      // setCommentState(newcomments)
      setCommentState(commentdata);
      setCodeState(false);
    }).catch(console.log("promise broken"));
  }

    function fetchcomments2(){
    axios.get(domain + vidat + `/${defualtpageid}` + apk).then((result) => {
      let commentdata = result.data.comments;
      setCommentState(commentdata);
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
      if(pageid==undefined){
        axios
      .post(
        domain + vidat + `/${defualtpageid}/comments` + apk, {
          name: `${name}`,
          comment: `${comment}`
      }).then(result => {
          //----------v
          fetchcomments2()
          // with fetchcomment2() + some other stuff, we get default page to upadate but we break the other route to either not be able to fetch propertly and/or cause a infinite rerender and/or out array for .map breaks
          // over here have to somehow update the snapshot of the axios call data made in app.js that was use to render "/" route
      })
      .catch((error) => {
        console.log(error);
      });
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
  }
  console.log(commentstate)
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
                    onclicklikehandler={onclicklikehandler}
                  />
                </div>
              </div>

              <div className="commentscollection"></div>
              {/* ----------- */}
              
              {/* {reorder(selectedcommentsdata).map((iteration) => ( */}
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
