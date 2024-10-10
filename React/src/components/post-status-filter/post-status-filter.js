import React, {Component} from "react";

import "./post-status-filter.css";

export default class PostStatusFiler extends Component {

    constructor(props) {
        super(props);
        this.buttons = [
            {name: "all", label: "Kõik"},
            {name: "like", label: "Meeldis"},
        ]
    }

    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const {filter, onFilterSelect} = this.props;
            const active = filter === name;
            const clazz = "btn" + (active ? " btn-info" : " btn-outline-secondary");
            return (
                <button
                    key={name}
                    type="button"
                    className={clazz}
                    onClick={() => onFilterSelect(name)}>
                    {label}
                </button>
            )
        });
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}