"use client";
import CenterImage from "./ParallaxBackground/CenterImage";
import ParallaxContent from "./ParallaxContent";

const SECTION_HEIGHT = 1500;

const Parallax = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full -mt-16"
    >
      <CenterImage heightData={SECTION_HEIGHT} />
      <ParallaxContent />
    </div>
  );
};

export default Parallax;
