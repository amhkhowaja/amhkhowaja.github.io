import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";

interface ProjectEntry {
  name: string;
  description: string;
}

interface Props {
  projects: ProjectEntry[];
}

function Projects({ projects }: Props) {
  return (
    <section id="projects">
      <SectionTitle title="Projects" />
      {projects.map((proj, i) => (
        <ProjectCard key={i} {...proj} />
      ))}
    </section>
  );
}

export default Projects;
