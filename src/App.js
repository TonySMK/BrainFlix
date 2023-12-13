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
    // ---------------------------------------------------------------------
  const initalmainbodyinfo = bodydata.filter((bodydataset)=> bodydataset.title === bodydata[0].title)

  const[mainbodyinfo, setMainBodyInfo] = useState(initalmainbodyinfo[0])

  function updatemainbodyinfo(inboundobject){
    const updatedmainbodyinfo = bodydata.filter((bodydataset)=> bodydataset.title === inboundobject)
    setMainBodyInfo(updatedmainbodyinfo[0])
  }

  const commentsdata = mainbodyinfo.comments

  // ---------------------------------------------------------------------
  // setting up dynamic comment updating--------------commentpayload-------------------------------
  const [commentpayload, setCommentPayload] = useState(commentsdata)
  // we are going have an "interception" of the returned comment data, 
  // where we are going do somesort of state/formatting check before that comment data is going to the final step of rendering it with .map method 
  // -the final step before the actual rendering of the comments
  console.log(commentpayload)

  function updatingCommentPayloadduetoFromInput (takeinanobject) {
    // gets inbound comment data, then adds a comment, formats it so setCommentRender state can use it
    // that object("takeinanobject") is going to be added to a spreaded array that will then be the referred to the setCommentPayload
    let newcommentpayload = [takeinanobject, ...commentpayload]
    setCommentPayload(newcommentpayload)
    // const updatecomments = commentpayload.map((iteration) => ( 
    // this is does not work for some reason?    
    const updatecomments = newcommentpayload.map((iteration) => (
      
      <CommentCard
        message={iteration.comment}
        name={iteration.name}
        time={dateCoverstion(iteration.timestamp)}
        likes={iteration.likes}
        key={iteration.id}
      />
      ))
    setCommentRender(updatecomments)
  }
  // ---------------------------------------------------------------------
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
    <div  className='appwrapper'>
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
      commentdata={commentpayload}
      updatecommentpayload = {updatingCommentPayloadduetoFromInput}
    />
    <NextVideoSection
      onClickInfoHandler={updatemainbodyinfo}
      onClickForCommentHandler={updatedcommentrender}
      data1={bodydata}
      data2={sidedata}
    />
    </div>
  );
};


/*
// spread array and add new object to make a new clones array
let list = SDData
console.log(list[0].comments) 

let comments = list[0].comments

let newdata = {name:"tony", color:"red"}

let updatedarray = [...comments, newdata]

console.log(updatedarray)
*/