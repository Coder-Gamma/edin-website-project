import React from "react";
import backgroundVideo from "../../video/BgVideo.mp4";
import VideoHero from "../VideoHero";
import CaseStudyArticle from "./CaseStudyArticle";
import FeaturedCaseStudy from "./FeaturedCaseStudy";
import projectsData from "./projectData";
import CaseStudyProjects from "./CaseStudyProjects";

const videoHeroContent = {
  videoSrc: backgroundVideo,
  headingFirstLine: "Case",
  headingSecondLine: "Studies",
  leftText:
    "We deliver tailored refurbishment and fit out solutions across schools, offices, gyms, residential properties, and warehouses, combining expertise with design-led thinking. Take a look at our case studies to see the range of projects we deliver.",
};

const CaseStudy = () => {
  return (
    <div>
      <VideoHero {...videoHeroContent} />
      <CaseStudyArticle />
      <FeaturedCaseStudy />

      {/* Projects case study component mapping */}

      <div className="">
       
       {
        projectsData.map((project,idx) =>
        (
          <CaseStudyProjects 
          key={idx}
          index={idx+1}
          {...project}

          />
        )
      )
       }

      </div>
    </div>
  );
};

export default CaseStudy;
