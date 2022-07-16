import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface props {
    icon: IconDefinition;
}

function Single({icon}: props) {
  return (
    <article className="col">
        <FontAwesomeIcon icon={icon} className="icon-color"/>
    </article>
  )
}

export default Single