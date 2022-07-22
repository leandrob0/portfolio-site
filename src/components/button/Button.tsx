import "./button.css"

interface buttonProps {
  text: string;
}

function Button({ text }: buttonProps) {
  return (
    <a className="button-cards">
        {text}
    </a>
  );
}

export default Button;
