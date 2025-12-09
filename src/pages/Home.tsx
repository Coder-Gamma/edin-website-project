import FooterForm from "../components/home/FooterForm";
import Article from "../components/home/Article";
import Article2 from "../components/home/Article2";
import BgVideo from "../components/home/BgVideo";
import Cards from "../components/home/Cards";
import Cards2 from "../components/home/Cards2";
import FooterArticle from "../components/home/FooterArticle";
import Headertext from "../components/home/Headertext";
import Logosandpartners from "../components/home/Logosandpartners";
// import { Routes, Route } from "react-router-dom";
import Morearticle from "../components/home/Morearticle";
import cardData from "../data/cardData";
import cardData2 from "../data/cardData2";

//Framer motion imports
import { motion } from "framer-motion";
import { gridContainerVarients, gridCardsVarients } from "../utils/animation";
import { textVarient } from "../utils/animation";

const Home = () => {
  return (
    <div>
      <BgVideo />
      <Headertext />
      <Article />

      <motion.div
        variants={gridContainerVarients}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-3 gap-4 mx-4 my-4 md:gap-y-20 overflow-x-hidden"
      >
        {/* <Cards categoty={elem.category} pimg={elem.pimg} pname={elem.pname} /> */}
        {cardData2.slice(0, 6).map(function (elem, index) {
          return (
            <motion.div
              variants={gridCardsVarients}
              className="grid"
              key={index}
            >
              <Cards
                category={elem.category}
                projectImg={elem.projectImg}
                pname={elem.pname}
              />
            </motion.div>
          );
        })}

        <div>
          <p className="underline mt-10 mb-10 p-4 text-2xl">View all</p>
        </div>
      </motion.div>

      <Logosandpartners />
      <Morearticle />
      {
        // YEHA WRAPPER DIV BANAUNA PRYO FOR THE CARDS GRID LAYOUT
        <div className="bg-neutral-900 p-4">
          <div className="mt-10 mb-10 border-t-4 border-gray-400 py-8 ">
            <motion.h1
              variants={textVarient}
              initial="paila"
              whileInView="paxi"
              viewport={{ once: true, amount: 0.2 }}
              className="uppercase text-4xl text-white border-t-gray-400 md:text-8xl"
            >
              Explore a section <br /> of completed <br /> projects
            </motion.h1>
          </div>

          <motion.div
            variants={gridContainerVarients}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {cardData.map(function (elem, index) {
              return (
                <motion.div
                  variants={gridCardsVarients}
                  className="grid "
                  key={index}
                >
                  <Cards2
                    img={elem.img}
                    heading={elem.heading}
                    text={elem.text}
                  />
                </motion.div>
              );
            })}
          </motion.div>
          <div>
            <h4 className="underline text-xl text-white my-10 pb-20">
              View more projects
            </h4>
          </div>
        </div>
      }
      <Article2 />
      <FooterArticle />
      <FooterForm />
      {/* <ScrollToTop /> */}
    </div>
  );
};

export default Home;
