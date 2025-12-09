import React from "react";
import { Share } from "lucide-react";
import bgImage from "./images/new-castle/Newcastle31a-1920x726.jpg";
import caseStudy1 from "./images/new-castle/case-study-1-1024x682.png";
import VideoPlayer from "../VideoPlayer";
import Construction1 from "./images/new-castle/construction-work-1024x684.png";
import Construction2 from "./images/new-castle/construction-work-2-1024x684.png";
import Newcastle from "./images/new-castle/Newcastle29-scaled.png";

const Lighthouse = () => {
  return (
    <div>
      <div className="bg-[rgb(233,233,228)] min-h-screen overflow-x-hidden ">
        {/* This div is going to be a wrapper to hindle positioning for desktop */}
        <div className="relative">
          <section
            className="relative mx-4 h-[85vh] md:h-[70vh] bg-cover bg-center bg-no-repeat max-w-[1900px]"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <div className="absolute inset-0 bg-white/10 rounded-2xl"></div>
          </section>
          <h1
            className=" uppercase  font-[52] text-gray-600   text-5xl  px-4 py-4 mb-4
         md:text-8xl md:font-[75] md:absolute  md:mt-25   md:top-30  md:text-white md:mx-4 md:border-t-2 border-gray-200"
          >
            Lighthouse project,
            <br className="hidden md:block" /> Newcastle
          </h1>
          <span className="uppercase text-white text-6xl absolute hidden md:block top-40 right-20 md:border-b-2 border-gray-200">
            ne6 2ft
          </span>
        </div>
        <div
          className="flex flex-col px-4 justify-between bg-[rgb(233,233,228)]  gap-4  
        md:flex-row md:gap-0 md:py-4  "
        >
          <div className="max-w-xl pb-4">
            <p className="text-xl font-medium ">
              The Lighthouse Project transformed a disused Grade II Listed St
              Michael's Church in Byker, Newcastle, into a vibrant youth and
              community hub. Completed in July 2025 over 16 months, the project
              blended sensitive restoration with a modern annex, delivering
              music studios, art spaces, and community-focused facilities while
              prioritising local engagement and heritage preservation.
            </p>
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

      {/* ------------------------SECTION END----------------------- */}

      <div>
        <div className="W-FULL flex gap-4 mx-4 items-center my-18">
          <Share className="text-lime-500" size={36} />{" "}
          <span className="text-xl">Share this Case Study</span>
        </div>
        <div className="grid grid-cols-[7fr_3fr] gap-x-30 mx-4">
          <div>
            <img src={caseStudy1} className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col gap-14 ">
            <div className="">
              <p className="text-xl ">Project Duration</p>
              <p className="text-6xl">16 Months</p>
              <div className="border-t-2 border-gray-400 w-90"></div>
            </div>

            <div>
              <p className="text-xl">Completion:</p>
              <p className="text-6xl">July 2025</p>
              <div className="border-t-2 border-gray-400 w-90"></div>
            </div>

            <div>
              <p className="text-xl">Client</p>
              <p className="text-6xl">The Lighthouse Project</p>
              <div className="border-t-2 border-gray-400 w-90"></div>
            </div>
          </div>
          <p className="text-xl py-4">
            Internal adaptations that respect the building's heritage listing
          </p>
        </div>
      </div>

      {/* --------------------NEW SECTION START------------------ */}
      <section className="my-20">
        <div className="grid grid-cols-[3fr_7fr] gap-x-30 text-justify mx-4">
          <div>
            <h3 className="text-6xl">The Challange</h3>
            <p className="text-xl py-6">
              The Lighthouse Project set out to create a vibrant youth and
              community hub in Byker, on the east side of Newcastle. The vision
              was to breathe new life into the disused Grade II Listed St
              Michael's Church, transforming it into a safe, inspiring and
              inclusive space that could bring the community together.
            </p>
            <p className="text-xl ">
              The project brief included both the sensitive restoration of the
              original building and the construction of a modern annex. The
              facility needed to accommodate music studios, art spaces,
              chill-out areas, homework zones, and family-friendly communal
              kitchens all while retaining the heritage and integrity of the
              church building.
            </p>
            <p className="text-xl py-6">
              In addition, the client wanted to ensure the wider community
              benefited throughout, with a strong emphasis on working with local
              contractors and suppliers.
            </p>
          </div>

          {/* VIDEO CONTAINER */}
          <div>
            <div className="mr-4">
              <VideoPlayer />
            </div>
            <p className="text-xl p-4">
              View Ben Roman, Chief Executive of the Lighthouse Project, and
              Keith McClure of Bradley McClure Architects sharing insights on
              the Lighthouse Project and their collaboration with Eden.
            </p>
          </div>
        </div>
      </section>

      {/* -----------------------IMAGES SECTION--------------- */}
      <section className="">
        <div className="grid grid-cols-2 gap-10 mx-4 mb-18">
          <div className="flex flex-col gap-4 items-center">
            <img src={Construction1} alt="" />
            <p className="text-xl p-4">Preserving heritage with care</p>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <img src={Construction2} alt="" />
            <p className="text-xl p-4">Specialist craftsmanship</p>
          </div>
        </div>
        <div>
          <img src={Newcastle} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Lighthouse;
