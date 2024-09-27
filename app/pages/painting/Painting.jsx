import CardContainer from "./CardContainer";
import CardsHeader from "./CardsHeader";
import Light from "./Light";

const Painting = () => {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-neutral-950 mt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-30% z-[2] mt-20"></div>
      <CardsHeader />
      <CardContainer />
      <Light />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-30% z-[2]"></div>
    </section>
  );
};

export default Painting;
