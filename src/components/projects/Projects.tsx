import Card from "./Card";
import Odinbook from "../../images/odinbook-img.png";

import "./projects.css";

function Projects() {
  const projects = [
    {
      title: "Odinbook",
      description:
        "Facebook 'Clon' made as a final project for TheOdinProject.com",
      to: {
        git: "https://github.com/leandrob0/odinbook-app",
        deploy: "https://odinbook-top.herokuapp.com/",
      },
    },
  ];

  return (
    <section className="projects-section">
      <h4>My Projects</h4>
      <p className="projects-subtitle">
        Here are some of my most recent/best projects!
      </p>
      <div className="projects-container">
        <Card
          src={Odinbook}
          title="Odinbook"
          description="Facebook 'Clon' made as a final project for TheOdinProject.com"
          to={projects[0].to}
        />
      </div>
    </section>
  );
}

export default Projects;
