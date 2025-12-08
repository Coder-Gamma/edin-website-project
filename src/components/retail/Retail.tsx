import React from "react";
import articleBgImage from "../../assets/Brunello-3-1920x726.jpg";

const Retail = () => {
  return (
    <div className="bg-[rgb(233,233,228)] ">
      <div className="h-screen md:h-auto overflow-hidden mx-4">
        <section
          className="relative md:h-[50vh]  bg-cover bg-center bg-no-repeat max-w-[1900px] flex flex-col "
          style={{ backgroundImage: `url(${articleBgImage})` }}
        >
          <h1
            className="text-4xl/12 md:text-6xl xl:text-9xl/28 font-light tracking-wide  uppercase py-5 
             md:border-gray-100  md:text-white md:border-t-2 md:bottom-12 md:left-8
           text-black relative md:absolute mt-auto top-32 md:top-60 "
          >
            Retail fit out specialists
          </h1>
        </section>
      </div>
      <p className="mx-4 text-xl">
        At Eden, we understand the power of well-designed retail environments.
        Whether you're launching a new store, refreshing an existing space or
        rolling out a full retail concept, we bring the experience and expertise
        to deliver tailored fit outs that reflect your brand and elevate the
        customer journey.
      </p>
      <div className="mx-4 flex md:justify-between items-center space-x-7 py-12">
        <img
          src="https://edenbuild.co.uk/wp-content/uploads/2025/08/kings-trust-logo-1.svg"
          className="w-12 md:w-[72px] "
          alt="King's Trust Logo"
        />
        <p className="mt-0 text-base md:text-2xl ">
          Official partner of the King's Trust.
        </p>
      </div>
    </div>
  );
};

export default Retail;
