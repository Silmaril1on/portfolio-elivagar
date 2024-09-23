import PlanetAnimation from "./PlanetAnimation";
import ProjectHeadline from "./ProjectHeadline";
import ProjectList from "./list/ProjectList";

const Projects = () => {
  return (
    <section className="w-full relative">
      <ProjectHeadline />
      <PlanetAnimation />
      <ProjectList />
    </section>
  );
};

export default Projects;
