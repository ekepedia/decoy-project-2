import React      from "react";

export default class TextBoxInput extends React.Component {

    constructor(props){
        super(props);
        this.state = {value: props.value};
    }

    componentWillReceiveProps(props) {
        this.setState({value: props.value});
    }

    render() {

        const style = {
            backgroundColor: "#f0f0f0",
            marginBottom: this.props.marginBottom,
            marginTop: this.props.marginTop,
            border: "none",
            paddingLeft: "15px",
            marginRight: "15px",
        };

        const link = {
            textDecoration: "underline"
        };

        const label = this.props.placeholder ? this.props.placeholder[0].toUpperCase()+this.props.placeholder.substr(1) : "";

        return (
            <div>
                <input id={this.props.name} type="checkbox" value={this.state.value} checked={this.state.value} onChange={this.props.handleChange} name={this.props.name} style={style} placeholder={this.props.placeholder}/>
                <label for={this.props.name}>{label} <a style={link} href={this.props.link} target="_blank">{this.props.link_text}</a></label>
            </div>
        );
    }
}

