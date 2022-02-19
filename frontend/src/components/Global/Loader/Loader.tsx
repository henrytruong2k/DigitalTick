import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Loader.scss';

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader__container">
        <Spinner
          animation="border"
          role="status"
          style={{
            width: '100px',
            height: '100px',
            display: 'block',
          }}
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </div>
  );
};

export default Loader;
