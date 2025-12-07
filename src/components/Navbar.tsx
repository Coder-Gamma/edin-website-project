import { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className={`flex top-0 left-0 w-full z-40 items-center justify-between fixed
  p-4 md:p-4 py-6 md:py-4 transition-colors duration-300
  ${open ? "bg-white md:bg-[rgb(233,233,228)]" : "bg-[rgb(233,233,228)]"}`}
      >
        <div>
          <Link to="/">
            <img
              src="https://edenbuild.co.uk/wp-content/themes/eden/assets/img/logo.svg"
              alt="logo"
              className="w-18 sm:w-16 md:w-20 h-auto relative z-999"
            />
          </Link>
        </div>

        <div className="flex flex-col items-end">
          <div className="flex items-center space-x-25">
            <p className="hidden md:block text-xl font-normal text-gray-600 cursor-pointer">
              CONSTRUCTION & FIT-OUTS
            </p>
            <p className="hidden md:block text-xl font-normal text-gray-600 cursor-pointer">
              088000 432 639
            </p>

            <div
              className="cursor-pointer relative"
              onClick={() => setOpen(!open)}
            >
              <Menu
                strokeWidth={3}
                className="w-10 h-10 md:w-12 md:h-12 z-9999 "
              />
            </div>
          </div>

          <hr className="hidden sm:block w-full border-t border-gray-600 mt-2" />
        </div>
      </nav>

      <div
        className={`
    fixed right-0 bg-white shadow-xl transition-all duration-500

    top-[90px] h-[calc(100vh-90px)] w-full


    md:top-0 md:h-screen md:w-[50%]

    ${open ? "translate-x-0" : "translate-x-full"}
    md:z-[60] z-[40]
  `}
      >
        <div className="p-10 space-y-8 text-3xl font-medium text-gray-700 flex flex-col mt-8 ">
          <Link
            onClick={() => setOpen(false)}
            to="/"
            className=" border-b-2 border-gray-400 uppercase py-1"
          >
            Home
          </Link>
          <Link to="/" className=" border-b-2 border-gray-400 uppercase py-1">
            Case Studies
          </Link>
          <Link
            onClick={() => setOpen(false)}
            to="/"
            className=" border-b-2 border-gray-400  uppercase py-1"
          >
            Gallery
          </Link>

          <Link
            onClick={() => setOpen(false)}
            to="/"
            className=" border-b-2 border-gray-400 uppercase py-1"
          >
            Services
          </Link>
          <Link
            onClick={() => setOpen(false)}
            to="/"
            className=" border-b-2 border-gray-400 uppercase py-1"
          >
            Sectors
          </Link>
          <Link
            onClick={() => setOpen(false)}
            to="/"
            className=" border-b-2 border-gray-400 uppercase py-1 "
          >
            News
          </Link>
          <Link
            onClick={() => setOpen(false)}
            to="/"
            className="  uppercase py-1"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
