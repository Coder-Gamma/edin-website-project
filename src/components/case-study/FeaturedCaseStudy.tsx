import React from "react";
import featuredImage from "./images/new-castle/Newcastle31a.jpg";

const FeaturedCaseStudy = () => {
  return (
    <div>
      <div className="flex bg-black text-white px-4 py-18 gap-20">
        {/* LEFT SIDE KO  */}
        <div>
          <span className="text-2xl inline-block mb-20">
            Featured Case Study
          </span>
          <h1 className=" text-4xl md:text-9xl uppercase font-light">
            lighthouse project, newcastle
          </h1>
        </div>

        {/* RIGHT SIDE KO  */}
        <div className="text-2xl min-w-64 flex flex-col gap-8">
          <p className="text-6xl mb-8 ml-2 ">01</p>
          <p className="border-b border-gray-200">Community Centre</p>
          <p className="border-b border-gray-200">Grade II listed</p>

          <p className="border-b border-gray-200">3,900 sq ft</p>
        </div>
      </div>

      <div>
        <img
          src={featuredImage}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default FeaturedCaseStudy;
