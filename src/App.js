import "./App.scss";
import { Route, Routes, useParams } from "react-router-dom";
import MainPage from "./pages/mainpage/MainBody.jsx";
import UploadPage from "./pages/uploadpage/Upload.jsx";
import MainData from "./data/video-details.json";
import SideData from "./data/videos.json";
import MainIDPage from "./pages/MainIDpage/MainIDBody.jsx";
// components
import NavBarComp from "./components/navbar_section/NavBarComp.jsx";
import { useState } from "react";

export default function App() {
  const { pageid } = useParams();

  const initalmainbodyinfo = MainData[0];

  return (
    <div className="appwrapper">
      <NavBarComp />
      <main>
        <Routes>
          <Route
            index
            element={
              <MainPage
                key={"manny"}
                mainbodyinfo={initalmainbodyinfo}
                Maindata={MainData}
                Sidedata={SideData}
              />
            }
          />
          {/* we need to set an "index" page, b/c without it there will nothing be rendered, otherword we need to setup something to render off the bat*/}
          <Route
            path="/:pageid"
            element={
              <MainIDPage
                key={"anny"}
                Maindata={MainData}
                Sidedata={SideData}
              />
            }
            // you might have to create an identical page (another different element), that is dicated to using the useeffet and params, in otherwords,
          />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
      </main>
    </div>
  );
}
