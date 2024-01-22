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
  let domain = "http://localhost:8080";
  let videoSubdirectory = "/videos";
  let apiKey = "?api_key=17gt8c0a-83dc-4b96-856a-5dqwe2772b1";

  const [compState, setCompState] = useState(true);
  const [mainBodyInfo, setMainBodyInfo] = useState(null);
  const [sideInfoData, setSideInfoData] = useState(null);

  useEffect(() => {
    axios
      .get(domain + videoSubdirectory + apiKey)
      .then((res) => {
        let sideData = res.data[0];
        setSideInfoData(sideData);
        let sideDataInitial = sideData[0].id;
        return sideDataInitial;
      })
      .then((sideDataInitial) => {
        axios
          .get(`${domain}${videoSubdirectory}/${sideDataInitial}${apiKey}`)
          .then((res) => {
            let intialAppData = res.data;
            setMainBodyInfo(intialAppData);
            setCompState(false);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [domain, videoSubdirectory, apiKey]);

  return (
    <div className="appwrapper">
      <NavBarComp />
      {compState ? (
        <section>Loading Data...</section>
      ) : (
        <Routes>
          <Route
            index
            element={
              <MainBody
                key={"manny"}
                mainBodyInfo={mainBodyInfo}
                sideInfoData={sideInfoData}
                apiKey={apiKey}
                domain={domain}
                videoSubdirectory={videoSubdirectory}
              />
            }
          />
          <Route
            path="/videos/:pageId"
            element={
              <MainBody
                key={"anny"}
                mainBodyInfo={mainBodyInfo}
                sideInfoData={sideInfoData}
                apiKey={apiKey}
                domain={domain}
                videoSubdirectory={videoSubdirectory}
              />
            }
          />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
      )}
    </div>
  );
}
