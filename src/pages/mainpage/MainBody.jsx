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
  mainbodyinfo,
  sidedata,
  api_key,
  domain,
  video_subdirectory,
}) {
  const { pageid } = useParams();

  const [appstate, setAppState] = useState(true);
  // async axios data retrievel handling

  const [newbodydata, setNewBodyData] = useState(null);

  if (pageid !== undefined) {
    mainbodyinfo = newbodydata;
    // this section allows functionality on other page (ex. http://localhost:3000/####...)
    //page change handler
  }

  useEffect(() => {
    if (pageid === undefined) {
      setAppState(false);
    }
    return;
  }, []);

  useEffect(() => {
    if (pageid !== undefined) {
      axios
        .get(domain + video_subdirectory + `/${pageid}` + api_key)
        .then((res) => {
          setNewBodyData(res.data);
          setAppState(false);
        })
        .catch((e) => console.log("promise broken"));
    }
  }, [pageid]);

  //================================================================
  // this is where we are handling and sending the renderings of the NextVideoCard, instead of inside the NextVideoSection


  // by handling stuff in the upper levels, we are able to implement the suggestion of making the child componenets as simple or as "dumb" as possible...
  // in this case the NextVideoSection does not need to account for pageID..., 

  // instead the worry wil be handled by the parent component and then the final product will be handed down to the child
  // in essence, we are trying to avoid two things, first, passing the mainbodydata or sidedata as their whole down to the children, instead we are trying to pass only what is really needed
  // and second, we want the children to have as little responsiblity as possible, we are trying to move as much "under the hood stuff" as high as possible, instead of as low as possible... why...(i do not recognize the answer's essence atm)

  let filteredOutTitle;
  // console.log(sidedata)

  if (pageid !== undefined) {
    let something = sidedata.find((element) => element.id === pageid);
    filteredOutTitle = something.title;
  } else {
    filteredOutTitle = sidedata[0].title;
  }

  const renderedOutTabs = sidedata
    .filter((data2set) => data2set.title !== filteredOutTitle)
    .map((object) => (
      <Link
        key={object.id}
        to={`/${object.id}`}
        style={{ textDecoration: "none" }}
      >
        <NextVideoCard sidedata={object} onClickNxtShuffle={onClickNxtShuffle} />
      </Link>
    ));

    const [render, setRender] = useState(renderedOutTabs);
    // console.log(render)

    function onClickNxtShuffle(titleofclickeddiv) {
      const updatedrender = sidedata
        .filter((data2set) => data2set.title !== titleofclickeddiv)
        .map((object) => (
          <Link key={object.id} to={`/${object.id}`} style={{ textDecoration: "none" }}>
            <NextVideoCard
              sidedata={object}
              onClickNxtShuffle={onClickNxtShuffle}
            />
          </Link>
        ));
      setRender(updatedrender);
    }

  //================================================================

  return (
    <>
      {appstate ? (
        <section>PAGE Loading...</section>
      ) : (
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
                <VideoDescription descriptiondata={mainbodyinfo.description} />
                <CommentComp
                  selectedcommentsdata={mainbodyinfo.comments}
                  api_key={api_key}
                  domain={domain}
                  video_subdirectory={video_subdirectory}
                />
              </section>

              <NextVideoSection
              render={render}
              />
            </section>
          </section>
        </main>
      )}
    </>
  );
}
