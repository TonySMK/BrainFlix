import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ThePageBody from "./components/PageBody.jsx";

// components
import NavBarComp from "./components/navbar_section/NavBarComp.jsx";

export default function App() {
  return (
    <div className="appwrapper">
      <BrowserRouter>
        <NavBarComp />
        <main>
          <Routes>
            <Route path="/" element={<ThePageBody />} />
            {/* we need to set an "index" page, b/c without it there will nothing be rendered, otherword we need to setup something to render off the bat*/}
            <Route path="/:pageid" element={<ThePageBody />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
