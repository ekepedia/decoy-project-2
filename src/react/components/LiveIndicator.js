import React  from "react";

export default class LiveIndicator extends React.Component {

    render () {

        const wrapper = {
            color: "#60F8CF",
            animationName: "blink",
            animationDuration: "3s",
            animationIterationCount: "infinite",
            animationTimingFunction: "linear"
        };

        const circle = {
            backgroundColor: "#60F8CF",
            height: "6px",
            width: "6px",
            borderRadius: "100%",
            display: "inline-block",
            marginRight: "6px"
        };

        const live = {
            display: "inline-block"
        };

        return (
            <div style={wrapper}>
                <div style={circle}/>
                <div style={live}>Live</div>
            </div>
        );
    }
}

