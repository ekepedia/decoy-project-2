import React from "react";

import Feature  from "../components/cards/Feature";
import Event    from "../components/cards/Event";
import SubNav   from "../components/SubNav";

import BreadCrumbs  from "../components/BreadCrumbs";

export default class Category extends React.Component {

    constructor(props) {
        super(props);

        const crumbs = [
            {
                label: "Home",
                link: "/"
            },
            {
                label: "American Football",
                link: "/categories"
            }
        ];

        this.state = {
            crumbs
        }
    }

    render() {

        const {crumbs} = this.state;

        return (
            <div className="page">
                <BreadCrumbs crumbs={crumbs}/>
                <section style={{marginBottom:"40px"}}>
                    <h1>American Football</h1>
                    <Feature/>
                    <Feature/>
                    <Feature/>
                </section>
                <section style={{marginBottom:"40px"}}>
                    <h1>Events</h1>
                    <SubNav/>
                </section>
                <section style={{marginBottom:"40px"}}>
                    <Event/>
                    <Event/>
                    <Event/>
                    <Event/>
                    <Event/>
                    <Event/>
                    <Event/>
                    <Event/>
                    <Event/>
                    <Event/>
                    <Event/>
                </section>
            </div>
        );
    }
}
