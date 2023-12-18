import "./_MainBody.scss";
import { useState, useEffect } from "react";
import { dateCoverstion } from "../../utilityfunctions";
import { useParams } from "react-router-dom";
import axios from "axios";

//Components
import VideoComp from "../../components/video_section/VideoComp";
import VideoTitleComp from "../../components/video_section/videoinfo_section/videotitle/VideoTitleComp";
import VideoStatsComp from "../../components/video_section/videoinfo_section/videostats/VideoStatsComp";
import VideoDescription from "../../components/video_section/videoinfo_section/videodescription_section/VideoDesComp";
import CommentComp from "../../components/video_section/videocomments_section/commentsection/CommentComp";
import NextVideoSection from "../../components/nextvideo_section/NextVideoSectionComp";
import CommentCard from "../../components/video_section/videocomments_section/commentcard/CommentCardComp";

export default function PageBody({
  mainbodyinfo,
  sidedata,
  apk,
  domain,
  vidat,
}) {
  const { pageid } = useParams();
  const [compstate, setCompState] = useState(true);
  const [newdata, setNewData] = useState(null);

  if (pageid !== undefined) {
    // console.log("111111");
    mainbodyinfo = newdata;
  }

  useEffect(() => {
    if (pageid === undefined) {
      // console.log("222222");
      setCompState(false);
      // idk why but this putting this "setCompState(false)" or "setCompState(true)" in the outer-level causes loop!!! wtf??"
    }
  }, []);

  useEffect(() => {
    if (pageid !== undefined) {
      axios
      .get(domain + vidat + `/${pageid}` + apk)
      .then((res) => {
        // console.log(res.data)

        setNewData(res.data);
        setCompState(false);
      })
      .catch(console.log("promise broken"));
    }
  }, [pageid]);

  // ---the issue is that there is code in this function that is running,
  // while their references have have not loaded in yet
  // basicallly, we solved it by moving all those function 1-level down, so that it does not get falsely tripped over by the axios call,
  // in otherwords, anywhere where there is an axios call, we basically can not have outside functions that ancestrally have references that come from the axios call;

  //--------------------------------------------------------------------------------------

  return (
    <>
      {compstate ? (
        <section>PAGE Loading...</section>
      ) : (
        <main>
          placeholer
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
                <VideoDescription descriptiondata={mainbodyinfo.description} />
                <CommentComp
                  selectedcommentsdata={mainbodyinfo.comments}
                  apk={apk}
                  domain={domain}
                  vidat={vidat}
                />
              </section>

              <NextVideoSection data2={sidedata} />
            </section>
          </section>
        </main>
      )}
    </>
  );
}
