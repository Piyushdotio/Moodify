import React from "react";
import "../style/login.scss";
import FormGroup from "../components/FormGroup";
import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";
import { useState } from 'react'

const Login = () => {
  const { loading, handleLogin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    try {
      await handleLogin({ email, username: email, password });
      navigate("/");
    } catch (err) {
      console.error("Login form submission error:", err);
      const errMsg = err.response?.data?.message || err.message || "Login failed. Please check your credentials.";
      setError(errMsg);
    }
  }

  return (
    <main className="login-page">
      <div className="auth-card">
        <div className="auth-card__header">
          <div className="auth-card__logo">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="auth-card__logo-icon">
              <path d="M9 18V5l12-2v13"/>
              <circle cx="6" cy="18" r="3"/>
              <circle cx="18" cy="16" r="3"/>
            </svg>
          </div>
          <h1 className="auth-card__title">Welcome Back</h1>
          <p className="auth-card__subtitle">Enter your credentials to access your expression player</p>
        </div>

        {error && (
          <div className="auth-card__error-banner" role="status">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="auth-card__error-icon">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-card__form">
          <FormGroup
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email or Username"
            placeholder="Enter your email or username"
            disabled={loading}
          />
          <FormGroup
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password" 
            placeholder="Enter your password"
            disabled={loading}
          />

          <button className="btn btn-primary btn--lg auth-card__submit" type="submit" disabled={loading}>
            {loading ? (
              <>
                <svg className="auth-card__spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25" fill="none"/>
                  <path d="M12 2C6.47715 2 2 6.47715 2 12C2 13.5786 2.36611 15.0719 3.01833 16.4024" stroke="currentColor" strokeLinecap="round"/>
                </svg>
                <span>Logging in...</span>
              </>
            ) : "Login"}
          </button>
        </form>

        <p className="auth-card__footer">
          Don't have an account? <Link to="/register" className="auth-card__link">Register here</Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
