// auxiliary imports
import './App.scss';
import { useState } from 'react';
import BodyData from "./data/video-details.json"
import SDData from "./data/videos.json"
import {timeElapsed, dateCoverstion} from "./utilityfunctions.js"

// components
import NavBarComp from './components/navbar_section/NavBarComp.jsx';
import VideoComp from "./components/video_section/VideoComp.jsx";
import VideoTitleComp from "./components/video_section/videoinfo_section/videotitle/VideoTitleComp.jsx"
import VideoStatsComp from "./components/video_section/videoinfo_section/videostats/VideoStatsComp.jsx"
import VideoDescription from "./components/video_section/videoinfo_section/videodescription_section/VideoDesComp.jsx"
import CommentComp from "./components/video_section/videocomments_section/commentsection/CommentComp.jsx"
import CommentCard from "./components/video_section/videocomments_section/commentcard/CommentCardComp.jsx"
import NextVideoSection from './components/nextvideo_section/NextVideoSectionComp.jsx';



export default function App() {
  const bodydata = BodyData
  const sidedata = SDData
  // console.log(bodydata)

  const initalmainbodyinfo = bodydata.filter((bodydataset)=> bodydataset.title === bodydata[0].title)

  // console.log(initalmainbodyinfo)
  const[mainbodyinfo, setMainBodyInfo] = useState(initalmainbodyinfo[0])

  // console.log(mainbodyinfo)

  function updatemainbodyinfo(inboundobject){
    const updatedmainbodyinfo = bodydata.filter((bodydataset)=> bodydataset.title === inboundobject)
    // console.log("0000000000000000000000000000")
    // console.log(updatedmainbodyinfo)
    setMainBodyInfo(updatedmainbodyinfo[0])
  }

  // console.log(mainbodyinfo)
  // console.log(mainbodyinfo.comments)
  // ---------------------------------------------------------------------
  const commentsdata = mainbodyinfo.comments
  // console.log(commentsdata)

  const intialcommentrender = commentsdata.map((iteration) => (
    <CommentCard
      message={iteration.comment}
      name={iteration.name}
      time={dateCoverstion(iteration.timestamp)}
      likes={iteration.likes}
      key={iteration.id}
    />
  ));


  const [commentrender, setCommentRender] = useState(intialcommentrender);

  
  function updatedcommentrender(datafromdata1){
    const forcorpresondingdata = bodydata.filter((bodydataset)=> bodydataset.title === datafromdata1)
    let updatedcommentarray = forcorpresondingdata[0].comments
    console.log(updatedcommentarray)
    const updatedcommentrender = updatedcommentarray.map((iteration) => (
      <CommentCard
        message={iteration.comment}
        name={iteration.name}
        time={dateCoverstion(iteration.timestamp)}
        likes={iteration.likes}
        key={iteration.id}
      />
      ))
    setCommentRender(updatedcommentrender)
  }

  // ---------------------------------------------------------------------
  return (
    <>
    <NavBarComp />
    <VideoComp 
      videodata = {mainbodyinfo.video}
      imagedata = {mainbodyinfo.image}
    />
    <VideoTitleComp
      titledata = {mainbodyinfo.title}
    />
    <VideoStatsComp 
      channeldata = {mainbodyinfo.channel}
      timestampdata = {dateCoverstion(mainbodyinfo.timestamp)}
      likesdata = {mainbodyinfo.likes}
      viewsdata = {mainbodyinfo.views}
    />
    <VideoDescription 
    descriptiondata = {mainbodyinfo.description}
    />
    <CommentComp 
      mappedelements={commentrender}
      commentdata={commentsdata}
    />
    <NextVideoSection
      onClickInfoHandler={updatemainbodyinfo}
      onClickForCommentHandler={updatedcommentrender}
      data1={bodydata}
      data2={sidedata}
    />
    </>
  );
};