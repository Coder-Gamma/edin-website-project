import BgVideoFile from "../../video/BgVideo.mp4";
import { Link } from "react-router-dom";
import MouseEffect from "./Mouseeffect";
import { useRef } from "react";

function BgVideo() {
  // 1. Create a ref for the container
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex justify-center px-4 bg-[rgb(233,233,228)] md:min-h-0">
      {/* 2. Attach ref to the parent container */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden" // Added overflow-hidden to clip line at edges
      >
        {/* 3. Pass ref to MouseEffect */}
        <MouseEffect containerRef={containerRef} />

        <video
          className="w-full h-[70vh] md:h-[70vh] object-cover"
          src={BgVideoFile}
          autoPlay
          loop
          muted
        />

        <div
          id="overlay" // Important: MouseEffect looks for this ID to hide the cursor
          className="absolute top-1/2 right-0 transform -translate-y-1/2 flex flex-col items-end text-white p-2 md:p-6 space-y-2 md:space-y-4 z-20" // Added z-20 to sit above cursor
        >
          <nav>
            <ul className="flex flex-col p-4 md:flex-row space-y-2 md:space-y-0 md:space-x-18 text-xl md:text-base">
              <li>
                <Link
                  to="/commercial"
                  className="hover:underline block text-right"
                >
                  <span>01</span>
                  <br />
                  Commercial
                </Link>
              </li>
              <li>
                <Link
                  to="/education"
                  className="hover:underline block text-right"
                >
                  <span>02</span>
                  <br />
                  Education
                </Link>
              </li>
              <li>
                <Link
                  to="/leisure"
                  className="hover:underline block text-right"
                >
                  <span>03</span>
                  <br />
                  Leisure
                </Link>
              </li>
              <li>
                <Link to="/retail" className="hover:underline block text-right">
                  <span>04</span>
                  <br />
                  Retail
                </Link>
              </li>
            </ul>
            <hr className="mt-4 border-white/50 w-full" />
          </nav>
        </div>
      </div>
    </div>
  );
}

export default BgVideo;
