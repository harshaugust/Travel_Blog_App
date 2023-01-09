import React from "react";
import './Navigation.css'

const Navigation = (props) =>{
    return(
        <div className="Main-Content">
            <div className="UP">
                <h2>Travel Memo</h2>
            </div>

            <div className="DP">
                <h2>Logs</h2>
                <h2>New Log</h2>
            </div>
        </div>
    )
}

export default Navigation