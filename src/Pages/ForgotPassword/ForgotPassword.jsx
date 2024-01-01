import React, { useState } from 'react';
import './ForgotPassword.scss';
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
 const navigate=useNavigate()
  const handleResetPassword = () => {
    navigate('/reset-password')
    toast.success(`Reset password request for email: ${email}`);

  };
  const handlebackbutton = () => {
    navigate('/account');
  };
  return (
    <div className="forgot-password">
      <div className="forgot-password-container">
      <button id='back' onClick={handlebackbutton}>⬅</button>
        <h2 className="forgot-password-header">Forgot Password</h2>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <button onClick={handleResetPassword} className="reset-button">
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
