import React from "react";

export default class GameScore extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="game-score">
                <div className="game-quarter">4th Quarter</div>
                <div className="game-time">04:04</div>
                <div className="game-numbers">
                    <div className="game-number">
                        <h1>34</h1>
                        <h3>Raiders</h3>
                    </div>
                    <div className="game-number">
                        <h1>28</h1>
                        <h3>Steelers</h3>
                    </div>
                </div>
            </div>
        );
    }
}
