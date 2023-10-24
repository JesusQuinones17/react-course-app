function Button({ buttonText, typeButton, onClick }) {
  return <button type={typeButton}onClick={onClick}>{buttonText}</button>;
}

export default Button;
