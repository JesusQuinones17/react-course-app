import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const apiURL = 'http://localhost:4000/login'
    
    const handleChange = (event) => {
        const { name, value } = event.target; 
        setFormData({ ...formData, [name]: value });
    };

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    };

    // function to login user
    const loginUser = async () => {
        try {
            const response = await fetch(apiURL, requestOptions);
            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            console.log('User login success', JSON.stringify(data));
            // save user token in localStorage
            localStorage.setItem('userToken', data);
            // send to Courses
            navigate('/');
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    const handleSubmitLogin = () => {
        handleSubmit;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        loginUser();
        alert(`Login user ${formData.email}, ${formData.password}`)
        
    };

    return (
        <div className="login-container">
                <form onSubmit={handleSubmit}>
                    <Input 
                        idInput='email'
                        labelText='Email'
                        placeholderText='Enter your email'
                        typeInput='email'
                        inputValue={formData.email}
                        onChange={handleChange}
                    />
                    <Input 
                        idInput='password'
                        labelText='Password'
                        placeholderText='Enter your password'
                        typeInput='password'
                        inputValue={formData.password}
                        onChange={handleChange}
                    />
                    <div className="login-submit-button">
                        <Button 
                            typeButton='submit'
                            buttonText='Login'
                            onClick={handleSubmitLogin}
                        />
                    </div>
                </form>
        </div>
    );
}

export default Login