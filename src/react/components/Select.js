import React      from "react";

export default class Select extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            options: props.options,
            value: props.value
        };
    }

    componentWillReceiveProps(props) {
        this.setState({
            options: props.options,
            value: props.value
        });
    }

    render() {

        const style = {
            height: "40.1px",
            backgroundColor: "#f0f0f0",
            width: "100%",
            textTransform: "uppercase",
            marginBottom: this.props.marginBottom,
            marginTop: this.props.marginTop,
            border: "none",
            paddingLeft: "15px",
            borderRadius: 0,
            WebkitAppearance: "none",
            MozAppearance: "none",
            backgroundPosition: "right 10px center",
            backgroundSize: "15px",
            backgroundRepeat: "no-repeat",
            backgroundImage: 'url("/img/down arrow grey.png")',
            paddingRight: "1.5em"
        };

        return (

            <select value={this.state.value || ""} name={this.props.name} onChange={this.props.handleChange} style={style}>
                <option disabled>{this.props.placeholder}</option>
                {this.state.options.map((option, i)=>{
                    return (<option key={i}>{option}</option>)
                })}
            </select>
        );
    }
}

