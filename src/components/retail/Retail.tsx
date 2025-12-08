import React from "react";
import articleBgImage from "../../assets/Brunello-3-1920x726.jpg";

const Retail = () => {
  return (
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
  );
};

export default Retail;
