import RegisterForm from 'components/Auth/RegisterForm/RegisterForm';
import { showErrMsg, showSuccessMsg } from 'components/Global/Alert/Alert';
import Loader from 'components/Global/Loader/Loader';
import Meta from 'components/Global/Meta/Meta';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootStore } from 'utils/Typescript';
import '../../styles/auth.scss';

const Register = () => {
  const userRegister = useSelector((state: RootStore) => state.userRegister);
  const { loading, info, error } = userRegister;
  return (
    <>
      <Meta title="Digital Tick | Register" />

      <div className="auth_page">
        <div className="auth_box">
          <h3 className="text-uppercase text-center mb-4">Register</h3>
          {error && (
            <div className="error-box">
              {error?.errors?.map((err) => showErrMsg(err))}
            </div>
          )}
          {loading && <Loader />}
          {info && showSuccessMsg(info.msg)}
          <RegisterForm />

          <p className="mt-2">
            Already have an account?&nbsp;
            <Link to="/login" style={{ color: 'crimson' }}>
              Login Now
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
