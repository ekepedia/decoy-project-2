import React  from "react";
import {Link} from "react-router-dom";


import Feature  from "../components/cards/Feature";
import Event    from "../components/cards/Event";
import SubNav   from "../components/SubNav";

export default class BreadCrumbs extends React.Component {

    render() {

        const crumbs = this.props.crumbs || [{
                label: "Home",
                link: "/"
            }];

        return (
            <div className="bread-crumbs">
                { crumbs.map(function (crumb, i) {
                    const {label, link} = crumb;

                    const more = i + 1 < crumbs.length;

                    return (
                        <span>
                            <Link to={link}>
                                <span className="bread-text">
                                    {label}
                                </span>
                            </Link>
                            {more ? <span className="bread-next"> > </span> : ""}
                        </span>);
                })}
            </div>
        );
    }
}
