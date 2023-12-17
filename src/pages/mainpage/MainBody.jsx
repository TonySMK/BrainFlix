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



export default function PageBody({mainbodyinfo, Maindata, Sidedata, upatemainbody, somedata}) {

  const selectedcommentsdata = mainbodyinfo.comments;
  // console.log(selectedcommentsdata);

  const [commentpayload, setCommentPayload] = useState(selectedcommentsdata);
  // console.log(commentpayload);


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
  //we do need this when it comes to using the updatin the comment payload

  return(
    <main>
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