import { ArrowDown } from "lucide-react";
function Article() {
  return (
    <div className="bg-white">
      <div className="mt-10 md:mt-20 w-full md:w-[40%] p-4">
        <hr className="" />
        <h3 className="text-4xl md:text-7xl mt-4">
          Case <br />
          Studies
        </h3>
      </div>
      <div className="flex flex-col w-[100%]">
        <div className="flex justify-between p-4 items-baseline ">
          <div className="flex w-full md:w-[40%] justify-between mt-4 md:mt-8 p-4">
            <span className="text-lg md:text-2xl">Filter</span>
            <ArrowDown className="w-8 h-8 md:w-10 md:h-10" />
          </div>
          <div>
            <span className="text-base md:text-xl underline">View All</span>
          </div>
        </div>
        <div className="border-2 border-gray-300 w-full md:w-[40%]"></div>
      </div>
    </div>
  );
}

export default Article;
