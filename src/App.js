import React, { useState } from 'react';
import './style.css'; // Import your CSS file here
import Board from './components/board/Board';
import Status from './components/status/Status';
import ResetButton from './components/reset/Reset';
import ResultTable from './components/resultTable/resultTable';
import Title from './components/title/Title';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [results, setResults] = useState([]); // State to store game results

  const handleClick = (index) => {
    const squares = [...board];
    if (calculateWinner(squares) || squares[index]) {
      return;
    }
    squares[index] = xIsNext ? 'X' : 'O';
    setBoard(squares);
    setXIsNext(!xIsNext);

    // If there's a winner or the board is full, update the game results
    const winner = calculateWinner(squares);
    if (winner || squares.every(square => square)) {
      setResults([...results, winner || 'Draw']);
    }
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  const winner = calculateWinner(board);

  return (
    <div className="app">
      <Title />
      <Board squares={board} onClick={handleClick} />
      <Status winner={winner} xIsNext={xIsNext} />
      <ResetButton onClick={handleReset} />
      <ResultTable results={results} />
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default App;
