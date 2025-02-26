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
  return (
   <>
    <Header/>
     <Homepages/>
       <PartnerBanner/>
       <CommUnity/>
        <AboutCommunity/>
       <CommunityPage/>
       <CommunityProject/>
       <TestimonialPage/>
  </>
  );
}

export default App;
