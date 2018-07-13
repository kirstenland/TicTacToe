import React from 'react';

export default function Square(props){
    const colour = props.value === "X" ? "blue" : "red";
    return (<button className="square"
                    onClick = {props.onClick}>
            <div className="square-content">
                <p className={colour}>{props.value}</p>
            </div>
        </button>
    );
}