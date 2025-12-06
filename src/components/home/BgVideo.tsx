import BgVideoFile from "../../video/BgVideo.mp4";
import { Link } from "react-router-dom";
import Mouseeffect from "./Mouseeffect";
function BgVideo() {
  return (
    <div className="flex justify-center px-4 relative bg-[rgb(233,233,228)] md:min-h-0">
      <Mouseeffect />
      <video
        className="w-full h-[70vh] md:h-[70vh] object-cover"
        src={BgVideoFile}
        autoPlay
        loop
        muted
      />

      <div
        id="overlay"
        // className="absolute right-0 flex items-center text-white p-4 space-y-4 flex-col items-end"
        className="absolute top-1/2 right-0 transform -translate-y-1/2 flex flex-col items-end text-white p-2 md:p-6 space-y-2 md:space-y-4"
      >
        <nav className="">
          <ul className="flex flex-col p-4 md:flex-row space-y-2 md:space-y-0 md:space-x-18 text-xl md:text-base  ">
            <li>
              <Link to="/commercial" className="hover:underline">
                <span>01</span>
                <br />
                Commercial
              </Link>
            </li>
            <li>
              <Link to="" className="hover:underline">
                <span>02</span>
                <br />
                Education
              </Link>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <span>03</span>
                <br />
                Leisure
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <span>04</span>
                <br />
                Retail
              </a>
            </li>
          </ul>
          <hr />
        </nav>
      </div>
    </div>
  );
}

export default BgVideo;
