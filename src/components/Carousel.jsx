import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ProjectCard from "./ProjectCard";
import projects from "../data/projectsList";

const projectsMap = projects.map((project) => {
  return (
    <ProjectCard
      key={project.key}
      title={project.title}
      builtWith={project.builtWith}
      description={project.description}
      image={project.image}
      live={project.live}
      github={project.github}
    />
  );
});

export default function Carousel() {
  return <AliceCarousel items={projectsMap} controlsStrategy="alternate" />;
}
