import React from "react";
import leisureData from "./leisureData";
import Template from "../Template";
import LeisureCard from "./LeisureCard";

const Leisure = () => {
  return (
    <div>
      <div className="">
        {leisureData.map(function (elem, index) {
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
      <LeisureCard />
    </div>
  );
};

export default Leisure;
