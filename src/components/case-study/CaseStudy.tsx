import React from "react";
import backgroundVideo from "../../video/BgVideo.mp4";
import VideoHero from "../VideoHero";

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
    </div>
  );
};

export default CaseStudy;
