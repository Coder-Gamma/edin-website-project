import React from "react";
import articleBgImage from "../../assets/Brunello-3-1920x726.jpg";

const Retail = () => {
  return (
    <div className="bg-[rgb(233,233,228)] h-screen overflow-hidden ">
      <div>
        <section
          className="relative h-[70vh] bg-cover bg-center bg-no-repeat max-w-[1900px]"
          style={{ backgroundImage: `url(${articleBgImage})` }}
        >
          <div className="absolute inset-0 bg-white/10 rounded-2xl"></div>
          <h1 className="md:absolute uppercase text-4xl md:text-8xl font-normal border-t border-gray-300 md:mt-25  text-white md:top-30 px-4 py-8">
            Retail fit out <br /> specialists
          </h1>
        </section>
      </div>
      <div className="flex flex-col px-6 md:flex-row justify-between bg-[rgb(233,233,228)] pb-8 md:pb-10 pt-6 md:pt-2 gap-4 md:gap-0 min-h-[30vh] md:min-h-0 ">
        <div className="max-w-xl">
          <p className="text-xl md:py-2 font-light">
            At Eden, we understand the power of well-designed retail
            environments. Whether you're launching a new store, refreshing an
            existing space or rolling out a full retail concept, we bring the
            experience and expertise to deliver tailored fit outs that reflect
            your brand and elevate the customer journey.
          </p>
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
  );
};

export default Retail;
