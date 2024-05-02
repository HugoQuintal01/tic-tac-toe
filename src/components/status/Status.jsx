import React from 'react';

const Status = ({ winner, xIsNext }) => {
  const renderStatus = () => {
    if (winner) {
      return `Winner: ${winner}`;
    } else {
      return `Next player: ${xIsNext ? 'X' : 'O'}`;
    }
  };

  return <div className="status"><h3>{renderStatus()}</h3></div>;
};

export default Status;
