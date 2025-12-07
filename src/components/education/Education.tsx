import React from "react";
import educationData from "./educationData";
import Template from "../Template";
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <div>
      <div className="">
        {educationData.map(function (elem, index) {
          return (
            <div className="grid " key={index}>
              <Template
                backgroundImg={elem.backgroundImg}
                heading={elem.heading}
                leftText={elem.leftText}
                articleImg={elem.articleImg}
                articleHeading={elem.articleHeading}
                firstParagraph={elem.firstParagraph}
                secondParagraph={elem.secondParagraph}
                articleRelatedImage={elem.articleRelatedImage}
                cardHeading={elem.cardHeading}
              />
            </div>
          );
        })}
      </div>
      <EducationCard />
    </div>
  );
};

export default Education;
