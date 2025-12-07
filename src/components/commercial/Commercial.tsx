import BackgroundImg from "../../assets/Princess-Trust-Birmingham-Large-3-of-44-1920x726.jpg";
import WhyEden from "../WhyEden";
import CardsContainer from "./CardsContainer";
import Carticle from "./Carticle";
import Intro from "./Intro";

const Commercial = () => {
  return (
    <div>
      <div className="bg-[rgb(233,233,228)]">
        <section
          className=" relative h-[70vh] bg-cover bg-center bg-no-repeat  max-w-[1900px] mx-4"
          style={{ backgroundImage: `url(${BackgroundImg})` }}
        >
          <div className="absolute inset-0 bg-white/10 rounded-2xl"></div>
          <h1 className="absolute text-4xl md:text-6xl lg:text-6xl  xl:8xl font-normal  text-white top-30 px-4 py-8">
            COMMERCIAL FIT OUT <br />
            AND REFURBISHMENT SPECIALISTS
          </h1>
        </section>
      </div>
      <Intro />
      <Carticle />
      <WhyEden />
      <div className="">
        <div className="w-[30%] border-2 border-gray-400"></div>
        <h1 className="text-6xl my-10 mb-20 font-light ">
          COMMERCIAL FIT OUT & <br />
          REFURBISHMENT CASE STUDIES
        </h1>
      </div>
      <CardsContainer />
    </div>
  );
};

export default Commercial;
