import { showErrMsg } from 'components/Global/Alert/Alert';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { forgotPassword } from 'redux/actions/userAction';
import { FormSubmit } from 'utils/Typescript';
// import { forgotPassword } from 'redux/actions/userAction';

const ForgotForm = () => {
  const [account, setAccount] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [captchaCode, setCaptchaCode] = useState('');
  const [err, setErr] = useState('');

  const handleCaptchaTxt = (code: string) => {
    setCaptchaCode(code);
  };

  const dispatch = useDispatch();

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault();
    if (captcha !== captchaCode) {
      setErr('Captcha does not match.');
    } else {
      dispatch(forgotPassword(account));
    }
  };
  return (
    <>
      {err && showErrMsg(err)}
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
            onChange={(e) => setAccount(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="account" className="form-label">
            Captcha Code
          </label>
          <input
            type="text"
            className="form-control"
            id="captcha"
            name="captcha"
            onChange={(e) => setCaptcha(e.target.value)}
          />
          <CaptchaCode onCaptchaTxt={handleCaptchaTxt} />
        </div>

        <button
          type="submit"
          className="btn btn-dark w-100 mt-2"
          disabled={account && captcha ? false : true}
        >
          Send
        </button>
      </form>
    </>
  );
};

export default ForgotForm;

interface IProps {
  onCaptchaTxt: Function;
}

const CaptchaCode: React.FC<IProps> = ({ onCaptchaTxt }) => {
  const getRandIndex = (maxLength: number) => {
    //to get random index
    return Math.floor(Math.random() * maxLength);
  };

  const getCaptcha = () => {
    let characters = Math.random().toString(36).substring(2, 8);

    const maxLength = characters.length;

    const index1 = getRandIndex(maxLength);
    const index2 = getRandIndex(maxLength);

    //to make 2 any character to uppercase
    characters = characters.replace(
      characters[index1],
      characters[index1].toUpperCase()
    );

    characters = characters.replace(
      characters[index2],
      characters[index2].toUpperCase()
    );

    return characters;
  };

  const [captchaTxt, setCaptchaTxt] = useState<string>(() => {
    return getCaptcha();
  });

  useEffect(() => {
    if (!onCaptchaTxt) return;
    onCaptchaTxt(captchaTxt);
  }, [captchaTxt, onCaptchaTxt]);

  const handleClick = () => {
    setCaptchaTxt(getCaptcha());
  };

  return (
    <div>
      {captchaTxt}
      <button onClick={handleClick}>Refresh</button>
    </div>
  );
};
