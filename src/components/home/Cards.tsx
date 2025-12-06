import { MoveRight } from "lucide-react";

interface Card2Props {
  category?: string;
  projectImg: string;
  pname: string;
  showCategory?: boolean;
}

//

function Cards({
  category,
  projectImg,
  pname,
  showCategory = true,
}: Card2Props) {
  return (
    <div className="flex flex-col">
      {showCategory && (
        <h5 className="text-2xl text-gray-800 p-2  uppercase">{category}</h5>
      )}

      <img
        src={projectImg}
        alt="House img"
        className="h-130 object-cover w-full "
      />
      <p className="uppercase text-2xl md:text-4xl mt-4 md:mt-8">{pname}</p>
      <MoveRight className="mt-4 md:mt-8" size={42} />
    </div>
  );
}

export default Cards;
