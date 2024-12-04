import styles from '../styles/button.module.css';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ text, onClick, className }: ButtonProps) {
  return (
    <button className={`${className ? className : styles.button}`} onClick={onClick}>
      {text}
    </button>
  );
}
