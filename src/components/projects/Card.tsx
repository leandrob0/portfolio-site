import Button from "../button/Button";

interface cardProps {
  src: string;
  title: string;
  description: string;
  to: {
    git: string;
    deploy: string;
  }
}

function Card({ src, title, description, to }: cardProps) {
  return (
    <article className="card">
      <img className="image" src={src} alt="Project" />
      <div className="text-hover">
        <p>{title}</p>
        <p className="description">{description}</p>
        <section>
          <Button text="Know more!" to={to.git} />
          <Button text="Live page" to={to.deploy} />
        </section>
      </div>
    </article>
  );
}

export default Card;
