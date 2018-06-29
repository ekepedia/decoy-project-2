import React from "react";
import toastr from "toastr";

export default class OptionButton extends React.Component {
    render() {

        const {changeToInput, header, number} = this.props;

        return (
            <div className="option-button">
                {
                    header &&
                    <div className="button-header">
                        {header}
                    </div>
                }
                <button onClick={(e) => changeToInput(e, header, number)} style={{backgroundColor: this.props.backgroundColor, color: this.props.color}} className="button-number">
                    {number}
                </button>
                <div className="button-footer">
                    {this.props.footer}
                </div>
            </div>
        );
    }
}