import React from 'react';
import './Auth.css';

const Login = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2 className="auth-title">LOGIN</h2>
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <label className="auth-label">Email</label>
          <input className="auth-input" type="email" placeholder="you@example.com" required />

          <label className="auth-label">Password</label>
          <input className="auth-input" type="password" placeholder="••••••••" required />

          <button className="auth-button" type="submit">Sign In</button>
        </form>
        <p className="auth-subtext">Don't have an account? <a className="auth-link" href="/signup">Create one</a></p>
      </div>
    </div>
  );
};

export default Login;

