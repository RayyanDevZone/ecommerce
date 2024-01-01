import React, { useState, useEffect } from 'react';
import './ResetPassword.scss';
import { toast } from 'react-toastify';
const ResetPassword = () => {
  const [otp, setOtp] = useState('');
  const [counter, setCounter] = useState(60);
  const [isResendEnabled, setIsResendEnabled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter(prevCounter => prevCounter - 1);
    }, 1000);

    if (counter <= 0) {
      clearInterval(timer);
      setIsResendEnabled(true);
    }

    return () => clearInterval(timer);
  }, [counter]);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setOtp(value);
  };

  const handleResendClick = () => {
    setCounter(60);
    setIsResendEnabled(false);
    toast.success("OTP resent to the email!")
  };

  return (
    <div className="reset-password">
      <h2>Enter the OTP</h2>
      <input
        type="text"
        value={otp}
        onChange={handleInputChange}
        maxLength="6"
        placeholder='Enter the OTP'
      />
      <div className="counter">
        {counter > 0 ? `Resend OTP in ${counter}s` : ' '}
      </div>
      <button
        onClick={handleResendClick}
        disabled={!isResendEnabled}
      >
        Resend OTP
      </button>
    </div>
  );
};

export default ResetPassword;
