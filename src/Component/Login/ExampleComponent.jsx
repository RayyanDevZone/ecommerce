// ExampleComponent.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../Slices/authSlice';

const ExampleComponent = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogin = () => {
    // Simulated login logic
    dispatch(setUser({ name: 'John Doe' }));
  };

  const handleLogout = () => {
    // Simulated logout logic
    dispatch(clearUser());
  };

  return (
    <div>
      {user ? (
        <>
          <p>Welcome, {user.name}!</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default ExampleComponent;
