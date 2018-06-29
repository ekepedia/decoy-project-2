import React      from "react";

export default class VideoContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {video_url: props.video_url};
    }

    componentWillReceiveProps(props) {
        this.setState({video_url: props.video_url});
    }

    render() {

        const videoStyle = {
            width: "100%"
        };

        return (
            <video style={videoStyle} src={this.state.video_url} controls="true" preload="auto"></video>
        );
    }
}
