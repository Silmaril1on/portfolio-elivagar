import { useRef } from "react";
import Card from "./Card";

const CardContainer = () => {
  const containerRef = useRef(null);

  return (
    <div className="absolute h-[90%] bottom-0 w-full z-[3]" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src="/assets/paint1.jpg"
        alt="Example image"
        rotate="6deg"
        top="20%"
        left="25%"
        className="w-56"
      />
      <Card
        containerRef={containerRef}
        src="/assets/paint2.jpg"
        alt="Example image"
        rotate="-8deg"
        top="25%"
        left="60%"
        className="w-60"
      />
      <Card
        containerRef={containerRef}
        src="/assets/paint3.jpg"
        alt="Example image"
        rotate="-6deg"
        top="20%"
        left="40%"
        className="w-80"
      />
    </div>
  );
};

export default CardContainer;
