import { ArrowRight } from "lucide-react";
import React from "react";

export interface CaseStudyProjectsProps {
  projectImage: string;
  projectName: string;
  categoryName: string;
  projectDuration: string;
  projectArea: string;
  index: number;
  paragraph: string;
}

const CaseStudyProjects: React.FC<CaseStudyProjectsProps> = (props) => {
  const displayIndex = props.index + 1 < 10 ? `0${props.index + 1}` : props.index + 1;
  return (
    <div>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8  mx-4 border-t-2 border-gray-400 py-4 md:py-20 mb-10">
        <div className=" md:hidden text-end">
          <p className="text-3xl md:text-6xl">{displayIndex}</p>
        </div>
        {/* LEFT KO DIV */}
        <div className="order-1">
          <div className="2xl:h-135 xl:h-120 ">
            <img
              src={props.projectImage}
              alt="Eden Project Image"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* ----------------Middle Div-------------- */}
        <div className="xl:flex xl:flex-col xl:gap-18 order-2 lg:order-3 xl:order-2">
          <h3 className=" text-3xl md:text-5xl uppercase ">
            {props.projectName}
          </h3>
          <div className="lg:flex gap-14 items-center cursor-pointer hidden">
            <p className="text-xl xl:text-2xl hover:underline ">Read More</p>
            <ArrowRight size={48} strokeWidth={1} className=" font-thin " />
          </div>
        </div>

        {/* ---------------RIGHT SIDE KO DIV----------------- */}

        <div className="order-3 lg:order-2 xl:order-3 w-full">
          <div className="flex justify-between ">
            <div className="flex flex-col text-2xl gap-10 w-full ">
              <div className="w-full">
                <p className="py-2">{props.categoryName}</p>
                <div className="block md:hidden border-t-2 border-gray-400 " />
              </div>
              <div>
                <p>{props.projectDuration}</p>
                <div className="block md:hidden border-t-2 border-gray-400 " />
              </div>
              <div>
                <p>{props.projectArea}</p>
                <div className="block md:hidden border-t-2 border-gray-400 " />
              </div>
            </div>
            <div className="hidden md:block">
              <p className="text-3xl md:text-6xl">{displayIndex}</p>
            </div>
          </div>
          <div className="mt-8 md:mt-14 xl:mt-20">
            <p className="text-xl">{props.paragraph}</p>
          </div>
        </div>
        <div className="flex gap-14 items-center cursor-pointer order-4 lg:hidden">
          <p className="text-xl xl:text-2xl hover:underline">Read More</p>
          <ArrowRight size={48} strokeWidth={1} className=" font-thin " />
        </div>
      </div>
    </div>
  );
};

export default CaseStudyProjects;
