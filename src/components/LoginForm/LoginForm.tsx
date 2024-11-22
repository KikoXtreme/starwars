import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/loginForm.css';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setIsDisabled(!(username && password));
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
        <div id="loginForm">
            <h1>Login Form</h1>

            <div className='login'>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={handleUsernameInput}
                />
                <input
                    type="text"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordInput}
                />
                <button
                    disabled={isDisabled}
                    onClick={Login}>
                    Login
                </button>
            </div>

        </div>
    )
}

export default LoginForm;