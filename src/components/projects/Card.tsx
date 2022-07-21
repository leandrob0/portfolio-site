import { useState } from "react";

interface cardProps {
  src: string;
}

function Card({ src }: cardProps) {
  const [showText, setShowText] = useState(false);

  return (
    <article
      className="card"
      onMouseEnter={() => setShowText(true)}
      onMouseLeave={() => setShowText(false)}
    >
      <img className="image" src={src} alt="Project" />
      {showText && 
        <div className="text-hover"></div>
      }
    </article>
  );
}

export default Card;
