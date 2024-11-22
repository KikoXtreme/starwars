import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/loginForm.css';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setIsDisabled(!(username.trim() && password.trim()));
    }, [username, password])

    const handleUsernameInput = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    }

    const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const Login = () => {
        navigate('/table');
    }

    return (
        <div className='login'>
            <h1>Login Form</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleUsernameInput}
            />
            {!username.trim() ? <p>Username Required</p> : <p><span>Username Accepted</span></p>}
            <input
                type="text"
                placeholder="Password"
                value={password}
                onChange={handlePasswordInput}
            />
            {!password.trim() ? <p>Password Required</p> : <p><span>Password Accepted</span></p>}
            <button
                title={isDisabled ? "Please enter Username & Password" : ''}
                disabled={isDisabled}
                onClick={Login}>
                Login
            </button>
        </div>
    )
}

export default LoginForm;