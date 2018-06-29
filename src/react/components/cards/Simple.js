import React from "react";

export default class Simple extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            marketName: "Winner",
            actors: [
                {
                    name: "Portugal",
                    percentage: "95",
                    max: 203
                },
                {
                    name: "Draw",
                    percentage: "23",
                    max: 395
                },
                {
                    name: "Costa Rica",
                    percentage: "12",
                    max: 1203
                }
            ],
            volume: 34,
            selectedActor: "Portugal"
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e, name) {
        this.setState({
            selectedActor: name
        });
    }

    render() {

        const {marketName, actors, volume, selectedActor} = this.state;

        // avoid divide by zero
        const length = actors.length < 2 ? 2 : actors.length;

        const height = 40/(length-1);

        // TODO Resolve
        const handleClick = this.handleClick;

        return (
            <div className="card-simple">
                <div className="card-component-header">
                    <p style={{float: "left"}}>{marketName}</p>
                    <p style={{float: "right"}}>${volume} Matched</p>
                </div>
                <div className="card-component-body">
                    {
                        actors.map(function (actor) {

                            const selected = actor.name === selectedActor;

                            return (
                                <Actor
                                    handleClick={handleClick}
                                    selected={selected}
                                    height={height}
                                    key={actor.name}
                                    name={actor.name}
                                    max={actor.max}
                                    percentage={actor.percentage}
                                />
                            );

                        })
                    }
                </div>

            </div>
        );
    }
}


class Actor extends React.Component {
    render() {

        const {name, percentage, selected, max} = this.props;

        const height = selected ? 60 : this.props.height;

        const nameStyle = {
            float: "left",
            fontSize: "14px"
        };

        const percentageStyle = {
            float: "right",
            fontSize: "18px"
        };


        return (
            <div onClick={(e) => this.props.handleClick(e, name)} style={{height: `${height}%`}} className="card-component-actor">
                <div style={nameStyle}>{name}</div>
                <div style={percentageStyle}>{percentage}%</div>
                {
                    selected &&
                    <div className="card-component-cta" >
                        <button>Bet for {name}</button>
                        <p>Max Bet: ${max}</p>
                    </div>
                }
            </div>
        );
    }
}

