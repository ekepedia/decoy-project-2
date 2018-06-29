import React  from "react";

export default class ImageHolder extends React.Component {

    render() {
        const holder = {
            maxHeight: this.props.height,
            maxWidth: this.props.width,
            marginBottom: this.props.marginBottom,
            marginTop: this.props.marginTop,
            overflow: "hidden"
        };

        const image = {};

        if (this.props.byHeight)
            image.height = "100%";
        else
            image.width = "100%";

        return (
            <div style={holder}>
                <img style={image} src={this.props.src}/>
            </div>
        );
    }
}

