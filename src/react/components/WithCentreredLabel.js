import React, { Component } from 'react';

const Styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    label: {
        marginBottom: 4,
    },
};

export default class WithCenteredLabel extends Component {
    render() {
        return (
            <div style={Styles.container}>
                <span style={this.props.labelStyle || Styles.label }>{this.props.label}</span>
                {this.props.children}
            </div>
        );
    }
}
