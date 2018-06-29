import React         from "react";
import {Link} from "react-router-dom";

export default class Event extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            actors: "Raiders vs. Steelers",
            odds: [
                {
                    name: "Raiders",
                    percentage: "40"
                },
                {
                    name: "Steelers",
                    percentage: "23"
                }
            ],
            volume: 34
        };
    }

    render() {

        const {actors, odds, volume} = this.state;

        return (
            <Link to="/event">
                <div className="card-event">
                    <div className="card-component-body">
                        <div className="card-component-header">
                            <div className="card-component-category">
                                {actors}
                            </div>
                        </div>
                        <div className="card-component-odds">
                            {
                                odds.map(function (odd) {
                                    return (
                                        <div key={odd.name} style={{clear: "both"}}>
                                            <div style={{float: "left"}}>{odd.name}</div>
                                            <div className="color-grey-odds" style={{float: "right"}}>{odd.percentage}%</div>
                                        </div>);
                                })
                            }
                        </div>
                    </div>
                    <div className="card-component-footer">
                        <p>${volume} Matched</p>
                    </div>
                </div>
            </Link>
        );
    }
}

