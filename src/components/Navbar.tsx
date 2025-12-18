import { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function Navbar() {
  // const [open, setOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav
        className={`fixed  top-0 left-0 flex w-full z-50 items-center justify-between
  p-4 md:p-4 py-6 md:py-4 transition-all duration-300 bg-[rgb(233,233,228)]`}
      >
        <div>
          <Link
            to="/"
            onClick={() => {
              if (window.location.pathname === "/") {
                window.location.reload();
              }
            }}
          >
            <img
              src="https://edenbuild.co.uk/wp-content/themes/eden/assets/img/logo.svg"
              alt="logo"
              className="w-18 sm:w-16 md:w-20 h-auto relative"
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
            {/* MENU ICON Wrapper  */}
            <div
              className="cursor-pointer relative z-100"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <Menu strokeWidth={3} className="w-10 h-10 md:w-12 md:h-12 " />
            </div>
          </div>

          <hr className="hidden sm:block w-full border-t border-gray-600 mt-2" />
        </div>

        <div
          className={`absolute top-0 right-0 items-start
          flex flex-col bg-white/95 gap-6 w-full md:w-[50%] h-screen pt-20 text-3xl font-normal
          transform transition-transform ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }
          `}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease-in" }}
        >
          {/* <Link
            onClick={() => setIsMenuOpen(false)}
            to="/"
            className=" border-b-2 border-gray-400 uppercase py-1"
          >
            Home
          </Link> */}
          <div className="flex gap-20 border-b-2 border-gray-400 mx-20 w-80">
            <Link
              onClick={() => setIsMenuOpen(false)}
              to="/"
              className="  uppercase py-1"
            >
              Home
            </Link>
          </div>
          <div className="flex items-center gap-20 border-b-2 border-gray-400 mx-20">
            <Link
              onClick={() => setIsMenuOpen(false)}
              to="/case-study"
              className="  uppercase py-1"
            >
              Case Studies
            </Link>
            <ArrowRight size={32} />
          </div>
          <div className=" border-gray-400 border-b-2 mx-20 w-80">
            <Link
              onClick={() => setIsMenuOpen(false)}
              to="/gallery"
              className="   uppercase py-1"
            >
              Gallery
            </Link>
          </div>
          <div className=" border-gray-400 border-b-2 mx-20 w-80 flex items-center justify-between">
            <Link
              onClick={() => setIsMenuOpen(false)}
              to="/about"
              className="   uppercase py-1"
            >
              About
            </Link>
            <ArrowRight size={32} />
          </div>

          <div className=" border-gray-400 border-b-2 mx-20 w-80 flex items-center justify-between">
            <Link
              onClick={() => setIsMenuOpen(false)}
              to="/services"
              className="   uppercase py-1"
            >
              Services
            </Link>
            <ArrowRight size={32} />
          </div>

          <div className=" border-gray-400 border-b-2 mx-20 w-80 flex items-center justify-between">
            <Link
              onClick={() => setIsMenuOpen(false)}
              to="/sectors"
              className="   uppercase py-1"
            >
              Sectors
            </Link>
            <ArrowRight size={32} />
          </div>

          <div className=" border-gray-400 border-b-2 mx-20 w-80">
            <Link
              onClick={() => setIsMenuOpen(false)}
              to="/gallery"
              className="   uppercase py-1"
            >
              Gallery
            </Link>
          </div>
          <div className=" border-gray-400 border-b-2 mx-20 w-80">
            <Link
              onClick={() => setIsMenuOpen(false)}
              to="/contact"
              className="   uppercase py-1"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
