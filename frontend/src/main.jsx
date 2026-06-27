import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";

import Documentary from "./pages/Documentary";
import CorporateVideos from "./pages/CorporateVideos";
import DroneVideography from "./pages/DroneVideography";
import EventVideography from "./pages/EventVideography";
import Photoshoots from "./pages/Photoshoots";
import SocialMediaVideos from "./pages/SocialMediaVideos";
import VideoPodcast from "./pages/VideoPodcast";

import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import About from "./components/About";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />


        <Route path="/documentary" element={<Documentary />} />
        <Route path="/corporate-videos" element={<CorporateVideos />} />
        <Route path="/video-podcast" element={<VideoPodcast />} />
        <Route path="/drone-videography" element={<DroneVideography />} />
        <Route path="/event-videography" element={<EventVideography />} />
        <Route path="/social-media-videos" element={<SocialMediaVideos />} />
        <Route path="/photoshoots" element={<Photoshoots />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);