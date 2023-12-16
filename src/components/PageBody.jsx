import "./_PageBody.scss"
import { useState } from "react";
import BodyData from "../data/video-details.json";
import SDData from "../data/videos.json";
import {dateCoverstion} from "../utilityfunctions"

//Components
import VideoComp from "./video_section/VideoComp";
import VideoTitleComp from "./video_section/videoinfo_section/videotitle/VideoTitleComp";
import VideoStatsComp from "./video_section/videoinfo_section/videostats/VideoStatsComp";
import VideoDescription from "./video_section/videoinfo_section/videodescription_section/VideoDesComp";
import CommentComp from "./video_section/videocomments_section/commentsection/CommentComp";
import NextVideoSection from "./nextvideo_section/NextVideoSectionComp";
import CommentCard from "./video_section/videocomments_section/commentcard/CommentCardComp"



export default function PageBody() {

  const bodydata = BodyData;
  const sidedata = SDData;

  const initalmainbodyinfo = bodydata.filter(
    (bodydataset) => bodydataset.title === bodydata[0].title
  );
  console.log(initalmainbodyinfo);

  const [mainbodyinfo, setMainBodyInfo] = useState(initalmainbodyinfo[0]);

  function updatemainbodyinfo(inboundobjecttitle) {
    // this function connects the two JSON files together
    const updatedmainbodyinfo = bodydata.filter(
      (bodydataset) => bodydataset.title === inboundobjecttitle
    );
    setMainBodyInfo(updatedmainbodyinfo[0]);
  }

  const selectedcommentsdata = mainbodyinfo.comments;
  console.log(selectedcommentsdata);

  const [commentpayload, setCommentPayload] = useState(selectedcommentsdata);
  console.log(commentpayload);

  function updatingCommentPayloadduetoFormInput(takeinanobject) {
    let newcommentpayload = [takeinanobject, ...commentpayload];
    console.log(newcommentpayload);
    setCommentPayload(newcommentpayload);

    const updatecomments = newcommentpayload.map((iteration) => (
      <CommentCard
        message={iteration.comment}
        name={iteration.name}
        time={dateCoverstion(iteration.timestamp)}
        likes={iteration.likes}
        key={iteration.id}
      />
    ));
    setCommentRender(updatecomments);
  }

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
              updatecommentpayload={
                updatingCommentPayloadduetoFormInput
              }
            />
          </section>
          <NextVideoSection
            onClickInfoHandler={updatemainbodyinfo}
            onClickForCommentHandler={updatedcommentrender}
            data1={bodydata}
            data2={sidedata}
          />
        </section>
      </section>
    </main>
  );
}