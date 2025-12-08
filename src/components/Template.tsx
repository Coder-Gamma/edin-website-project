import React from "react";
import WhyEden from "./WhyEden";
interface template {
  backgroundImg: string;
  headingFirstLine: string;
  headingSecondLine:string;
  leftText: string;
  articleImg: string;
  articleHeading: string;
  firstParagraph: string;
  secondParagraph: string;
  articleRelatedImage: string;
  cardHeading: string;
}
const Template = (props: template) => {
  return (
    <div>
      {/* THIS IS THE LANDING AREA WITH BG IMAGE */}
      <div className="bg-[rgb(233,233,228)] min-h-screen overflow-x-hidden ">
        {/* This div is going to be a wrapper to hindle positioning for desktop */}
        <div className="relative">
          <section
            className="relative mx-4 h-[85vh] md:h-[70vh] bg-cover bg-center bg-no-repeat max-w-[1900px]"
            style={{ backgroundImage: `url(${props.backgroundImg})` }}
          >
            <div className="absolute inset-0 bg-white/10 rounded-2xl"></div>
          </section>
          <h1
            className=" uppercase  font-[52] text-gray-600   text-5xl  px-4 py-4 mb-4
         md:text-8xl md:font-[75] md:absolute  md:mt-25   md:top-30  md:text-white md:mx-4 "
          >
           {props.headingFirstLine} <br className="hidden md:block" />{props.headingSecondLine}
          </h1>
        </div>
        <div
          className="flex flex-col px-4 justify-between bg-[rgb(233,233,228)]  gap-4  
        md:flex-row md:gap-0 md:py-10  "
        >
          <div className="max-w-xl pb-4">
            <p className="text-xl font-medium ">
             {props.leftText}
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

      {/* ARTICLE SECTION STARTS FROM HERE : */}

      <div className="mt-18">
        <div className="grid md:grid-cols-[5fr_2fr] md:gap-25 mx-6">
          <div>
            <img src={props.articleImg} alt="article image" />
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl py-4 md:text-6xl">
              {props.articleHeading}
            </h2>
            <p className="text-xl">{props.firstParagraph}</p>
            <p className="text-xl">{props.secondParagraph}</p>
          </div>
        </div>
        <div className="mt-18 h-full ">
          <img
            src={props.articleRelatedImage}
            alt=""
            className="h-full object-cover"
          />
        </div>
      </div>

      <WhyEden />
      <div>
        <div className="mx-4 md:mt-60">
          <div className="w-[30%] border-2 border-gray-400"></div>
          <h1 className="text-6xl my-8 font-light">{props.cardHeading}</h1>
        </div>
      </div>
    </div>
  );
};

export default Template;
