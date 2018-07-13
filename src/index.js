import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import calculateWinner from './calculate-winner.js';
import GamePlayArea from './components/game-play-area';
import GameTitle from './components/game-title.js'

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            xIsNext: true,
            stepNumber: 0,
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1].squares;
        const squares = current.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({history: history.concat([{squares: squares}]),
                       xIsNext: !this.state.xIsNext,
                       stepNumber: history.length});
    }

    jumpTo(step) {
        this.setState({stepNumber: step,
                       xIsNext: (step % 2 === 0)});
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        return (
            <div className="game">
                <GameTitle winner={winner} xIsNext={this.state.xIsNext}/>
                <GamePlayArea history={history}
                              handleClick={(i) => this.handleClick(i)}
                              squares={current.squares}
                              jumpTo={(i) => this.jumpTo(i)}
                />
            </div>);
    }
}

// ========================================

ReactDOM.render(
<Game />,
    document.getElementById('root')
);
