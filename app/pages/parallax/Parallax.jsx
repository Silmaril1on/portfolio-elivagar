"use client";
import CenterImage from "./ParallaxBackground/CenterImage";
import ParallaxContent from "./ParallaxContent";

const SECTION_HEIGHT = 1500;

const Parallax = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage heightData={SECTION_HEIGHT} />
      <ParallaxContent />

      {/* <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" /> */}
    </div>
  );
};

export default Parallax;
