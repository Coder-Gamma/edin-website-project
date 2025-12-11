import { ArrowRight } from "lucide-react";
import React from "react";

export interface CaseStudyProjectsProps {
  projectImage: string;
  projectName: string;
  categoryName: string;
  projectDuration: string;
  projectArea: string;
  index: number;
}

const CaseStudyProjects: React.FC<CaseStudyProjectsProps> = (props) => {
  const displayIndex = props.index < 10 ? `0${props.index}` : props.index;
  return (
    <div>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10  mx-4 border-t-2 border-gray-400 py-20 mb-10">
        {/* LEFT KO DIV */}
        <div className="order-1">
          <div className="2xl:h-135 xl:mix-w-md">
            <img
              src={props.projectImage}
              alt="Eden Project Image"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* ----------------Middle Div-------------- */}
        <div className="contents xl:flex xl:flex-col xl:gap-18 xl:order-2">
          <h3 className="text-6xl order-2 lg:order-3 xl:order-0">
            {props.projectName}
          </h3>
          <div className="flex gap-14 items-center cursor-pointer order-4 xl:order-none">
            <p className="text-2xl hover:underline">Read More</p>
            <ArrowRight size={48} strokeWidth={1} className=" font-thin " />
          </div>
        </div>

        {/* ---------------RIGHT SIDE KO DIV----------------- */}

        <div className="order-3 lg:order-2 xl:order-3">
          <div className="flex justify-between">
            <div className="flex flex-col text-2xl gap-10">
              <p>{props.categoryName}</p>
              <p>{props.projectDuration}</p>
              <p>{props.projectArea}</p>
            </div>
            <div>
              <p className="text-6xl">{displayIndex}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyProjects;
