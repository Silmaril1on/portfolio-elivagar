import HeaderAnimation from "@/app/components/HeaderAnimation";
import HoverContainer from "@/app/components/HoverContainer";

const ContentOne = () => {
  return (
    <HoverContainer className="w-[350px] ml-[5%]">
      <article className="relative p-2 flex flex-col items-start pointer-events-none">
        <h1 className="font-secondary text-2xl">HEY, i am</h1>
        <HeaderAnimation text="LEVAN" className="font-primary text-5xl" />
        <HeaderAnimation text="CHIKOVANI" className="font-primary text-5xl" />
        <div className="flex w-full">
          <div className="flex flex-col gold-text *:leading-3 pt-1">
            <h1>front</h1>
            <h1>end</h1>
          </div>
          <h1 className="text-3xl font-secondary pl-2">WEB DEVELOPER</h1>
        </div>
      </article>
    </HoverContainer>
  );
};

export default ContentOne;
