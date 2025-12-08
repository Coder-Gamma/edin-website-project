import React from "react";
import articleBgImage from "../../assets/Brunello-3-1920x726.jpg";
import retailArticleImage from "../../assets/Retail-article-image.jpg";
import retailFashionImage from "../../assets/Brunello-1.jpg";
import aboutImg from "../../assets/EdenOffice-9-1024x727.jpg";
import RetailCard from "./RetailCardContainer";

const Retail = () => {
  return (
    <div>
      <div className="bg-[rgb(233,233,228)] min-h-screen overflow-x-hidden ">
        {/* This div is going to be a wrapper to hindle positioning for desktop */}
        <div className="relative">
          <section
            className="relative mx-4 h-[85vh] md:h-[70vh] bg-cover bg-center bg-no-repeat max-w-[1900px]"
            style={{ backgroundImage: `url(${articleBgImage})` }}
          >
            <div className="absolute inset-0 bg-white/10 rounded-2xl"></div>
          </section>
          <h1
            className=" uppercase  font-[52] text-gray-600   text-5xl  px-4 py-4 mb-4
         md:text-8xl md:font-[75] md:absolute  md:mt-25   md:top-30  md:text-white md:mx-4 "
          >
            Retail fit out <br className="hidden md:block" /> specialists
          </h1>
        </div>
        <div
          className="flex flex-col px-4 justify-between bg-[rgb(233,233,228)]  gap-4  
        md:flex-row md:gap-0 md:py-10  "
        >
          <div className="max-w-xl pb-4">
            <p className="text-xl font-medium ">
              At Eden, we understand the power of well-designed retail
              environments. Whether you're launching a new store, refreshing an
              existing space or rolling out a full retail concept, we bring the
              experience and expertise to deliver tailored fit outs that reflect
              your brand and elevate the customer journey.
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
      <div className="mt-18">
        <div className="grid md:grid-cols-[5fr_2fr] md:gap-25 mx-6">
          <div>
            <img src={retailArticleImage} alt="article image" />
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-xl">
              From independent boutiques to multi-site rollouts, our team works
              closely with retailers, designers and developers to deliver spaces
              that are both visually impactful and commercially focused. Every
              detail is considered, every finish is deliberate.
            </p>
            <h2 className="font-bold text-2xl">
              A considered approach to retail
            </h2>
            <p className="text-xl">
              The retail landscape is constantly evolving. With footfall, dwell
              time and brand loyalty more important than ever, we approach each
              project with fresh thinking and attention to the details that
              drive performance.
            </p>
            <p className="text-xl">
              Our role goes far beyond fit out. We're a partner who can support
              with layout planning, compliance, logistics and end-to-end project
              management. Whether it's a high street flagship or a space within
              a larger mixed-use scheme, our delivery is seamless, flexible and
              fully transparent.
            </p>
          </div>
        </div>
        <div className="mt-18 h-full ">
          <img
            src={retailFashionImage}
            alt=""
            className="h-full object-cover"
          />
        </div>
      </div>

      {/* YEHA BATA WHY EDEN SECTION START */}
      <div className="mx-4 my-20 md:my-30">
        <div>
          <h3 className="text-4xl font-light mb-18">BUILT FOR PERFORMANCE</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="flex gap-6 flex-col">
            <div>
              <p className=" mb-6 text-lg">
                We know how important timing, coordination and quality are in a
                live retail environment. Our projects are managed through a
                cloud-based platform, giving clients and teams real-time
                visibility from day one to handover. We build trust through
                clear communication, rigorous processes and high standards.
              </p>
              <p className="text-lg font-normal">
                All works are delivered to ISO9001-accredited quality management
                systems, giving you full confidence in the care, control and
                craftsmanship behind your retail space.
              </p>
            </div>
          </div>
          <div>
            <p className=" font-normal text-3xl">What We deliver:</p>
            <ul className="px-5 list-disc text-lg">
              <li className="my-4">Bespoke retail fit outs</li>
              <li className="my-4">Retail refurbishments and refits</li>
              <li className="my-4">Storefront and shopfront installation</li>
              <li className="my-4">Design development and prototyping</li>
              <li className="my-4">Joinery, fixtures and finishes</li>
              <li className="my-4">Project management and aftercare</li>
            </ul>
          </div>
          <div>
            <img
              src={aboutImg}
              alt="a girl wearing glasses smiling happily"
              className=""
            />
          </div>
        </div>
      </div>

      {/* --------------------------cARDS SECTION-------------------------  */}
      <div>
        <div className="mx-4 md:mt-60">
          <div className="w-[30%] border-2 border-gray-400"></div>
          <h1 className="text-6xl my-8 font-light uppercase">
            Case <br /> Studies
          </h1>
        </div>
      </div>
      <div>
        <div className="flex justify-end mx-4 ">
          <p className="text-xl underline cursor-pointer">
            View all Case Studies
          </p>
        </div>
        <RetailCard />
      </div>
      <div className="flex justify-start mx-4 md:my-30">
        <p className="text-xl underline cursor-pointer">
          View all Case Studies
        </p>
      </div>
    </div>
  );
};

export default Retail;
