import HeaderAnimation from "@/app/components/HeaderAnimation";
import HoverContainer from "@/app/components/HoverContainer";

const ContentOne = () => {
  return (
    <HoverContainer className="w-[270px] xl:w-[350px] xl:ml-[5%]">
      <article className="relative p-2 flex flex-col items-start pointer-events-none">
        <h1 className="font-secondary text-sm xl:text-2xl">HEY, i am</h1>
        <HeaderAnimation text="LEVAN" className="font-primary text-5xl" />
        <HeaderAnimation text="CHIKOVANI" className="font-primary text-5xl" />
        <div className="flex w-full flex-col xl:flex-row">
          <div className="flex flex-row space-x-1 xl:space-x-0 xl:flex-col gold-text *:leading-3 xl:pt-1">
            <h1>MERN</h1>
            <h1>STACK</h1>
          </div>
          <h1 className="text-[26px] xl:text-3xl font-secondary xl:pl-2">
            DEVELOPER
          </h1>
        </div>
      </article>
    </HoverContainer>
  );
};

export default ContentOne;
