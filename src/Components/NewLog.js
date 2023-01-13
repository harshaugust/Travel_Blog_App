import React, { useState } from "react";
import './NewLog.css'
import { Travel } from "./Travel";

let nextId = 4

export const NewLog = () =>{

    const [log,setLog] = useState([...Travel])
    const [image,setImage] = useState()
    const [title,setTitle] = useState('')
    const [date,setDate] = useState('2023/01/09')
    const [desc,setdesc] = useState('')


    const addNewLog = () =>{
        setTitle('')
        setdesc('')

        setLog([
            ...log,
            {
                id:nextId++,
                image:image,
                title:title,
                date:date,
                desc:desc
            }
        ])        

    }

    return (
            <form action="" className="form-whole">
            <div className="one">
                <label htmlFor="image">Upload Image</label>
                <input type="file" id="file-input" name="ImageStyle" value={image}/>
            </div>
                
            <div className="two">
                 <label htmlFor="name">Name of Place</label>
                <input type="text" id="name" name="nameofplace" value={title} onChange={e=> setTitle(e.target.value)}/>
            </div>    
               
            <div className="three">
                <label htmlFor="date">Date</label>
                <input type="date" id="date" name="date" value={date} onChange={e=> setDate(e.target.date)}/>
            </div>   
                
            <div className="four">
                <label htmlFor="desc">Description</label>
                <input type="text" id="desc" name="description" value={desc} onChange={e=> setdesc(e.target.value)}/>
            </div>    

                <button type="submit" onClick={addNewLog}>Log</button>
            </form>
    );
}