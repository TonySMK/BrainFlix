// auxiliary imports
import "./App.scss";
import { useState } from "react";
import BodyData from "./data/video-details.json";
import SDData from "./data/videos.json";
import { timeElapsed, dateCoverstion } from "./utilityfunctions.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./components/video_section/videocomments_section/commentcard/_CommentCardStyles.scss";

// components
import NavBarComp from "./components/navbar_section/NavBarComp.jsx";
import VideoComp from "./components/video_section/VideoComp.jsx";
import VideoTitleComp from "./components/video_section/videoinfo_section/videotitle/VideoTitleComp.jsx";
import VideoStatsComp from "./components/video_section/videoinfo_section/videostats/VideoStatsComp.jsx";
import VideoDescription from "./components/video_section/videoinfo_section/videodescription_section/VideoDesComp.jsx";
import CommentComp from "./components/video_section/videocomments_section/commentsection/CommentComp.jsx";
import CommentCard from "./components/video_section/videocomments_section/commentcard/CommentCardComp.jsx";
import NextVideoSection from "./components/nextvideo_section/NextVideoSectionComp.jsx";

export default function App() {
  const bodydata = BodyData;
  const sidedata = SDData;
  // ---------------------------------------------------------------------
  const initalmainbodyinfo = bodydata.filter(
    (bodydataset) => bodydataset.title === bodydata[0].title
  );
  // this bodydata[0] is sorta hard coded...
  console.log(initalmainbodyinfo);

  const [mainbodyinfo, setMainBodyInfo] = useState(initalmainbodyinfo[0]);
  // the reason why we need to add a "0", is because the filter method is returning an array (period),
  // and in the array, contains 1 index, that value of that sole index is the object
  // containing all of the information needed to provide to the rest of the main page... the console.log will show an object, that is wrapped in an array "[{the object...}]"

  function updatemainbodyinfo(inboundobjecttitle) {
    // this function connects the two JSON files together
    const updatedmainbodyinfo = bodydata.filter(
      (bodydataset) => bodydataset.title === inboundobjecttitle
    );
    setMainBodyInfo(updatedmainbodyinfo[0]);
  }

  const selectedcommentsdata = mainbodyinfo.comments;
  console.log(selectedcommentsdata);

  // ---------------------------------------------------------------------
  // setting up dynamic comment updating--------------commentpayload-------------------------------
  const [commentpayload, setCommentPayload] = useState(selectedcommentsdata);
  // we are going have an "interception" of the returned comment data,
  // where we are going do somesort of state/formatting check before that comment data is going to the final step of rendering it with .map method
  // -the final step before the actual rendering of the comments
  console.log(commentpayload);
  //this payload represents an array of objects

  function updatingCommentPayloadduetoFormInput(takeinanobject) {
    // gets inbound comment data, then adds a comment, formats it so setCommentRender state can use it
    // that object("takeinanobject") is going to be added to a spreaded array that will then be the referred to the setCommentPayload
    let newcommentpayload = [takeinanobject, ...commentpayload];
    // the line above, basically is: "lets create a new array, that takes in an object (which is the new comment object)
    // and we are going to copy the previously set comments in this array, so now this array represents and contains the original comments along with the new comment"
    // the order in which the of item in the "newcommentpayload" matters!!!
    console.log(newcommentpayload);
    setCommentPayload(newcommentpayload);
    // const updatecomments = commentpayload.map((iteration) => (
    // this is does not work for some reason?
    const updatecomments = newcommentpayload.map((iteration) => (
      // value represents an oject that is a "mapped" object!
      <CommentCard
        message={iteration.comment}
        name={iteration.name}
        time={dateCoverstion(iteration.timestamp)}
        likes={iteration.likes}
        key={iteration.id}
      />
    ));
    setCommentRender(updatecomments);
    // just realize that the intial CommentRender taken in "mapped" object, therefore to maintain functionality,
    // the seCommentRender also needs to take in a "mapped" object,
    // a filtered object alone does not have enough information to be used in the CommentComp component, as this componet is expecting a "completely rendered out" comment object
  }

  // ---------------------------------------------------------------------
  const intialcommentrender = selectedcommentsdata.map((iteration) => (
    <CommentCard
      message={iteration.comment}
      name={iteration.name}
      time={dateCoverstion(iteration.timestamp)}
      likes={iteration.likes}
      key={iteration.id}
    />
  ));

  const [commentrender, setCommentRender] = useState(intialcommentrender);

  function updatedcommentrender(datafromdata1) {
    const forcorpresondingdata = bodydata.filter(
      (bodydataset) => bodydataset.title === datafromdata1
    );
    let updatedcommentarray = forcorpresondingdata[0].comments;
    console.log(updatedcommentarray);

    const updatedcommentrender = updatedcommentarray.map((iteration) => (
      <CommentCard
        message={iteration.comment}
        name={iteration.name}
        time={dateCoverstion(iteration.timestamp)}
        likes={iteration.likes}
        key={iteration.id}
      />
    ));
    setCommentRender(updatedcommentrender);
  }

  // ---------------------------------------------------------------------
  return (
    <div className="appwrapper">
      <NavBarComp />
      <VideoComp
        videodata={mainbodyinfo.video}
        imagedata={mainbodyinfo.image}
      />
      ​
      <section className="dtwarpperbackground">
        <section className="dtwrapper0">
          <section className="dtwrapper1">
            <VideoTitleComp titledata={mainbodyinfo.title} />
            <VideoStatsComp
              channeldata={mainbodyinfo.channel}
              timestampdata={dateCoverstion(mainbodyinfo.timestamp)}
              likesdata={mainbodyinfo.likes}
              viewsdata={mainbodyinfo.views}
            />
            <VideoDescription descriptiondata={mainbodyinfo.description} />
            <CommentComp
              mappedelements={commentrender}
              commentdata={commentpayload}
              updatecommentpayload={updatingCommentPayloadduetoFormInput}
            />
          </section>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <NextVideoSection
                    onClickInfoHandler={updatemainbodyinfo}
                    onClickForCommentHandler={updatedcommentrender}
                    data1={bodydata}
                    data2={sidedata}
                  />
                }
              />
              <Route
                path="/:pageid"
                element={
                  <NextVideoSection
                    onClickInfoHandler={updatemainbodyinfo}
                    onClickForCommentHandler={updatedcommentrender}
                    data1={bodydata}
                    data2={sidedata}
                  />
                }
              />
            </Routes>
          </BrowserRouter>
        </section>
      </section>
    </div>
  );
}

/*
// spread array and add new object to make a new clone array
let list = SDData
console.log(list[0].comments) 

let comments = list[0].comments

let newdata = {name:"tony", color:"red"}

let updatedarray = [...comments, newdata]

console.log(updatedarray)
*/
