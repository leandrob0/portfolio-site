import "./tools.css";

import Single from "./Single";
import { faCode } from "@fortawesome/free-solid-svg-icons";

function Tools() {
  const toolsFront = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Redux Toolkit",
    "Tailwind",
    "Sass",
  ];

  return (
    <section>
      <Single icon={faCode} title="Front-end Development" tools={toolsFront} />
    </section>
  );
}

export default Tools;
