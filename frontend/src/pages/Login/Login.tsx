import LoginForm from 'components/Auth/LoginForm/LoginForm';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/auth.scss';

const Login = () => {
  return (
    <div className="auth_page">
      <div className="auth_box">
        <h3 className="text-uppercase text-center mb-4">Login</h3>
        <LoginForm />

        <small className="row my-2 text-primary" style={{ cursor: 'pointer' }}>
          <span className="col-6">
            <Link to="/forgot_password">Forgot password?</Link>
          </span>
        </small>

        <p>
          You don't have an account?&nbsp;
          <Link to={`/register`}>Register Now</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
