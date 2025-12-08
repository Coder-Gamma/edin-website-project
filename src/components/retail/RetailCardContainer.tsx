import cardData2 from "../../data/cardData2";
import Cards from "../home/Cards";

const RetailCard = () => {
  const selectedCards = [cardData2[10], cardData2[0], cardData2[2]];
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

export default RetailCard;
