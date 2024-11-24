import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ILoginData, InputTypes } from './types';
import '../../styles/loginForm.css';

const initialLoginData: ILoginData = {
    username: '',
    password: '',
}

export const LoginForm = () => {
    const [loginData, setLoginData] = useState<ILoginData>(initialLoginData);
    const [isDisabled, setIsDisabled] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setIsDisabled(!(loginData.username.trim() && loginData.password.trim()));
    }, [loginData.username, loginData.password])

    const handleInputChange = (value: string, name: InputTypes) => {
        setLoginData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleLoginClick = () => {
        navigate('/table');
    }

    return (
        <div className='login'>
            <h1>Login Form</h1>
            <img src="assets/starwars.png" alt="Star Wars" />
            <input
                type="text"
                className={loginData.username.trim() ? 'valid-input' : 'invalid-input'}
                placeholder="Username"
                value={loginData.username}
                onChange={(input) => handleInputChange(input.target.value, 'username')}
            />
            {!loginData.username.trim() ? <p>Required</p> : <p><span>Accepted</span></p>}
            <input
                type="password"
                className={loginData.password.trim() ? 'valid-input' : 'invalid-input'}
                placeholder="Password" 
                value={loginData.password}
                onChange={(input) => handleInputChange(input.target.value, 'password')}
            />
            {!loginData.password.trim() ? <p>Required</p> : <p><span>Accepted</span></p>}
            <button
                title={isDisabled ? "Please enter Username & Password" : ''}
                disabled={isDisabled}
                onClick={handleLoginClick}>
                Login
            </button>
        </div>
    )
}