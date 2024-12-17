"use client";

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {loginSuccess} from '../../store/slices/authSlice';


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch(`https://api.example.com/auth/login`, {
                method: "POST",
                body: JSON.stringify({ email, password }),
            });
            const result = await response.json();

            dispatch(loginSuccess({ user: result.user, token: result.token }));
            localStorage.setItem('token', result.token);
        } catch (error) {
            console.log('Login failed');
        }
    };

    

    return (
        <form onSubmit={handleLogin}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginPage;


/* 
import { useDispatch } from 'react-redux';
import { logout } from '../slices/authSlice';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(logout());
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
 */