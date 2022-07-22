import Card from "./Card";
import projects from "../../utils/projects";

import "./projects.css";

function Projects() {
  return (
    <section className="projects-section">
      <h4>My Projects</h4>
      <p className="projects-subtitle">
        Here are some of my most recent/best projects!
      </p>
      <div className="projects-container">
        {projects.map((project) => (
          <Card
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            to={project.to}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
