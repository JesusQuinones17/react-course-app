function Input({ labelText, idInput, placeholderText, onChange }) {
    return (
        <>
            <label 
                htmlFor={idInput} 
                placeholder={placeholderText}
            >
            {labelText}
            </label>
            <input id={idInput} onChange={onChange}/>
        </>
    );
}

export default Input;