import "./_MainIDBody.scss"
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



export default function PageBody({Maindata, Sidedata}) {

  const {pageid}= useParams()
  console.log(pageid + "0000000000") 


  let intialfounddata = Maindata.find((object) => object.id === pageid);
  console.log(intialfounddata)


  return(
    <main> placeholder
            <VideoComp
          videodata={intialfounddata.video}
          imagedata={intialfounddata.image}
          />
      <section className="dtwarpperbackground">
        <section className="dtwrapper0">
          <section className="dtwrapper1">

            <VideoTitleComp titledata={intialfounddata.title} />
            <VideoStatsComp
              channeldata={intialfounddata.channel}
              timestampdata={dateCoverstion(intialfounddata.timestamp)}
              likesdata={intialfounddata.likes}
              viewsdata={intialfounddata.views}
            />
            <VideoDescription
              descriptiondata={intialfounddata.description}
            />
            <CommentComp
              commentdata = {intialfounddata.comments}
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

/*
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
            />
          </section>
          

          <NextVideoSection
            // onClickInfoHandler={updatemainbodyinfo}
            data1={bodydata}
            data2={sidedata}
          />
        </section>
      </section>
      
*/