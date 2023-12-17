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
  // at this point we have shifted from the "sidebar rendered array object state" centered application 
  // to the "pageid" centered application 
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
//--------------------------------------------------------------------------------------
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
//--------------------------------------------------------------------------------------

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
              updatecommentpayload={updatingCommentPayloadduetoFormInput}
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