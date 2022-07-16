import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface props {
    icon: IconDefinition;
    title: string;
    tools: Array<string>;
}

function Single({icon, title, tools}: props) {
  return (
    <article className="col">
        <FontAwesomeIcon icon={icon} className="icon-color"/>
        <h5 className="black-text">{title}</h5>
    </article>
  )
}

export default Single