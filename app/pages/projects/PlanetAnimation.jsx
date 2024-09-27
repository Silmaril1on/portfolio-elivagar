const PlanetAnimation = () => {
  return (
    <div className="w-96 h-96 sticky top-[300px] left-[130px] hidden xl:block">
      <div className="center relative">
        <div className="w-64 h-64 rounded-full border border-cream absolute"></div>
        <div className="w-64 h-64 rounded-full relative spin">
          <div className="w-7 h-7 top-14 absolute bg-black rounded-full border border-cream"></div>
        </div>
        <div className="w-64 h-64 rounded-full absolute spin-slow">
          <div className="w-20 h-20 top-0 absolute bg-black rounded-full border border-cream"></div>
        </div>
        <div className="w-64 h-64 rounded-full absolute spin-medium">
          <div className="w-14 h-14 top-7 absolute bg-black rounded-full border border-gold"></div>
        </div>
      </div>
    </div>
  );
};

export default PlanetAnimation;
