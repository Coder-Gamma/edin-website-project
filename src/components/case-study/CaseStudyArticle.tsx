import React from "react";
import { Plus } from "lucide-react";
import { ArrowDown } from "lucide-react";

const CaseStudyArticle = () => {
  return (
    <div>
      <div className="flex justify-between mx-4 my-40">
        <div>
          <p className="text-4xl max-w-4xl tracking-normal leading-relaxed text-gray-700">
            Take a look at some of our case studies to understand more about the
            types of projects we can take on, and more information about
            previous work we've completed.
          </p>
        </div>
        <div className="flex flex-col-reverse">
          <Plus size={36} className="" />
        </div>
      </div>
      <div className="w-xl my-36 mx-4">
        <div className="flex justify-between">
          <span className="border-b-2 border-gray-700 text-2xl">
            Filter case studies
          </span>
          <ArrowDown size={44} />
        </div>
        <div className="border-t-2 border-gray-400 mt-2" />
      </div>
    </div>
  );
};

export default CaseStudyArticle;
