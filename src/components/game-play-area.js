import React from "react";
import Board from './board.js';
import GameHistory from './game-history.js'

export default function GamePlayArea(props) {
    return (
        <div className="game-play-area">
            <Board
                squares={props.squares}
                onClick={props.handleClick}
            />
            <GameHistory
                history={props.history}
                jumpTo={props.jumpTo}
            />
        </div>);
}