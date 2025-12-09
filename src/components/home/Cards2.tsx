interface CardProps {
  img: string;
  heading: string;
  text: string;
}

function Cards2(props: CardProps) {
  return (
    <div className="flex flex-col">
      <div className="overflow-hidden h-150 w-full ">
        <img
          src={props.img}
          alt="img"
          className="w-full h-full object-cover 
        transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>

      <div className="pt-4">
        <h3 className="uppercase underline font-bold text-white space-y-2 py-2">
          {props.heading}
        </h3>
        <h5 className="uppercase text-white py-2 ">{props.text}</h5>
      </div>
    </div>
  );
}

export default Cards2;
