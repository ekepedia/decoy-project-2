import React from "react";
import Input from  './Input';
import TextBox from './TextBox';
import Seperator from "./Seperator";

import text from "../styles/text.css"

class TestimonialModal extends React.Component {

    constructor(props) {
        super(props);

        this.handleChange    = this.handleChange.bind(this);
        this.sendTestimonial = this.sendTestimonial.bind(this);

        this.state = {
            mls_id: this.props.mls_id,
        };
    }

    handleChange(e) {
        let state = this.state;
        state[e.target.name] = e.target.value;

        this.setState({
            state
        })
    }

    sendTestimonial () {
        TestimonialActions.newTestimonial(this.state, this.props.hideTestimonialModal);
    }

    render() {
        // Render nothing if the "show" prop is false
        if(!this.props.show) {
            return null;
        }

        const cancelBtn = {
            height: "40.5px",
            color: "#02adc6",
            backgroundColor: "white",
            width: "49%",
            marginRight: "1%",
            fontSize: "15pt",
            borderRadius: "0",
            border: "none",
            textTransform: "uppercase",
            letterSpacing: "1px",
            border: "solid"
        };

        const submitBtn = {
            height: "40.5px",
            backgroundColor: "#02adc6",
            width: "49%",
            marginLeft: "1%",
            fontSize: "15pt",
            borderRadius: "0",
            border: "none",
            textTransform: "uppercase",
            color: "white",
            letterSpacing: "1px"
        };

        // The gray background
        const backdropStyle = {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(39, 172, 202, 0.8)',
            padding: 50,
            paddingTop: "100px",
            zIndex: 9999
        };

        // The modal "window"
        const modalStyle = {
            backgroundColor: '#fff',
            borderRadius: 0,
            border:"solid 4px rgba(39, 172, 202, 1)",
            maxWidth: 582,
            minHeight: 500,
            margin: '0 auto',
            padding: 30
        };

        return (
            <div style={backdropStyle}>
                <div style={modalStyle}>
                    <h1 className={text.title} >Submit A Testimonial</h1>
                    <Seperator marginTop="20px" marginBottom="40px"/>

                    <Input   value={this.state.name}        handleChange={this.handleChange} name="name"        marginBottom="12.5px" placeholder="name"/>
                    <Input   value={this.state.email}       handleChange={this.handleChange} name="email"       marginBottom="12.5px" placeholder="email"/>
                    <TextBox value={this.state.testimonial} handleChange={this.handleChange} name="testimonial" marginBottom="12.5px" placeholder="testimonial"/>

                    <button onClick={this.props.hideTestimonialModal} style={cancelBtn}>Cancel</button>
                    <button onClick={this.sendTestimonial} style={submitBtn}>Submit</button>
                </div>
            </div>
        );
    }
}

export default TestimonialModal;