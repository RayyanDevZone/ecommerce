// components/Login.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../slices/authSlice';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleLogin = () => {
    // Validate username and password (e.g., make an API call)
    // If successful, dispatch setUser action to update auth state
    dispatch(setUser({ name: username }));
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
