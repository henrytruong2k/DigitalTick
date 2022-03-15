import ForgotForm from 'components/Auth/ForgotForm/ForgotForm';
import { showErrMsg, showSuccessMsg } from 'components/Global/Alert/Alert';
import Loader from 'components/Global/Loader/Loader';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootStore } from 'utils/Typescript';

const ForgotPassword = () => {
  const userForgot = useSelector((state: RootStore) => state.userForgot);
  const { loading, info, error } = userForgot;
  console.log({ loading, info, error });
  return (
    <div className="auth_page">
      <div className="auth_box">
        <h3 className="text-uppercase text-center mb-4">Forgot Password</h3>
        {loading && <Loader />}
        {info && showSuccessMsg(info.msg)}
        {error && showErrMsg(error)}
        <ForgotForm />
      </div>
    </div>
  );
};

export default ForgotPassword;
