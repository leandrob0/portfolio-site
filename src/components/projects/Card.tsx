interface cardProps {
  src: string;
}

function Card({ src }: cardProps) {
  return (
    <article className="card">
      <img className="image" src={src} alt="Project" />
      <div className="text-hover"></div>
    </article>
  );
}

export default Card;
