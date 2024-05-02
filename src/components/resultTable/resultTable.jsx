import React from 'react';

const ResultTable = ({ results }) => {
  return (
    <div className="result-table">
      <h2>Game Results</h2>
      <table>
        <thead>
          <tr>
            <th>Game</th>
            <th>Winner</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index}>
              <td>Game {index + 1}</td>
              <td>{result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
