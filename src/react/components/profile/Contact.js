import React      from "react";
import Seperator from "../../components/Seperator";
import Input from "../../components/Input";
import TextBox from "../../components/TextBox";
import Hero from "../../components/Hero";
import text from "../../styles/text.css";
import * as EmailActions from "../../actions/EmailActions";
import toastr from "toastr";
import { Link }         from 'react-router-dom';


export default class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.sendEmail    = this.sendEmail.bind(this);

        this.state = {
            mls_id:     props.mls_id,
            agent_name: props.name
        };
    }


    componentWillReceiveProps(props) {
        this.setState({
            mls_id:     props.mls_id,
            agent_name: props.name
        });
    }

    handleChange(e) {
        let state = this.state;
        state[e.target.name] = e.target.value;

        this.setState({
            state
        })
    }

    sendEmail() {
        let email = this.state;

        email.email_subject = "Agent Email";
        email.mls_id        = this.state.mls_id;
        email.agent_name    = this.state.agent_name;

        delete email["state"];
        EmailActions.newEmail(email);

        this.setState({
            name: "", email: "", subject: "", message: ""
        })
    }

    render() {

        const submitBtn = {
            height: "40.5px",
            backgroundColor: "#02adc6",
            width: "100%",
            fontSize: "15pt",
            borderRadius: "0",
            border: "none",
            textTransform: "uppercase",
            color: "white",
            letterSpacing: "1px"
        };

        const text = {
            textAlign: "center",
            marginBottom: "45px",
            maxWidth: "780px",
            marginRight: "auto",
            marginLeft: "auto",
        };


        return (
            <div style={{marginTop: 40}}>
                <Input value={this.state.name} handleChange={this.handleChange} name="name" marginBottom="12.5px" placeholder="name"/>
                <Input value={this.state.email} handleChange={this.handleChange} name="email" marginBottom="12.5px" placeholder="email"/>
                <Input value={this.state.subject} handleChange={this.handleChange} name="subject" marginBottom="12.5px" placeholder="subject"/>
                <TextBox value={this.state.message} handleChange={this.handleChange} name="message" placeholder="message"/>
                <div style={{textAlign: "center", marginTop: "25px"}}>
                    <button style={submitBtn} className="btn" onClick={this.sendEmail}>Contact</button>
                </div>
                <Link to="/resources/loans">
                    <div style={{textAlign: "center", marginTop: "15px"}}>
                        <button style={submitBtn} className="btn">Find a Loan</button>
                    </div>
                </Link>
            </div>
        );
    }
}

