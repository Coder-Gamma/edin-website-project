import React from "react";
import Aboutimg from "../assets/about-3-1024x792.png";

const WhyEden = () => {
  return (
    <div className="mx-4 my-20 md:my-30">
      <div>
        <h3 className="text-4xl font-light mb-18">WHY CHOOSE EDEN?</h3>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="flex gap-6 flex-col">
          <div>
            <p className="font-bold mb-6 text-xl">Intellenge Delivery</p>
            <p className="text-xl font-normal">
              We plan rigorously, communicate clearly and deliver with
              precision. Our team thrives in high-pressure environments and
              consistently hits tight timelines without compromising quality.
            </p>
          </div>
          <div>
            <p className="font-bold text-xl">Real-time progress tracking</p>
            <p className="text-xl font-normal">
              Our cloud-based project hub gives you full visibility of your
              build. Track progress, view milestones, and receive updates
              wherever you are.
            </p>
          </div>

          <p className="font-bold text-xl">Built on quality</p>
          <p className="text-xl font-normal">
            We work to ISO 9001 standards across all projects, ensuring every
            stage from procurement and benchmarking to handover and aftercare is
            professionally managed and quality assured.
          </p>
        </div>
        <div>
          <p className="font-bold text-xl">We deliver:</p>
          <ul className="px-5 list-disc text-lg">
            <li className="my-4">Landlord refurbishments</li>
            <li className="my-4">Office fit outs (Cat A and Cat B)</li>
            <li className="my-4">Commercial-to-residential conversions</li>
            <li className="my-4">Common area upgrades</li>
            <li className="my-4">Reception and front-of-house fit outs</li>
            <li className="my-4">
              Structural alterations and reconfigurations
            </li>
          </ul>
        </div>
        <div>
          <img src={Aboutimg} alt="a girl wearing glasses smiling happily" className="" />
        </div>
      </div>
    </div>
  );
};

export default WhyEden;
