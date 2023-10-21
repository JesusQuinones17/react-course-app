function Input({ labelText, idInput, placeholderText, inputValue, typeInput, onChange }) {
    return (
        <>
            <label 
                htmlFor={idInput} 
                placeholder={placeholderText}
            >
            {labelText}
            </label>
            <input 
                type={typeInput}
                value={inputValue}
                id={idInput}
                name={idInput}
                onChange={onChange}
                autoComplete="true"
            />
        </>
    );
}

export default Input;