import React from "react";
import toastr from "toastr";

import OddChart   from "./OddChart";
import OptionButton from "./OptionButton";

export default class SpreadMarket extends React.Component {

    render() {

        return (
            <div className="card-spread-market">
                <div className="header">
                    <div className="chart-title">
                        Odds History
                    </div>
                    <div className="market-title">
                        Market
                    </div>
                </div>
                <div className="depth-chart-container">
                    <OddChart/>
                </div>
                <div className="markets-container">
                    <Market actor="Raiders"/>
                    <Market actor="Steelers"/>
                </div>
            </div>
        );
    }
}

class Market extends React.Component {

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
        const {header, number, input} = this.state;

        return (
            <div className="spread-market">
                <div className="market-title">
                    {this.props.actor} Win: {header}
                </div>
                <div className="spread-markets">
                    { input ? <Input header={header} number={number} changeToButtons={this.changeToButtons}/> : <Buttons changeToInput={this.changeToInput}/> }
                </div>
            </div>
        );
    }
}

class Buttons extends React.Component {

    randomOdds(i) {
        const odds = Math.random()/4 + i;

        return String(odds).substring(0,4);
    }

    randomVolume() {
        return "$" + Math.round(Math.random() * 10000);
    }

    render() {

        const {changeToInput} = this.props;

        return (
            <div>
                <OptionButton changeToInput={changeToInput} header="For" color="#3E3A38" backgroundColor="#D0ECDD" number={this.randomOdds(1)} footer={this.randomVolume()}/>
                <OptionButton changeToInput={changeToInput} header="For" color="#FCFCFC" backgroundColor="#3FCC80" number={this.randomOdds(1.25)} footer={this.randomVolume()}/>
                <OptionButton changeToInput={changeToInput} header="Against" color="#FCFCFC" backgroundColor="#FB8E49" number={this.randomOdds(1.5)} footer={this.randomVolume()}/>
                <OptionButton changeToInput={changeToInput} header="Against" color="#3E3A38" backgroundColor="#FFE6D7" number={this.randomOdds(1.75)} footer={this.randomVolume()}/>
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

        const backgroundColor = this.props.header === "For" ? "#3FCC80" : "#FB8E49";

        return (
            <div className="wager-container">
                <OddsInput value={number || ""}/>
                <WagerInput value="" updateReturn={this.updateReturn}/>
                <Return value={wager || ""}/>
                <button style={{backgroundColor}} onClick={(e) => {toastr.success("Wager Placed"); changeToButtons(e)}} className="wager-done">Bet Now</button>
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

class OddsInput extends React.Component {

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
                    Odds
                </div>
                <input value={value} onChange={this.handleChange} placeholder="Enter Odds"/>
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