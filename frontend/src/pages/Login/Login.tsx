import LoginForm from 'components/Auth/LoginForm/LoginForm';
import { showErrMsg } from 'components/Global/Alert/Alert';
import Loader from 'components/Global/Loader/Loader';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { RootStore } from 'utils/Typescript';
import '../../styles/auth.scss';

const Login = () => {
  const userLogin = useSelector((state: RootStore) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate(-1); //quay về trang trước đó
    }
  }, [navigate, userInfo]);

  return (
    <div className="auth_page">
      <div className="auth_box">
        <h3 className="text-uppercase text-center mb-4">Login</h3>
        {error && showErrMsg(error)}
        {loading && <Loader />}
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
