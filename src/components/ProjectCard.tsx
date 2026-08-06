import './ProjectCard.css';

interface Props {
  name: string;
  description: string;
}

function ProjectCard({ name, description }: Props) {
  return (
    <div className="project-card">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ProjectCard;
