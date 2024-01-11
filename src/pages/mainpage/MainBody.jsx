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
  // async axios data retrievel handling

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

  //================================================================
  // this is where we are handling and sending the renderings of the NextVideoCard, instead of inside the NextVideoSection


  // by handling stuff in the upper levels, we are able to implement the suggestion of making the child componenets as simple or as "dumb" as possible...
  // in this case the NextVideoSection does not need to account for pageID..., 

  // instead the worry wil be handled by the parent component and then the final product will be handed down to the child
  // in essence, we are trying to avoid two things, first, passing the mainbodydata or sidedata as their whole down to the children, instead we are trying to pass only what is really needed
  // and second, we want the children to have as little responsiblity as possible, we are trying to move as much "under the hood stuff" as high as possible, instead of as low as possible... why...(i do not recognize the answer's essence atm)

  // console.log(sidedata)

  if (pageId !== undefined) {
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
    // console.log(render)

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
