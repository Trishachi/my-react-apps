import React from "react";
import "./tictactoe.css";

function Square(props) {
  const className = "square" + (props.highlight ? " highlight" : "");
  return (
    <button className={className} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    const winLine = this.props.winLine;
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        highlight={winLine && winLine.includes(i)}
      />
    );
  }

  render() {
    const boardSize = 3;
    let squares = [];
    for (let i = 0; i < boardSize; ++i) {
      let row = [];
      for (let j = 0; j < boardSize; ++j) {
        row.push(this.renderSquare(i * boardSize + j));
      }
      squares.push(
        <div key={i} className="board-row">
          {row}
        </div>
      );
    }
    return (
      <div>{squares}</div>
      // <div>
      //   <div className="board-row">
      //     {this.renderSquare(0)}
      //     {this.renderSquare(1)}
      //     {this.renderSquare(2)}
      //   </div>
      //   <div className="board-row">
      //     {this.renderSquare(3)}
      //     {this.renderSquare(4)}
      //     {this.renderSquare(5)}
      //   </div>
      //   <div className="board-row">
      //     {this.renderSquare(6)}
      //     {this.renderSquare(7)}
      //     {this.renderSquare(8)}
      //   </div>
      // </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0, //Indicated which state we are currently viewing
      xIsNext: true
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice(); //creates a new copy of squares array after every move
    if (calculateWinner(squares).winner || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([{ squares: squares, latestMove: i }]),
      stepNumber: history.length, //ensure we don't get stuck showing the same move after a new move has been made
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0 //sets xIsNext to true if the number we are changing stepNumber to is even
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winnerInfo = calculateWinner(current.squares);
    // console.log(winnerInfo);
    const winner = winnerInfo.winner;

    const moves = history.map((step, move) => {
      const latestMove = step.latestMove;
      const col = 1 + (latestMove % 3);
      const row = 1 + Math.floor(latestMove / 3);
      const desc = move
        ? "Go to move #" + move + " (" + col + "," + row + ")"
        : "Go to game start/Restart";
      return (
        <li key={move}>
          <button
            className={move === this.state.stepNumber ? "selected-move" : ""}
            onClick={() => this.jumpTo(move)}
          >
            {desc}
          </button>
        </li>
      );
    });

    let status;
    if (winner && winner !== "draw") {
      status = "Winner: " + winner;
    } else if (winner && winner === "draw") {
      status = "We have a " + winner;
    } else {
      status = "Next Player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        {/* <div className="game-options">
          <button>Start First</button>
          <button>Start Second</button>
          <button>Easy </button>
          <button>Hard</button>
        </div> */}
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
            winLine={winnerInfo.line}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol> {moves} </ol>
        </div>
      </div>
    );
  }
}

//Needs some explanation
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: lines[i] };
    } else if (!squares.includes(null)) {
      return { winner: "draw" };
    }
  }
  return { winner: null, line: null };
}

export default Game;
export { Square, Board };
