import "./App.scss";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainpage/MainBody.jsx";
import UploadPage from "./pages/uploadpage/Upload.jsx";

import NavBarComp from "./components/navbar_section/NavBarComp.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  let url = "https://project-2-api.herokuapp.com/videos?api_key=b33";
  let domain = "https://project-2-api.herokuapp.com";
  let vidat = "/videos";
  let apk = "?api_key=b33";

  const [appstate, setAppState] = useState(true);
  const [appdata, setAppdata] = useState(null);
  const [sidedata, setSideData] = useState(null);

  useEffect(() => {
    axios
      .get(domain + vidat + apk)
      .then((res) => {
        let sidedata = res.data;
        setSideData(sidedata);
        let sidedata0 = sidedata[0].id;
        return sidedata0;
      })
      .then((sidedata0) => {
        axios.get(`${domain}${vidat}/${sidedata0}${apk}`).then((res) => {
          let intialappdata = res.data;
          setAppdata(intialappdata);
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
              <MainPage
                key={"manny"}
                mainbodyinfo={appdata}
                sidedata={sidedata}
                apk={apk}
                domain={domain}
                vidat={vidat}
              />
            }
          />
          <Route
            path="/:pageid"
            element={
              <MainPage
                key={"anny"}
                mainbodyinfo={appdata}
                sidedata={sidedata}
                apk={apk}
                domain={domain}
                vidat={vidat}
              />
            }
          />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
      )}
    </div>
  );
}
