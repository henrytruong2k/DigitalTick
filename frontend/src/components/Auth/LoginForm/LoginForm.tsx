import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/actions/userAction';
import { FormSubmit, InputChange, IUserLogin } from 'utils/Typescript';

import './LoginForm.scss';

const LoginForm = () => {
  const initialState = { account: '', password: '' };
  const [userLogin, setUserLogin] = useState<IUserLogin>(initialState);
  const { account, password } = userLogin;

  const [typePass, setTypePass] = useState(false);

  const dispatch = useDispatch();

  const handleChangeInput = async (e: InputChange) => {
    e.preventDefault();
    const { name, value } = e.target;

    setUserLogin({ ...userLogin, [name]: value });
  };

  const handleSubmit = async (e: FormSubmit) => {
    e.preventDefault();
    dispatch(login(userLogin));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="account" className="form-label">
          Email
        </label>
        <input
          type="text"
          className="form-control"
          id="account"
          name="account"
          value={account}
          onChange={handleChangeInput}
        />
      </div>

      <div className="form-group">
        <label htmlFor="password" className="form-label">
          Password
        </label>

        <div className="pass">
          <input
            type={typePass ? 'text' : 'password'}
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={handleChangeInput}
          />

          <small
            style={{ cursor: 'pointer' }}
            onClick={() => setTypePass(!typePass)}
          >
            {typePass ? 'Hide' : 'Show'}
          </small>
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-dark w-100 mt-2"
        disabled={account && password ? false : true}
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
