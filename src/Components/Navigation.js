import React from "react";
import './Navigation.css'
import {Link} from "react-router-dom"

const Navigation = (props) =>{
    return(
        <div className="Main-Content">
            <Link to = "/"> Logs</Link>
            <Link to = "new-log"> New Logs</Link>
        </div>
    )
}


export default Navigation