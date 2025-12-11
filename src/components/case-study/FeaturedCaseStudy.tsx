import React from "react";
import featuredImage from "./images/new-castle/Newcastle31a.jpg";
import { ArrowRight } from "lucide-react";

const FeaturedCaseStudy = () => {
  return (
    <div>
      <div className="flex flex-col  bg-black text-white px-4">
        <div className="flex justify-between my-16 w-full">
          <p className="text-2xl inline-block">Featured Case Study</p>
          <p className="text-4xl xl:text-6xl xl:pr-40">01</p>
        </div>
        <div className="grid md:grid-cols-[6fr_1fr] gap-40 pb-20 ">
          <div className="order-1">
            <h1 className=" text-5xl md:text-5xl xl:text-7xl 2xl:text-9xl uppercase font-light">
              lighthouse project, newcastle
            </h1>
          </div>
          <div className=" text-2xl min-w-64 flex flex-col gap-8 order-2 ">
            <p className="border-b border-gray-200 py-1">Community Centre</p>
            <p className="border-b border-gray-200">Grade II listed</p>
            <p className="border-b border-gray-200">3,900 sq ft</p>
          </div>
        </div>
      </div>

      <div className="h-screen w-full relative">
        <img
          src={featuredImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 flex gap-4 items-center pt-14 pl-6 cursor-pointer">
          <p className="text-2xl text-white hover:underline">Read More</p>
          <ArrowRight size={48} strokeWidth={1} className="text-white font-thin " />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCaseStudy;
