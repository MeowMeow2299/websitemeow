import React from 'react';
import './Auth.css';

const SignUp = () => {
  return (
    <div className="auth-wrapper signup-bg">
      <div className="auth-card">
        <h2 className="auth-title">SIGN UP</h2>
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <label className="auth-label">Name</label>
          <input className="auth-input" type="text" placeholder="Your Name" required />

          <label className="auth-label">Email</label>
          <input className="auth-input" type="email" placeholder="you@example.com" required />

          <label className="auth-label">Password</label>
          <input className="auth-input" type="password" placeholder="Create a password" required />

          <button className="auth-button" type="submit">Create Account</button>
        </form>
        <p className="auth-subtext">Already have an account? <a className="auth-link" href="/login">Sign in</a></p>
      </div>
    </div>
  );
};

export default SignUp;

