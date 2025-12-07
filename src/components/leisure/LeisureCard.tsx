import cardData2 from "../../data/cardData2";
import Cards from "../home/Cards";

const LeisureCard = () => {
  const selectedCards = [cardData2[7], cardData2[8], cardData2[9]];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-4 my-20">
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
  );
};

export default LeisureCard;
