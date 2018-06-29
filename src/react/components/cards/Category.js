import React  from "react";
import {Link} from "react-router-dom";

export default class Feature extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            category: "American Football",
            volume: Math.round(Math.random()*100000),
            events: Math.round(Math.random()*200) + 10
        };
    }

    render() {

        const {category, volume, events} = this.state;

        const events_style = {
            fontSize: "36px"
        };

        return (
            <Link to="/categories">
                <div className="card-category">
                    <div className="card-component-body">
                        <div className="card-component-header">
                            <div className="card-component-category">
                                {category}
                            </div>
                        </div>
                        <div className="card-component-events">
                            <p><span style={events_style}>{events}</span>Events</p>
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

