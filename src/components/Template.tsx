import React from "react";
import WhyEden from "./WhyEden";
interface template {
  backgroundImg: string;
  heading: string;
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
      <div className="bg-[rgb(233,233,228)] h-screen overflow-hidden ">
        <div>
          <section
            className="relative h-[70vh] bg-cover bg-center bg-no-repeat max-w-[1900px]"
            style={{ backgroundImage: `url(${props.backgroundImg})` }}
          >
            <div className="absolute inset-0 bg-white/10 rounded-2xl"></div>
            <h1 className="md:absolute uppercase text-4xl md:text-8xl font-normal border-t border-gray-300 md:mt-25  text-white md:top-30 px-4 py-8">
              {props.heading}
            </h1>
          </section>
        </div>
        <div className="flex flex-col px-6 md:flex-row justify-between bg-[rgb(233,233,228)] pb-8 md:pb-10 pt-6 md:pt-2 gap-4 md:gap-0 min-h-[30vh] md:min-h-0 ">
          <div className="max-w-xl">
            <p className="text-xl md:py-2 font-light">{props.leftText}</p>
          </div>

          <div className="flex items-start space-x-2">
            <img
              src="https://edenbuild.co.uk/wp-content/uploads/2025/08/kings-trust-logo-1.svg"
              className="w-12 md:w-[72px] "
              alt="King's Trust Logo"
            />
            <p className="mt-0 text-base md:text-2xl ">
              Official partner of the
              <br /> King's Trust.
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
