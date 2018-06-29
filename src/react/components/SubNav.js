import React         from "react";

export default class SubNav extends React.Component {

    constructor(props) {
        super(props);

        const options = this.props.options || [
                {
                    name: "Popular",
                    filter: "popular"
                },
                {
                    name: "In-Play",
                    filter: "in-play"
                },
                {
                    name: "Today",
                    filter: "today"
                },
                {
                    name: "Tomorrow",
                    filter: "tomorrow"
                },
                {
                    name: "Future",
                    filter: "future"
                },
            ];

        const selectedFilter = options[0].filter;

        this.state = {
            options,
            selectedFilter,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e, filter) {
        this.setState({
            selectedFilter: filter
        });
    }

    render() {

        const {
            options,
            selectedFilter
        } = this.state;

        const width     = {width: `${100/options.length}%`};

        // TODO Resolve
        const handleClick = this.handleClick;

        return (
            <div className="sub-nav">
                {options.map(function (option) {
                    const selected = selectedFilter === option.filter;
                    return (
                       <SubNavOption handleClick={handleClick} selected={selected} key={option.filter} {...option} width={width}/>
                    );
                })}
            </div>
        );
    }
}

class SubNavOption extends React.Component {
    render() {

        const {name, filter, width, selected} = this.props;

        return (
            <div onClick={(e) => this.props.handleClick(e, filter)} style={width} className={`nav-option ${selected ? "selected" : ""}`}>
                {name}
            </div>
        );
    }
}


