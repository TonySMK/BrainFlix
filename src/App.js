import './App.scss';
import GeneralVideoData from "./data/video-details.json"
import SidebarVideoData from "./data/videos.json"
import NavBarComp from './components/navbar_section/NavBarComp.jsx';
import VideoComp from "./components/video_section/VideoComp.jsx";
import VideoTitleComp from "./components/video_section/videoinfo_section/videotitle/VideoTitleComp.jsx"
import VideoStatsComp from "./components/video_section/videoinfo_section/videostats/VideoStatsComp.jsx"
import VideoDescription from "./components/video_section/videoinfo_section/videodescription_section/VideoDesComp.jsx"
import CommentComp from "./components/video_section/videocomments_section/commentsection/CommentComp.jsx"
import NextVideoSection from './components/nextvideo_section/NextVideoSectionComp.jsx';
import { useState } from 'react';
function App() {

  let generaldata = GeneralVideoData
  // the genvidarray contains in data the get used the overall body of site
  let sidebardata = SidebarVideoData
  // gensiderbat contains the data in the sidebar
  let masaterarry = [GeneralVideoData, SidebarVideoData]
  /*
  gensidebar.forEach(object => {
    // this adds a UUID property for each object in the array
    let i = 0
    object.key=uuidv4(i++)
  })
  console.log(gensidebar)
  */
  // console.log(DatatNextVideo[0])
  console.log(generaldata)

  let initalfilteredsidebar = SidebarVideoData.filter(subject => subject.title !== "BMX Rampage: 2021 Highlights")
  console.log(initalfilteredsidebar)

  let intialvideoselect = generaldata[0]
  // let intialvideoselect = generaldata[index = 0]
  console.log(intialvideoselect)
  let [selectvideoarray, setselectvideoarray] = useState=(GeneralVideoData)

  console.log(selectvideoarray)

  // ---------------------------------------------------------------------
  return (
    <>
    <NavBarComp />
    <VideoComp 
        data = {sidebardata[0]}/>
    <VideoTitleComp 
    title={selectvideoarray.title}
    />
    <VideoStatsComp 
      likes={selectvideoarray.likes}
      views={selectvideoarray.views}
      date={selectvideoarray.timestamp}
      channel={selectvideoarray.channel}
    />
    <VideoDescription 
    description = {selectvideoarray.description}/>
    <CommentComp 
      comments={selectvideoarray.comments}
    />
    <NextVideoSection 
    data = {sidebardata}
    // the passes the unfiltered (entire array of objects)
    />
    </>
  );
}

export default App;