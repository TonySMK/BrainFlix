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
  return (
    <Routes>
      <Route index element={<MainBody />} />
      <Route path="/videos/:pageId" element={<MainBody />} />
      <Route path="/upload" element={<UploadPage />} />
    </Routes>
  );
}
