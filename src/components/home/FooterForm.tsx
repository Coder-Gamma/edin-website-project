import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FooterForm = () => {
  return (
    <div className="bg-[#cfd1c2] mt-20  py-10 md:mt-40 md:py-25 px-2 font-sans">
      <div>
        <div className="m-2">
          <h4 className="md:text-8xl text-5xl font-light uppercase text-[#333] mb-8">
            Get in touch
          </h4>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-[11fr_9fr] m-2 gap-10 text-[#333]">
          <div className="contents md:block">
            <Link
              to="/"
              className="md:text-6xl text-4xl font-light hover:font-bold block mb-8 md:mb-12 order-1 md:order-0"
            >
              0800 043 2639
            </Link>

            <div className="space-y-1 order-3 md:order-0" id="later">
              <p className="text-xl md:text-2xl md:mt-10">Eden London UK Ltd</p>
              <p className="text-xl md:text-2xl">Unit 33, Woodside Industrial Estate,</p>
              <p className="text-xl md:text-2xl">Woodside, Thornwood, Epping,</p>
              <p className="text-xl md:text-2xl">Essex, CM16 6LJ</p>
            </div>
          </div>

          <div className="w-full order-2 md:order-0">
            <form action="" className="flex flex-col gap-5">
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="mb-2 text-[#4a4a4a] text-lg font-normal"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full h-12 bg-white px-4 text-gray-800 outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="mb-2 text-[#4a4a4a] text-lg font-normal"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full h-12 bg-white px-4 text-gray-800 outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="phone"
                  className="mb-2 text-[#4a4a4a] text-lg font-normal"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full h-12 bg-white px-4 text-gray-800 outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="enquiry"
                  className="mb-2 text-[#4a4a4a] text-lg font-normal"
                >
                  Enquiry
                </label>
                <textarea
                  id="enquiry"
                  rows="6"
                  className="w-full bg-white p-4 text-gray-800 outline-none resize-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#424242] text-white h-14 px-5 flex justify-between items-center hover:bg-[#2b2b2b] transition-colors mt-2"
              >
                <span className="text-lg">Submit</span>
                <ArrowRight size={24} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterForm;
