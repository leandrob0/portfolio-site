import Button from "../button/Button";

interface cardProps {
  src: string;
  title: string;
  description: string;
}

function Card({ src, title, description }: cardProps) {
  return (
    <article className="card">
      <img className="image" src={src} alt="Project" />
      <div className="text-hover">
        <p>{title}</p>
        <p className="description">{description}</p>
        <section>
          <Button text="Know more!" />
          <Button text="Live page" />
        </section>
      </div>
    </article>
  );
}

export default Card;
