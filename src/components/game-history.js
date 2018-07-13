import React from "react";

export default function GameHistory(props) {

    const moves = props.history.map((step, move) => {
        const desc = move ?
            'Go to move #' + move :
            'Go to game start';
        return (
            <li key={move}>
                <button className="history-button" onClick={() => props.jumpTo(move)}>{desc}</button>
            </li>
        );
    });

    return (<div className="game-history">
                <h2>HISTORY: click to time travel</h2>
                <ol>{moves}</ol>
            </div>);
}