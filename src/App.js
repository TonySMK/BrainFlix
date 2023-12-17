import "./App.scss";
import { Route, Routes, useParams } from "react-router-dom";
import MainPage from "./pages/mainpage/MainBody.jsx";
import UploadPage from "./pages/uploadpage/Upload.jsx";
import MainData from "./data/video-details.json";
import SideData from "./data/videos.json";
import MainIDPage from "./pages/MainIDpage/MainIDBody.jsx";
// components
import NavBarComp from "./components/navbar_section/NavBarComp.jsx";
import { useEffect, useState } from "react";

export default function App() {
  let data1 = MainData;

  const initalmainbodyinfo = data1[0];
  // console.log(initalmainbodyinfo);

  let sam = initalmainbodyinfo;
  const [some, setSome] = useState(initalmainbodyinfo);

  // useEffect(() => {
  //   setObjectPass(intialfounddata);
  // }, [pageid]);

  // console.log(objectpass);

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
                mainbodyinfo={some}
                Maindata={MainData}
                Sidedata={SideData}
              />
            }
          />
          {/* we need to set an "index" page, b/c without it there will nothing be rendered, otherword we need to setup something to render off the bat*/}
          <Route
            path="/:pageid"
            element={
              <MainPage
                key={"anny"}
                mainbodyinfo={some}
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
