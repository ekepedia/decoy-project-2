import React     from "react";
import text      from "../styles/text.css";
import { Link }  from 'react-router-dom';
import styles    from "../styles/footer.css";

export default class Footer extends React.Component {

    constructor(){
        super();
    }


    render() {

        const backgroundImage = {
            backgroundImage: `url(${this.props.backgroundImage})`
        };

        return (
            <section className={styles.footer + " footer"}>
                <div className="row">
                    <div className={styles.link + " col col-xs-12"}>
                        <Link to="/"><p className={text.footerText}>Home</p></Link>
                        <Link to="/categories"><p className={text.footerText}>Category</p></Link>
                        <Link to="/event"><p className={text.footerText}>Event</p></Link>
                    </div>
                </div>
            </section>
        );
    }
}

