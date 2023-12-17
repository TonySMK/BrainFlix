import "./_MainBody.scss"
import { useState, useEffect} from "react";
import {dateCoverstion} from "../../utilityfunctions"
import { useParams } from "react-router-dom";

//Components
import VideoComp from "../../components/video_section/VideoComp";
import VideoTitleComp from "../../components/video_section/videoinfo_section/videotitle/VideoTitleComp";
import VideoStatsComp from "../../components/video_section/videoinfo_section/videostats/VideoStatsComp";
import VideoDescription from "../../components/video_section/videoinfo_section/videodescription_section/VideoDesComp";
import CommentComp from "../../components/video_section/videocomments_section/commentsection/CommentComp";
import NextVideoSection from "../../components/nextvideo_section/NextVideoSectionComp";
import CommentCard from "../../components/video_section/videocomments_section/commentcard/CommentCardComp"



export default function PageBody({mainbodyinfo, Maindata, Sidedata}) {
  const { pageid } = useParams();
  // console.log(pageid);
  // console.log(mainbodyinfo)


    const intialfounddata = Maindata.find((object) => object.id === pageid);

    // console.log(intialfounddata);
    if(pageid !==undefined){
      // i now realized that undefined is not a string but a primitive data type, for the longest time, 
      // i kept saying "if(pageid !=="undefined"), when it should be, if(pageid !==undefined) with no quotes
      // as once again undefined is a primative variable.... the console.log was not returning a string...
      // console.log("111111")
      mainbodyinfo = intialfounddata
      // this line right here is supercritical for allowing 1 element to consume different object 
      // after the first consumption,
      // as the second consumption only occurs when there is a the useParams is return NOT "undefined"
    } else if(pageid ===undefined){
      // console.log("222222")
    }



  const selectedcommentsdata = mainbodyinfo.comments;

  const [commentpayload, setCommentPayload] = useState(selectedcommentsdata);

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

  useEffect(()=>{
    console.log("mounting")
    const anothercommentrender = selectedcommentsdata.map((iteration) => (
      <CommentCard
        message={iteration.comment}
        name={iteration.name}
        time={dateCoverstion(iteration.timestamp)}
        likes={iteration.likes}
        key={iteration.id}
      />
    ));
  setCommentRender(anothercommentrender)
},[pageid])


  return(
    <main>placeholder
            <VideoComp
          videodata={mainbodyinfo.video}
          imagedata={mainbodyinfo.image}
          />
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
            <VideoDescription
              descriptiondata={mainbodyinfo.description}
            />
            <CommentComp
              mappedelements={commentrender}
              commentdata={commentpayload}
              // updatecommentpayload={updatingCommentPayloadduetoFormInput}
            />
          </section>

          <NextVideoSection
            data1={Maindata}
            data2={Sidedata}
          />
        </section>
      </section>
    </main>
  );
}