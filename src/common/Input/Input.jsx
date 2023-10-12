function Input({ labelText, idInput, placeholderText, onChange }) {
    return (
        <>
            <label 
                for={idInput} 
                placeholder={placeholderText}
            >
            {labelText}
            </label>
            <input id={idInput} onChange={onChange}/>
        </>
    );
}

export default Input;