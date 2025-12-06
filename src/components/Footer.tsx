import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import FooterDecoration from "../assets/footer-decoration.png";
import { X } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-[#1d1d1d] py-15  px-4 relative overflow-hidden">
      <img
        src={FooterDecoration}
        alt=""
        className="absolute h-60 md:h-120 right-0"
      />
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-4 text-white text-2xl md:text-3xl mt-10">
        <div className="flex flex-col gap-4 md:gap-10 order-2 md:order-1">
          <Link to="" className="text-[#b6c71c]">
            Home
          </Link>
          <Link to="" className="hover:text-[#b6c71c]">
            About
          </Link>
        </div>
        <div className="flex flex-col md:gap-10 gap-4 order-3 md:order-2 ">
          <Link to="" className="hover:text-[#b6c71c]">
            Case studies
          </Link>
          <Link to="" className="hover:text-[#b6c71c]">
            Testimonials
          </Link>
          <Link to="" className="hover:text-[#b6c71c]">
            Galleries
          </Link>
          <Link to="" className="hover:text-[#b6c71c]">
            News
          </Link>
          <Link to="" className="hover:text-[#b6c71c]">
            Contact
          </Link>
          <Link to="" className="hover:text-[#b6c71c]">
            Privacy Policy
          </Link>
        </div>

        <div className="flex flex-col gap-4 md:gap-10 order-1 md:order-3">
          <h5 className="text-3xl ">Stay Connected</h5>
          <div className="flex gap-4">
            <Link to="" className="">
              <Linkedin size={48} />
            </Link>
            <X size={50} />
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-30 md:mt-50">
        <Link to="/">
          <img
            src="https://edenbuild.co.uk/wp-content/themes/eden/assets/img/logo.svg"
            className="w-18 md:w-auto"
          />
        </Link>
        <span className="hidden text-xl text-[#b6c71c] md:flex flex-col-reverse pr-80">
          MC3 Design
        </span>
      </div>
    </div>
  );
};

export default Footer;
