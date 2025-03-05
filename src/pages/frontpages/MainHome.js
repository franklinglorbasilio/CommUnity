import React from "react";

// this is for MainHome

import Homepages from "../frontpages/homepage";
import PartnerBanner from "../frontpages/PartnerBanner";
import AboutCommunity from "../frontpages/AboutCommunity";
import CommunityPage from "../frontpages/Communitypage";
import CommunityProject from "../frontpages/CommunityProject";
import CommUnity from "../frontpages/CommUnity";
import ProjectList from "../frontpages/ProjectList";
import TestimonialPage from "../frontpages/Testimonial";


function MainHome() {
    return (
        <>
            <Homepages />
            <PartnerBanner />
            <CommUnity />
            <AboutCommunity />
            <CommunityPage />
            <CommunityProject />
            <ProjectList />
            <TestimonialPage />
        </>
    );
}

export default MainHome;
