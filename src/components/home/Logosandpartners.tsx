import Logos from "../../assets/Logos.png";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";
import { leftVarient } from "../../utils/animation";
import { motion } from "framer-motion";

function Logosandpartners() {
  return (
    <>
      <motion.div
        variants={leftVarient}
        initial="paila"
        whileInView="paxi"
        viewport={{ once: true, amount: 0.5 }}
        className="p-4 mb-10 md:mb-20 overflow-x-hidden"
      >
        <img src={Logos} alt="logos" className="w-full md:w-[30%]" />
      </motion.div>
      <div className="border-2 mx-2 border-gray-300 w-full md:w-[40%]"></div>
      <h2 className="text-4xl md:font-extralight md:text-9xl mt-10 md:mt-20 p-4">
        Official partner of the kings
      </h2>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 mt-10 md:mt-30 mb-10 md:mb-30 p-4">
        <div className="">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center font-light px-4 py-1 md:px-8 md:py-3 border border-gray-500 rounded"
          >
            <span className="text-2xl">Contact us</span>
            <MoveRight className="ml-30" size={28} />
          </Link>
        </div>
        <div>
          <p className="text-4xl font-medium md:font-normal md:text-7xl mr-4">
            0800 432639
          </p>
        </div>
      </div>
    </>
  );
}

export default Logosandpartners;
