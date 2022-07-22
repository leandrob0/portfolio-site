import Card from "./Card";
import Odinbook from "../../images/odinbook-img.png";
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
        <Card
          src={Odinbook}
          title={projects[0].title}
          description={projects[0].description}
          to={projects[0].to}
        />
      </div>
    </section>
  );
}

export default Projects;
