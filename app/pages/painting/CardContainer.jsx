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
      <Card
        containerRef={containerRef}
        src="https://images.unsplash.com/photo-1620428268482-cf1851a36764?q=80&w=2609&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Example image"
        rotate="8deg"
        top="50%"
        left="40%"
        className="w-48 md:w-72"
      />
    </div>
  );
};

export default CardContainer;
