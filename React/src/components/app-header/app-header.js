import React from "react";

import "./app-header.css";

const AppHeader = ({liked, allPosts}) => {
    return (
        <div className="app-header d-flex">
            <h1>React App</h1>
            <h2>{allPosts} postid, meeldisid neist {liked}</h2>
        </div>
    )
}

export default AppHeader;