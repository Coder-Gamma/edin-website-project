import cardData2 from "../../data/cardData2";
import Cards from "../home/Cards";

const CardsContainer = () => {
  const selectedCards = [cardData2[4], cardData2[3], cardData2[2]];
  return (
    <div className="mx-4 my-20 md:my-60">
      <div className="">
        <div className="w-[30%] border-2 border-gray-400"></div>
        <h1 className="text-6xl my-10 mb-20 font-light ">
          COMMERCIAL FIT OUT & <br />
          REFURBISHMENT CASE STUDIES
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {selectedCards.map((item, index) => (
          <Cards
            key={index}
            category={item.category}
            projectImg={item.projectImg}
            pname={item.pname}
            showCategory={false}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;
