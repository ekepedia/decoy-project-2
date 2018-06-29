import React  from "react";
import Main   from "./Main";
import Nav    from "./Nav";
import Footer from "./Footer";
import SideBar from "./SideBar";

export default class Layout extends React.Component {

    constructor(){
        super();
    }

    render() {
        return (
            <div id="main-body">
                <Nav/>
                <Main/>
                <SideBar/>
                <Footer/>
            </div>
        );
    }
}

