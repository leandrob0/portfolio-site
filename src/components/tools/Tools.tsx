import "./tools.css";

import Single from "./Single";
import { faCode, faWrench } from "@fortawesome/free-solid-svg-icons";

function Tools() {
  const toolsFront = [
    "HTML",
    "CSS",
    "Sass",
    "Tailwind",
    "JavaScript",
    "TypeScript",
    "React",
    "Redux Toolkit",
  ];
  const toolsOther = [
    "Node.js",
    "Express",
    "MongoDB",
    "C",
    "Java",
    "Github",
    "Linux",
  ]

  return (
    <section className="tools-container">
      <Single icon={faCode} title="Front-end Development" tools={toolsFront} />
      <Single icon={faWrench} title="Other tools" tools={toolsOther} />
    </section>
  );
}

export default Tools;
