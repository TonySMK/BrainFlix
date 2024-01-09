// aux import
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

//component imports
import MainBody from "./pages/mainpage/MainBody.jsx";
import UploadPage from "./pages/uploadpage/Upload.jsx";
import NavBarComp from "./components/navbar_section/NavBarComp.jsx";

export default function App() {
  let domain = "https://project-2-api.herokuapp.com";
  let video_subdirectory = "/videos";
  let api_key = "?api_key=17gt8c0a-83dc-4b96-856a-5dqwe2772b1";

  const [appstate, setAppState] = useState(true);
  const [mainbodyinfo, setMainBodyInfo] = useState(null);
  const [sidedata, setSideData] = useState(null);

  useEffect(() => {
    axios
      .get(domain + video_subdirectory + api_key)
      .then((res) => {
        let sidedata = res.data;
        setSideData(sidedata);
        let sidedata0 = sidedata[0].id;
        return sidedata0;
      })
      .then((sidedata0) => {
        axios
          .get(`${domain}${video_subdirectory}/${sidedata0}${api_key}`)
          .then((res) => {
            let intialappdata = res.data;
            setMainBodyInfo(intialappdata);
            setAppState(false);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="appwrapper">
      <NavBarComp />
      {appstate ? (
        <section>Loading Data...</section>
      ) : (
        <Routes>
          <Route
            index
            element={
              <MainBody
                key={"manny"}
                mainbodyinfo={mainbodyinfo}
                sidedata={sidedata}
                api_key={api_key}
                domain={domain}
                video_subdirectory={video_subdirectory}
              />
            }
          />
          <Route
            path="/videos/:pageid"
            element={
              <MainBody
                key={"anny"}
                mainbodyinfo={mainbodyinfo}
                sidedata={sidedata}
                api_key={api_key}
                domain={domain}
                video_subdirectory={video_subdirectory}
              />
            }
          />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
      )}
    </div>
  );
}
