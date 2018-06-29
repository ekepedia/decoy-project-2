import React from "react";
import {
    Switch,
    Route
} from 'react-router-dom'

import Home     from "../pages/Home"
import Category from "../pages/Category";
import Event    from "../pages/Event";

export default class Main extends React.Component {

    constructor(){
        super();
    }

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/categories' component={Category}/>
                    <Route exact path='/event' component={Event}/>
                </Switch>
            </main>
        );
    }
}

