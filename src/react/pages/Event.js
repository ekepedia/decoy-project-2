import React from "react";

import Simple  from "../components/cards/Simple";
import SubNav  from "../components/SubNav";
import BreadCrumbs  from "../components/BreadCrumbs";

import LiveIndicator  from "../components/LiveIndicator";
import DepthChart  from "../components/DepthChart";
import GameScore  from "../components/GameScore";
import SpreadMarket from "../components/SpreadMarket";
import OddsMarket from "../components/OddsMarket";


export default class Event extends React.Component {

    constructor(props) {
        super(props);

        const navOptions = [
            {
                name: "Popular",
                filter: "popular"
            },
            {
                name: "Point Spreads",
                filter: "pointspread"
            },
            {
                name: "Corner Kicks",
                filter: "corenerkicks"
            },
            {
                name: "Exact Score",
                filter: "exactscore"
            },
            {
                name: "Goals",
                filter: "goals"
            },
            {
                name: "Half Time",
                filter: "halftime"
            },
            {
                name: "Handicap",
                filter: "handicap"
            },
        ];

        const crumbs = [
            {
                label: "Home",
                link: "/"
            },
            {
                label: "American Football",
                link: "/categories"
            },
            {
                label: "Raiders vs. Steelers",
                link: "/event"
            },
        ];

        this.state = {
            navOptions,
            crumbs
        };
    }

    render() {

        const {navOptions, crumbs} = this.state;

        return (
            <div className="page event-page">
                <BreadCrumbs crumbs={crumbs}/>
                <section style={{marginBottom:"40px"}}>
                    <h1>Raiders vs. Steelers</h1>
                </section>
                <section style={{marginBottom:"20px"}}>
                    <h2>Spread Market</h2>
                </section>
                <section style={{marginBottom:"80px"}}>
                    <div className="market-container">
                        <SpreadMarket/>
                    </div>
                </section>
                <section style={{marginBottom:"20px"}}>
                    <h2>Match Odds Market</h2>
                </section>
                <section>
                    <div className="market-container">
                        <OddsMarket/>
                    </div>
                </section>
            </div>
        );
    }
}
