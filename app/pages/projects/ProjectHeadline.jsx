import HeaderAnimation from "@/app/components/HeaderAnimation";

const ProjectHeadline = () => {
  return (
    <div className="sticky top-[100px]">
      <HeaderAnimation text="recent projects" className="text-7xl uppercase" />
    </div>
  );
};

export default ProjectHeadline;
