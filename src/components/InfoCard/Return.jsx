import React from 'react';
import { useNavigate } from 'react-router-dom';

import ReturnIcon from '../../styles/Images/return-icon.png';

function Return() {
  const navigate = useNavigate();

  const returnToPage = () => {
    navigate('/my-portfolio');
  };

  return (
    <div
      className="return-container"
    >
      <button
        onClick={returnToPage}
        className="return-btn"
      >
        <img alt="Return Button" className="return-icon" src={ReturnIcon} />
      </button>
      <h2
        className="return-txt">
        Return
      </h2>
    </div>

  );
}

export default Return;