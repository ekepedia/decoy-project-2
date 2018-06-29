import React from "react";
import toastr from "toastr";

import DepthChart   from "./DepthChart";
import OptionButton from "./OptionButton";

export default class SpreadMarket extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            input: null,
            header: null
        };

        this.changeToInput   = this.changeToInput.bind(this);
        this.changeToButtons = this.changeToButtons.bind(this);
    }

    changeToInput(e, header, number) {
        this.setState({
            input: true,
            header,
            number
        })
    }

    changeToButtons() {
        this.setState({
            input: null,
            header: null,
            number: null
        })
    }

    render() {

        const {input, header, number} = this.state;

        return (
            <div className="card-spread-market">
                <div className="header">
                    <div className="chart-title">
                        Depth Chart
                    </div>
                    <div className="market-title">
                        Market
                    </div>
                </div>
                <div className="depth-chart-container">
                    <DepthChart/>
                </div>
                <div className="markets-container">
                    <Market input={input} header={header} number={number} changeToInput={this.changeToInput} changeToButtons={this.changeToButtons}/>
                </div>
            </div>
        );
    }
}

class Market extends React.Component {
    render() {

        const {changeToInput, changeToButtons, header, number} = this.props;

        return (
            <div className="spread-market">
                <div className="market-title">
                    Raiders Win By: {header}
                </div>
                <div className="spread-markets">
                    { this.props.input ? <Input header={header} number={number} changeToButtons={changeToButtons}/> : <Buttons changeToInput={changeToInput}/> }
                </div>
            </div>
        );
    }
}

class Buttons extends React.Component {

    render() {

        const {changeToInput} = this.props;

        return (
            <div>
                <OptionButton changeToInput={changeToInput} header="Over" color="#3E3A38" backgroundColor="#D0ECDD" number="22.5" footer="$403"/>
                <OptionButton changeToInput={changeToInput} header="Over" color="#FCFCFC" backgroundColor="#3FCC80" number="23.5" footer="$403"/>
                <OptionButton changeToInput={changeToInput} header="Under" color="#FCFCFC" backgroundColor="#FB8E49" number="24.5" footer="$403"/>
                <OptionButton changeToInput={changeToInput} header="Under" color="#3E3A38" backgroundColor="#FFE6D7" number="25.5" footer="$403"/>
            </div>
        );
    }
}

class Input extends React.Component {

    constructor(props) {
        super(props);

        this.updateReturn = this.updateReturn.bind(this);

        this.state = {
            wager: ""
        }
    }

    updateReturn (wager) {
        this.setState({
            wager: parseFloat(wager)*2
        });
    }

    render() {

        const {changeToButtons, number} = this.props;
        const {wager} = this.state;

        const backgroundColor = this.props.header === "Over" ? "#3FCC80" : "#FB8E49";

        return (
            <div className="wager-container">
                <SpreadInput value={number || ""}/>
                <WagerInput value="" updateReturn={this.updateReturn}/>
                <Return value={wager || ""}/>
                <button style={{backgroundColor}} disabled={!wager || wager.length === 0} onClick={(e) => {toastr.success("Wager Placed");changeToButtons(e)}} className="wager-done">Bet Now</button>
            </div>
        );
    }
}

class WagerInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (e) {

        const wager = e.target.value;

        const re = /^[0-9\b]+$/;

        if (wager === '' || (re.test(wager)) ) {
            this.setState({
                value: wager
            });
            this.props.updateReturn(wager);

        }
    }

    render() {

        const {value} = this.state;
        return (
            <div className="wager-input-container">
                <div className="input-header">
                    Wager
                </div>
                <input value={value} onChange={this.handleChange} placeholder="Enter Wager"/>
            </div>
        );
    }
}

class SpreadInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (e) {

        this.setState({
            value: e.target.value
        })
    }

    render() {

        const {value} = this.state;
        return (
            <div className="wager-input-container">
                <div className="input-header">
                    Spread
                </div>
                <input value={value} onChange={this.handleChange} placeholder="Enter Spread"/>
            </div>
        );
    }
}

class Return extends React.Component {

    render() {

        const {value} = this.props;

        return (
            <div className="wager-input-container">
                <div className="input-header">
                    Payout
                </div>
                <input value={value} placeholder="$--" disabled={true}/>
            </div>
        );
    }
}