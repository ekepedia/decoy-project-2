import React    from "react";
import styles   from '../styles/nav.css';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {

    constructor(){
        super();
    }

    render() {

        return (
            <nav className={[styles.navbar, "navbar"].join(' ')}>
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                        <ul class="nav navbar-nav">
                            <li><Link to='/'>Qume</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}