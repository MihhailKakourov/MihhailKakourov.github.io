import React, {Component} from "react";

import "./post-list-item.css";

export default class PostListItem extends Component {
    render() {
        const {label, onDelete, onToggleImportant, onToggleLiked, onToggleDone, done, like, important} = this.props;
        let className = "app-list-item d-flex justify-content-between";

        if (important) {
            className += " important";
        }

        if (like) {
            className += " like";
        }

        if (done){
            className += " done";
        }

        return (
            <div className={className}>
                <span
                    className="app-list-item-label"
                    onClick={onToggleLiked}>
                        {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button
                        type="button"
                        className={`btn-star btn-sm ${important ? 'active' : ''}`}
                        onClick={onToggleImportant}
                    >
                        <i className="fa fa-star"></i>
                    </button>
                    <button
                        type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                            <i className="fa fa-trash-o"></i>
                    </button>
                        <i className="fa fa-heart"></i>
                        <button
                        type="button"
                        className="btn-done"
                        onClick={onToggleDone}
                        >
                            <i className="fa fa-check"></i>
                        </button>
                </div>
            </div>
        )
    }
}
