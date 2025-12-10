import React from "react";
import backgroundVideo from "../video/BgVideo.mp4";


export interface VideoHeroProps {
  videoSrc: string;
  posterSrc?: string;
  headingFirstLine: string;
  headingSecondLine: string;
  leftText: string;
}
//yo data jaha use garne ho tyo thauma rakhne 
// const videoHeroContent = {
//   videoSrc: backgroundVideo,
//   headingFirstLine: "",
//   headingSecondLine: "",
//   leftText: "",
// };

const VideoHero: React.FC<VideoHeroProps> = (props) => {
  return (
    <div className="bg-[rgb(233,233,228)] min-h-screen overflow-x-hidden">
      {/* WRAPPER */}
      <div className="relative">
        <section className=" relative mx-4 h-[85vh] md:h-[70vh] max-w-[1900px] overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={props.videoSrc}
            poster={props.posterSrc}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-white/10 z-10"></div>
        </section>
        <h1
          className="uppercase font-[52] text-gray-600 text-5xl px-4 py-4 mb-4
          md:text-8xl md:font-[75] md:absolute md:mt-25 md:top-30 md:text-white md:mx-4 z-20"
        >
          {props.headingFirstLine} <br className="hidden md:block" />
          {props.headingSecondLine}
        </h1>
      </div>

      <div
        className="flex flex-col px-4 justify-between bg-[rgb(233,233,228)]  gap-4  
        md:flex-row md:gap-0 md:py-10  "
      >
        <div className="max-w-xl pb-4">
          <p className="text-xl font-medium ">{props.leftText}</p>
        </div>

        <div className="flex items-start py-10 md:py-0 gap-4">
          <img
            src="https://edenbuild.co.uk/wp-content/uploads/2025/08/kings-trust-logo-1.svg"
            className="w-12 md:w-[72px] "
            alt="King's Trust Logo"
          />
          <p className="text-xl md:text-2xl ">
            Official partner of the
            <br className="hidden md:block" /> King's Trust.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoHero;
