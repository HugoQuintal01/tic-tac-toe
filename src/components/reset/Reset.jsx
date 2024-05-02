import React from 'react';

const ResetButton = ({ onClick }) => {
  return (
    <div className='button'>
      <button className="reset-button" onClick={onClick}>Reset Game</button>
    </div>
    
  );
};

export default ResetButton;
