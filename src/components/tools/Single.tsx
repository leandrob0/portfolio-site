import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface propTools {
  icon: IconDefinition;
  title: string;
  tools: Array<string>;
}

function Single({ icon, title, tools }: propTools) {
  return (
    <article className="col">
      <FontAwesomeIcon icon={icon} className="icon-color" />
      <h5 className="black-text">{title}</h5>
      <section>
        {tools.map((tool) => (
          <p className="black-text" key={tool}>{tool}</p>
        ))}
      </section>
    </article>
  );
}

export default Single;
