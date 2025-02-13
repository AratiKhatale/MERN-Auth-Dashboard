import React from 'react';
import { ClipLoader } from 'react-spinners';

const Loader = ({ loading }) => {
  return (
    <div className="loader-container">
      <ClipLoader color="#007bff" loading={loading} size={50} />
    </div>
  );
};

export default Loader;
