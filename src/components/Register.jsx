import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Auth.css';

const Register = () => {
  const [searchParams] = useSearchParams();
  const affiliateCode = useMemo(() => searchParams.get('affiliateCode') || '', [searchParams]);

  return (
    <div className="auth-wrapper register-bg">
      <div className="auth-card">
        <h2 className="auth-title">REGISTER</h2>
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <label className="auth-label">Username</label>
          <input className="auth-input" type="text" placeholder="Your username" required />

          <label className="auth-label">Email</label>
          <input className="auth-input" type="email" placeholder="you@example.com" required />

          <label className="auth-label">Password</label>
          <input className="auth-input" type="password" placeholder="Create a password" required />

          <label className="auth-label">Affiliate Code</label>
          <input className="auth-input" type="text" placeholder="Enter affiliate code" defaultValue={affiliateCode} />

          <button className="auth-button" type="submit">Create Account</button>
        </form>
        <p className="auth-subtext">Already have an account? <a className="auth-link" href="/login">Sign in</a></p>
      </div>
    </div>
  );
};

export default Register;

