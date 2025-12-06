import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";

// Images ko imports
import Poster from "../../assets/poster-2.png";
import Bgimage from "../../assets/Princess-Trust-Birmingham-Large-34-of-44.jpg";
import ConstructionWorker from "../../assets/Worker.jpg";
import VideoPlayer from "../VideoPlayer";

function Article2() {
  const playerRef = useRef<videojs.Player | null>(null);

  const videoOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    poster: Poster,
    sources: [
      {
        src: "https://vjs.zencdn.net/v/oceans.mp4",
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player: videojs.Player) => {
    playerRef.current = player;

    player.on("waiting", () => {
      console.log("player is waiting");
    });

    player.on("dispose", () => {
      console.log("player will dispose");
    });
  };
  return (
    <div className=" my-14">
      <div className="py-8 m-4">
        <h2 className="text-4xl font-light text-gray-550 border-t-2 border-gray-500 py-8 uppercase ">
          Real stories <br />
          Real Impact
        </h2>
      </div>
      <div className="">
        <VideoPlayer />
      </div>

      {/* --- VIDEO CONTAINER --- */}
      {/* <video
        src="https://ik.imagekit.io/codergamma/BgVideo.mp4?updatedAt=1764672523563"
        autoPlay
        muted
        poster={Poster}
      /> */}
      <p className="py-8 text- mx-4 md:text-3xl">
        See what Ben Roman from The Lighthouse Project and Keith McClure{" "}
        <br className="hidden sm:inline" /> from Bradley McClure Architects have
        to say about working with Eden.
      </p>
      <div className="py-8 relative w-full ">
        <img
          src={Bgimage}
          className="w-full object-cover h-[55vh] md:h-screen brightness-85 "
        />
        <div className="absolute  inset-0 flex flex-col justify-center items-center text-center p-4">
          <blockquote className="text-white max-w-3xl md:max-w-5xl">
            {/* <tspan x="0" y="271"></tspan> */}
            <p className="text-3xl text-left md:text-6xl text-gray-200 ">
              Eden have consistently delivered beyond expectation in terms of
              finish quality, time and project cost."
            </p>
            <cite className=" text-gray-200 text-left mt-10 block ">
              "Keith McClure"
              <br />
              "Bradley McClure Architects"
            </cite>
          </blockquote>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 mt-10 md:mt-30 mb-10 md:mb-30 p-4">
        <div className="">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-4 py-2 font-semibold md:px-8 md:py-3 border border-gray-500 rounded"
          >
            <span className=" text-xl md:text-2xl">Contact us</span>
            <MoveRight className="ml-30" size={28} />
          </Link>
        </div>
        <div className="mt-10">
          <p className="text-5xl font-medium md:font-normal md:text-7xl mr-4">
            0800 432639
          </p>
        </div>
      </div>

      {/* Yeha bata image ko suru */}

      <div>
        <img
          src={ConstructionWorker}
          alt="a construction worker"
          className="w-screen h-[90vh] object-cover"
        />
      </div>
    </div>
  );
}

export default Article2;
