import React from "react";

export const NewLog = () =>{
    return (
        <div className="form-whole">
            <form action="">
                <label htmlFor="image">Upload Image</label><br/>
                <input type="file" id="file-input" name="ImageStyle"/>
                <label htmlFor="name">Name of Place</label><br />
                <input type="text" id="name" name="nameofplace"/>
                <label htmlFor="date">Date</label> <br />
                <input type="date" id="date" name="date"/>
                <label htmlFor="desc">Description</label> <br />
                <input type="text" id="desc" name="description"/>
                <button>Log</button>
            </form>
        </div>
    );
}

