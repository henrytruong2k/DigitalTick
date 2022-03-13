import userAPI from 'api/userAPI';
import { showErrMsg, showSuccessMsg } from 'components/Global/Alert/Alert';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Active = () => {
  const { slug } = useParams();
  const [err, setErr] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (slug) {
      userAPI
        .activeToken({ active_token: slug })
        .then((res: any) => setSuccess(res.msg))
        .catch((err) => setErr(err));
    }
  }, [slug]);

  return (
    <div>
      {err && showErrMsg(err)}
      {success && showSuccessMsg(success)}
      {success && <Link to="/login">Go to login</Link>}
    </div>
  );
};

export default Active;
