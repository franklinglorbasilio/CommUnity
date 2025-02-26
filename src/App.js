import React, { useEffect } from "react";
import Header from "./components/header";
import Homepages from "./pages/frontpages/homepage";
import PartnerBanner from "./pages/frontpages/PartnerBanner";
import AboutCommunity from "./pages/frontpages/AboutCommunity";
import CommunityPage from "./pages/frontpages/Communitypage";
import CommunityProject from "./pages/frontpages/CommunityProject";
import "bootstrap/dist/css/bootstrap.min.css";
import CommUnity from "./pages/frontpages/CommUnity";
import TestimonialPage from "./pages/frontpages/Testimonial";

function App() {
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    const handleKeyDown = (e) => {
      if (
          (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) ||
          (e.ctrlKey && e.key === "U") ||
          e.key === "F12"
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
      <>
        <Header />
        <Homepages />
        <PartnerBanner />
        <CommUnity />
        <AboutCommunity />
        <CommunityPage />
        <CommunityProject />
        <TestimonialPage />
      </>
  );
}

export default App;
