import { useState } from "react";

const VideoPlayer = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative w-full max-w-5xl mx-4 aspect-video overflow-hidden rounded-xl">
      {playing && (
        <iframe
          src="https://player.vimeo.com/video/1115525851?autoplay=1&controls=1&title=0&byline=0&portrait=0"
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
        />
      )}

      {!playing && (
        <div
          className="absolute inset-0 cursor-pointer"
          onClick={() => setPlaying(true)}
        >
          <img
            src="https://edenbuild.co.uk/wp-content/uploads/2025/08/poster-2.png"
            alt="Case Study Poster"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="146"
              height="146"
              viewBox="0 0 146 146"
              className="hover:scale-110 transition-transform duration-100"
            >
              <g transform="translate(-604 -2346)">
                <circle
                  cx="73"
                  cy="73"
                  r="73"
                  transform="translate(604 2346)"
                  fill="#fff"
                  opacity="0.74"
                />
                <path
                  d="M18,0,36,31H0Z"
                  transform="translate(700 2401) rotate(90)"
                  fill="#1d1d1d"
                />
              </g>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
