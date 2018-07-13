import React from 'react';

export default function GameTitle(props) {
    const winner = props.winner;
    let status, colour;
    switch(winner) {
        case "D": status = "It is a draw!!!";
                  colour = "black";
            break;
        case "O":
        case "X": status = "Winner: " + winner + "!!!";
                  colour = winner === "X" ? "blue" : "red";
                  break;
        default: status = "Next player: " + (props.xIsNext ? "X" : "O");
                 colour = props.xIsNext ? "blue" : "red";
    }

    return (<div className="game-title">
        <div className="title">TIC TAC TOE</div>
        <div className={"status " + colour}>{status}</div>
    </div>);
}