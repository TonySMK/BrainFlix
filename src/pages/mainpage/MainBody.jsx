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

export default function PageBody() {
  let domain = "http://localhost:8080";
  let videoSubdirectory = "/videos";
  let apiKey = "?api_key=17gt8c0a-83dc-4b96-856a-5dqwe2772b1";

  const { pageId } = useParams();
  const [compState, setCompState] = useState(true);
  const [MainBodydata, setNewMainBodyData] = useState(null);

  const [sideInfoData, setSideInfoData] = useState(null)
  const [filter, setfilter] = useState(3333333333333333333333333)

  let filteredOutTitle;

  useEffect(() => {
    // this section handles the mainbody info
    if (pageId !== undefined) {
      axios
        .get(domain + videoSubdirectory + `/${pageId}` + apiKey)
        .then((res) => {
          setNewMainBodyData(res.data);
          setCompState(false);
        })
        .catch((e) => console.log("promise broken"));

      
    }else{
        axios
          .get(`${domain}${videoSubdirectory}/VROOLYJIBOSGYRSXTAAFDINPYFDLJQ${apiKey}`)
          .then((res) => {
            let intialAppData = res.data;
            setNewMainBodyData(res.data);
            setCompState(false);
          })
      .catch((error) => {
        console.log(error);
      });;
    }
  },[pageId, apiKey, domain, videoSubdirectory]);


  useEffect(() => {
    // this seciton handles the side bar info
    if(pageId === undefined){
      axios
      .get(`${domain}${videoSubdirectory}${apiKey}`)
      .then((res) =>{
        let sidedata = res.data
        setSideInfoData(sidedata)
      })
    }
  });

    // const [sideDataRender, setSideDataRender] = useState(renderedOutTabs);

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

    function sidebarrendering(somearray, filterid){
      const renderedOutTabs = somearray
      .filter((element) => element.title !== filterid)
      .map((object) => (
        <Link
          key={object.id}
          to={`/videos/${object.id}`}
          style={{ textDecoration: "none" }}
        >
          <NextVideoCard sidedata={object} onClickNxtShuffle={onClickNxtShuffle} />
        </Link>
      ));
      return renderedOutTabs
      }

  //================================================================

  return (
    <>
      {compState ? (
        <section>PAGE Loading...</section>
      ) : (
        <main>
          <VideoComp
            videodata={MainBodydata.video}
            imagedata={MainBodydata.image}
          />
          <section className="dtwarpperbackground">
            <section className="dtwrapper0">
              <section className="dtwrapper1">
                <VideoTitleComp titledata={MainBodydata.title} />
                <VideoStatsComp
                  channeldata={MainBodydata.channel}
                  timestampdata={dateCoverstion(MainBodydata.timestamp)}
                  likesdata={MainBodydata.likes}
                  viewsdata={MainBodydata.views}
                />
                <VideoDescription descriptiondata={MainBodydata.description} />
                <CommentComp
                  selectedCommentsData={MainBodydata.comments}
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
