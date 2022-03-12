import './Alert.scss';

export const showErrMsg = (msg: any) => {
  return <div className="message-box message-box--error">{msg}</div>;
};

export const showSuccessMsg = (msg: any) => {
  return <div className="message-box message-box--success">{msg}</div>;
};
