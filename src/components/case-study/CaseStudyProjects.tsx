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
      <div className="grid grid-cols-3 mx-4 border-t-2 border-gray-400 py-20">
        {/* LEFT KO DIV */}
        <div>
          <div className="h-175">
            <img
              src={props.projectImage}
              alt="Eden Project Image"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* ----------------Middle Div-------------- */}
        <div>
          <h3 className="text-4xl">{props.projectName}</h3>
          <div className="flex gap-4 items-center cursor-pointer">
            <p className="text-2xl text-white hover:underline">Read More</p>
            <ArrowRight
              size={48}
              strokeWidth={1}
              className="text-white font-thin "
            />
          </div>
        </div>

        {/* ---------------RIGHT SIDE KO DIV----------------- */}

        <div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p>{props.categoryName}</p>
              <p>{props.projectDuration}</p>
              <p>{props.projectArea}</p>
            </div>
            <div>
              <p>{displayIndex}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyProjects;
