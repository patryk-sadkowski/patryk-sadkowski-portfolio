import "./Button.scss";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ children, onClick }: Props) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};
