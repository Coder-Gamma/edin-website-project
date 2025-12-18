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
  const displayIndex = props.index < 10 ? `0${props.index}` : props.index;
  return (
    <div>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10  mx-4 border-t-2 border-gray-400 py-20 mb-10">
        {/* LEFT KO DIV */}
        <div className="">
          <div className="2xl:h-135 xl:h-120 ">
            <img
              src={props.projectImage}
              alt="Eden Project Image"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* ----------------Middle Div-------------- */}
        <div className="xl:flex xl:flex-col xl:gap-18 ">
          <h3 className=" text-3xl md:text-6xl  ">{props.projectName}</h3>
          <div className="lg:flex gap-14 items-center cursor-pointer hidden">
            <p className="text-xl xl:text-2xl hover:underline ">Read More</p>
            <ArrowRight size={48} strokeWidth={1} className=" font-thin " />
          </div>
        </div>

        {/* ---------------RIGHT SIDE KO DIV----------------- */}

        <div className="">
          <div className="flex justify-between">
            <div className="flex flex-col text-2xl gap-10">
              <p>{props.categoryName}</p>
              <p>{props.projectDuration}</p>
              <p>{props.projectArea}</p>
            </div>
            <div>
              <p className="text-3xl md:text-6xl">{displayIndex}</p>
            </div>
          </div>
          <div className="md:mt-14 xl:mt-40">
            <p className="text-xl xl:text-2xl">{props.paragraph}</p>
          </div>
        </div>
        <div className="flex gap-14 items-center cursor-pointer lg:hidden">
          <p className="text-xl xl:text-2xl hover:underline ">
            Read More talako
          </p>
          <ArrowRight size={48} strokeWidth={1} className=" font-thin " />
        </div>
      </div>
    </div>
  );
};

export default CaseStudyProjects;
