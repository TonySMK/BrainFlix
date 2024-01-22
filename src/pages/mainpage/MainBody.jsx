// aux import
import "./_MainBody.scss";
import { useState, useEffect } from "react";
import { dateCoverstion } from "../../utilityfunctions";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

//component imports
import VideoComp from "../../components/video_section/VideoComp";
import VideoTitleComp from "../../components/video_section/videoinfo_section/videotitle/VideoTitleComp";
import VideoStatsComp from "../../components/video_section/videoinfo_section/videostats/VideoStatsComp";
import VideoDescription from "../../components/video_section/videoinfo_section/videodescription_section/VideoDesComp";
import CommentComp from "../../components/video_section/videocomments_section/commentsection/CommentComp";
import NextVideoSection from "../../components/nextvideo_section/NextVideoSectionComp";
import NextVideoCard from "../../components/nextvideo_section/nextvideocard_section/NextVideoCardComp"

export default function PageBody({
  mainBodyInfo,
  sideInfoData,
  apiKey,
  domain,
  videoSubdirectory,
}) {
  const { pageId } = useParams();
  const [compState, setCompState] = useState(true);

  const [newMainBodydata, setNewMainBodyData] = useState(null);

  let filteredOutTitle;

  if (pageId !== undefined) {
    mainBodyInfo = newMainBodydata;
    // this section allows functionality on other page (ex. http://localhost:3000/####...)
    //page change handler
  }

  useEffect(() => {
    if (pageId !== undefined) {
      axios
        .get(domain + videoSubdirectory + `/${pageId}` + apiKey)
        .then((res) => {
          setNewMainBodyData(res.data);
          setCompState(false);
        })
        .catch((e) => console.log("promise broken"));
    }else{
      setCompState(false);
    }
  }, [pageId, apiKey, domain, videoSubdirectory]);

  if (pageId !== undefined) {
    // this section starts the handling of what get rendered in the side bar
    console.log(sideInfoData)
    let getTitleObject = sideInfoData.find((element) => element.id === pageId);
    filteredOutTitle = getTitleObject.title;
  } else {
    filteredOutTitle = sideInfoData[0].title;
  }

  const renderedOutTabs = sideInfoData
    .filter((data2set) => data2set.title !== filteredOutTitle)
    .map((object) => (
      <Link
        key={object.id}
        to={`/videos/${object.id}`}
        style={{ textDecoration: "none" }}
      >
        <NextVideoCard sidedata={object} onClickNxtShuffle={onClickNxtShuffle} />
      </Link>
    ));
    const [sideDataRender, setSideDataRender] = useState(renderedOutTabs);

    function onClickNxtShuffle(titleofclickeddiv) {
      const updatedrender = sideInfoData
        .filter((data2set) => data2set.title !== titleofclickeddiv)
        .map((object) => (
          <Link key={object.id} to={`/videos/${object.id}`} style={{ textDecoration: "none" }}>
            <NextVideoCard
              sidedata={object}
              onClickNxtShuffle={onClickNxtShuffle}
            />
          </Link>
        ));
        setSideDataRender(updatedrender);
    }

  //================================================================

  return (
    <>
      {compState ? (
        <section>PAGE Loading...</section>
      ) : (
        <main>
          <VideoComp
            videodata={mainBodyInfo.video}
            imagedata={mainBodyInfo.image}
          />
          <section className="dtwarpperbackground">
            <section className="dtwrapper0">
              <section className="dtwrapper1">
                <VideoTitleComp titledata={mainBodyInfo.title} />
                <VideoStatsComp
                  channeldata={mainBodyInfo.channel}
                  timestampdata={dateCoverstion(mainBodyInfo.timestamp)}
                  likesdata={mainBodyInfo.likes}
                  viewsdata={mainBodyInfo.views}
                />
                <VideoDescription descriptiondata={mainBodyInfo.description} />
                <CommentComp
                  selectedCommentsData={mainBodyInfo.comments}
                  apiKey={apiKey}
                  domain={domain}
                  videoSubdirectory={videoSubdirectory}
                />
              </section>

              <NextVideoSection
              sideDataRender={sideDataRender}
              />
            </section>
          </section>
        </main>
      )}
    </>
  );
}
