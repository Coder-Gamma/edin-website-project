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
const Home = () => {
  return (
    <div>
      <BgVideo />
      <Headertext />
      <Article />

      <div className="grid md:grid-cols-3 gap-4 mx-4 my-4 md:gap-y-20">
        {/* <Cards categoty={elem.category} pimg={elem.pimg} pname={elem.pname} /> */}
        {cardData2.map(function (elem, index) {
          return (
            <div className="grid" key={index}>
              <Cards
                category={elem.category}
                projectImg={elem.projectImg}
                pname={elem.pname}
              />
            </div>
          );
        })}

        <div>
          <p className="underline mt-10 mb-10 p-4 text-2xl">View all</p>
        </div>
      </div>

      <Logosandpartners />
      <Morearticle />
      {
        // YEHA WRAPPER DIV BANAUNA PRYO FOR THE CARDS GRID LAYOUT
        <div className="bg-neutral-900 p-4">
          <div className="mt-10 mb-10 border-t-4 border-gray-400 py-8 ">
            <h1 className="uppercase text-4xl text-white border-t-gray-400 md:text-8xl">
              Explore a section <br /> of completed <br /> projects
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {cardData.map(function (elem, index) {
              return (
                <div className="grid " key={index}>
                  <Cards2
                    img={elem.img}
                    heading={elem.heading}
                    text={elem.text}
                  />
                </div>
              );
            })}
          </div>
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
    </div>
  );
};

export default Home;
