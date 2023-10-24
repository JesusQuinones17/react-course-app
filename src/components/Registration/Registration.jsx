import { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";

import './Registration.css';

const Registration = () => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const apiURL = 'http://localhost:4000/register'

    // function to manage all form inputs object
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
    
    const requestOptions = {
        method: 'POST',
        headers: {
            'Conten-Type': 'application:json',
        },
        body: JSON.stringify(formData),
    };

    // function to manage register user with promise of fetch
    const registerUser = async () => {
        try {
          const response = await fetch(apiURL, requestOptions);
          if (!response.ok) {
            throw new Error('Registration failed');
          }
          const data = await response.json();
          console.log('User registered successfully:', data);
        } catch (error) {
          console.error('Registration failed:', error);
        }
      };

    const handleSubmitRegistration = () => {
        handleSubmit;
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        registerUser();
        alert(`form submited ${formData.name}, ${formData.email}, ${formData.password}`);
    };


    return (
        <div className="container">
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
                <Input
                    idInput='name'
                    labelText='Name:'
                    placeholderText='Enter name'
                    typeInput='text'
                    inputValue={formData.name}
                    onChange={handleChange}
                />
                <Input
                    idInput='email'
                    labelText='Email:'
                    placeholderText='Enter email'
                    typeInput='email'
                    inputValue={formData.email}
                    onChange={handleChange}
                /> 
                <Input 
                    idInput='password'
                    labelText='Password:'
                    placeholderText='Enter password'
                    typeInput='password'
                    inputValue={formData.password}
                    onChange={handleChange}
                />
                <div className='registration-submit-button'>
                    <Button 
                        typeButton='submit'
                        buttonText='Registration' 
                        onClick={handleSubmitRegistration}/>
                </div>
            </form>
            <div className="registration-messsage">
                <p>if you have an account you can <Link to='/login'>Login</Link> </p>
            </div>
        </div>

    );
}

export default Registration;