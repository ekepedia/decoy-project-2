import React     from "react";

import text      from "../../styles/text.css";

import TestimonialModal from "../../components/TestimonialModal";

import DataStore from "../../stores/DataStore";

export default class Profile extends React.Component {

    constructor(props) {
        super(props);

        const {testimonials, mls_id} = props;

        this.state = {
            testimonials,
            mls_id
        };

        this.showTestimonialModal = this.showTestimonialModal.bind(this);
        this.hideTestimonialModal = this.hideTestimonialModal.bind(this);
    }

    showTestimonialModal() {
        this.setState({
            showTestimonialModal: true
        })
    }

    hideTestimonialModal() {
        DataStore.loadAgent(this.state.id);
        this.setState({
            showTestimonialModal: false
        })
    }

    componentWillReceiveProps(props) {
        const {testimonials, mls_id} = props;

        this.setState({
            testimonials,
            mls_id
        });
    }

    render() {

        const testimonialBtn = {
            height: "40.5px",
            backgroundColor: "#02adc6",
            maxWidth: "245px",
            width: "100%",
            fontSize: "12pt",
            borderRadius: "0",
            border: "none",
            textTransform: "uppercase",
            color: "white",
            letterSpacing: "1px",
            float: "right",
            marginTop: "10px"
        };

        const testimonialText = {
            marginBottom: 20
        };

        const testimonialName = {
            marginBottom: 0,
            fontFamily: "'Gothman Bold', sans-serif",
            textTransform: "uppercase"
        };

        return (
            <div>
                <div>
                    <h1 className={text.title} style={{float:"left", marginBottom: 40}}>Testimonials</h1>
                    <button style={testimonialBtn} onClick={this.showTestimonialModal}>Submit a testimonial</button>
                </div>
                <div style={{clear:"both"}}>
                    {this.state.testimonials ? this.state.testimonials.map(function (test) {
                        return <div>
                            <p style={testimonialName}>{test.name}</p>
                            <p style={testimonialText}>{test.text}</p>
                        </div>;
                    }) :
                        <p>
                            This agent does not have any testimonials.
                        </p>
                    }
                </div>
                <TestimonialModal mls_id={this.state.mls_id} show={this.state.showTestimonialModal} hideTestimonialModal={this.hideTestimonialModal}/>
            </div>
        );
    }
}

