import React from "react";

interface BackgroundVideoProps {
  // the ? makes the properties optional we can enable or disable them
  videoSrc: string;
  children: React.ReactNode;
  overlayOpacity?: number;
  posterSrc?: string;
}
const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  videoSrc,
  children,
  overlayOpacity = 0.5,
  posterSrc,
}) => {
  return (
    <div className="relative">
      <video
        className="absolute"
        src={videoSrc}
        poster={posterSrc}
        autoPlay
        loop
        muted
        // playsInline is used and important for ios diveces to prevent fullscreen trigerring
        playsInline
      />

      {/* this is for dark overlay which will insure text readibility */}

      <div
        className="absolute top-0 left-0 w-full h-full bg-black -z-10"
        style={{ opacity: overlayOpacity }}
      />

      {/* CONTENT  */}

      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
};

export default BackgroundVideo;
