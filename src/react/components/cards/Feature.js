import React         from "react";
import LiveIndicator from "../LiveIndicator";
import {Link} from "react-router-dom";

export default class Feature extends React.Component {

    constructor(props) {
        super(props);

        const actors    = this.props.actors || `Raiders vs. Steelers`;
        const image_url = this.props.image_url || "https://amp.businessinsider.com/images/5b281c241ae66223008b531c-750-375.jpg";

        const odds = Math.round(Math.random()*100)/100 + 1;

        this.state = {
            category: "American Football",
            actors,
            odds: {
                name: "USA",
                odds: String(odds).substring(0,4),
                percentage: `${Math.round(1/odds*100)}%`
            },
            volume: Math.round(Math.random()*100000),
            image_url,
        };
    }

    render() {

        const {category, actors, odds: { name, odds, percentage }, volume, image_url} = this.state;

        const background = {
            backgroundImage: `url(${image_url}`
        };

        return (
            <Link to="/event">
                <div className="card-feature">
                    <div className="card-component-body">
                        <div className="card-component-header">
                            <div className="card-component-category">
                                {category}
                            </div>
                            <div className="card-component-time">
                                <LiveIndicator/>
                            </div>
                        </div>
                        <div className="card-component-actors">
                            <p>{actors}</p>
                        </div>
                        <div className="card-component-odds">
                            <p>{name} <span className="color-grey-odds">{odds}</span></p>
                            <h3>{percentage}</h3>
                        </div>
                        <div style={background} className="card-component-background"/>
                    </div>
                    <div className="card-component-footer">
                        <p>${volume} Matched</p>
                    </div>
                </div>
            </Link>
        );
    }
}

