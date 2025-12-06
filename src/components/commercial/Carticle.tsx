import React from "react";
import Storeimg from "../../assets/Brunello-5-1024x803.jpg";
import Phoneximg from "../../assets/Phoenix-Milton-Keynes-4.jpg";

const Carticle = () => {
  return (
    <div className="mt-18">
      <div className="grid md:grid-cols-[5fr_2fr] md:gap-25 mx-6">
        <div>
          <img src={Storeimg} alt="store image fashion" />
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="md:text-6xl">CREATING SPACES THAT WORK</h2>
          <p className="text-xl">
            Commercial fit outs are about more than construction – they’re about
            creating environments that support productivity, culture and growth.
            At Eden, we bring together technical expertise and creative thinking
            to deliver spaces that reflect your goals and meet your practical
            needs.
          </p>
          <p className="text-xl">
            From open-plan offices and reception areas to breakout zones,
            meeting suites and landlord spaces, we deliver complete commercial
            environments with the confidence and control you expect.
          </p>
        </div>
      </div>
      <div className="mt-18 h-screen">
        <img src={Phoneximg} alt="" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default Carticle;
