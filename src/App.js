import './App.scss';
import VideoData from "./data/video-details.json"
import NavBarComp from './components/navbar_section/NavBarComp.jsx';
import VideoComp from "./components/video_section/VideoComp.jsx";
import VideoTitleComp from "./components/video_section/videoinfo_section/videotitle/VideoTitleComp.jsx"
import VideoStatsComp from "./components/video_section/videoinfo_section/videostats/VideoStatsComp.jsx"
import VideoDescription from "./components/video_section/videoinfo_section/videodescription_section/VideoDesComp.jsx"
import CommentComp from "./components/video_section/videocomments_section/commentsection/CommentComp.jsx"
import NextVideoSection from './components/nextvideo_section/NextVideoSectionComp.jsx';

function App() {
  return (
    <>
    <NavBarComp />
    <VideoComp />
    <VideoTitleComp 
    title={VideoData[0].title}
    />
    <VideoStatsComp 
      likes={VideoData[0].likes}
      views={VideoData[0].views}
      date={VideoData[0].timestamp}
      channel={VideoData[0].channel}
    />
    <VideoDescription 
    description = {VideoData[0].description}/>
    <CommentComp />
    <NextVideoSection />
    </>
  );
}

export default App;