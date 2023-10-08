function Button({ buttonText, onClick }) {
  const handleClick = () => {
    alert(`${buttonText} button clicked`);
  };
  return <button onClick={handleClick}>{buttonText}</button>;
}

export default Button;
