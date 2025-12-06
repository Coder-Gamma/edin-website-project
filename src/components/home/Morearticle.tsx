import Articleimg from "../../assets/man-1024x978.png";

function Morearticle() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-6 md:gap-4 m-4">
      <div className="order-2 md:order-1">
        <div className="border-2 border-gray-300 mb-6 md:mb-10"></div>
        <p className="text-3xl md:text-6xl">
          Eden is a principal contractor with vast experience covering all
          aspects of the construction industry with our priority to deliver on
          time & budget without geographical restraints.
        </p>
      </div>
      <div className="order-1 md:order-2">
        <img src={Articleimg} alt="a man" className="w-full h-auto object-cover" />
      </div>
    </div>
  );
}

export default Morearticle;
