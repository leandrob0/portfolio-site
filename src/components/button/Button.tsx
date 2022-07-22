import "./button.css"

interface buttonProps {
  text: string;
  to: string;
}

function Button({ text, to }: buttonProps) {
  return (
    <a className="button-cards" href={to} rel="noopener" target="_blank">
        {text}
    </a>
  );
}

export default Button;
