import React from "react";

const Intro = () => {
  return (
    <div className="flex flex-col px-6 md:flex-row justify-between bg-[rgb(233,233,228)] pb-8 md:pb-10 pt-6 md:pt-2 gap-4 md:gap-0 min-h-[30vh] md:min-h-0 ">
      <div className="max-w-xl">
        <p className="text-[18px] md:py-2 font-light">
          Whether you're upgrading a single floor or transforming an entire
          building, Eden delivers commercial fit outs and refurbishments that
          help businesses perform at their best.
          <br /> We work with landlords, developers, managing agents and
          occupiers to reshape and reimagine workspaces across the UK. From
          strategic refurbishments to high-performance Cat A and Cat B fit outs,
          our team brings clarity, speed and quality to every commercial
          project.
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
  );
};

export default Intro;
