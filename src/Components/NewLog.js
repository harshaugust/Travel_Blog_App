import React, { useEffect, useState } from "react";
import "./NewLog.css";
import { Travel } from "./Travel";

let nextId = 4;

export const NewLog = () => {
  const [log, setLog] = useState();
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  //const [date,setDate] = useState('')
  const [desc, setDesc] = useState("");

  const imageHandle = (e) => {
    console.log(e.target.files);
    setImage(URL.createObjectURL(e.target.files[0].name));
  };

  const titleHandle = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };

  // const dateHandle = (e) =>{
  //     console.log(e.target.date)
  //     setDate(e.target.date)

  // }

  const descHandle = (e) => {
    console.log(e.target.value);
    setDesc(e.target.value);
  };

  return (
    <form className="form-whole" onSubmit={addNewLog}>
      <div className="one">
        <label htmlFor="image">Upload Image</label>
        <input
          type="file"
          id="file-input"
          name="ImageStyle"
          onChange={imageHandle}
        />
      </div>

      <div className="two">
        <label htmlFor="name">Name of Place</label>
        <input
          type="text"
          id="name"
          name="nameofplace"
          value={title}
          onChange={titleHandle}
        />
      </div>

      <div className="four">
        <label htmlFor="desc">Description</label>
        <input
          type="text"
          id="desc"
          name="description"
          value={desc}
          onChange={descHandle}
        />
      </div>

      <button type="submit">Log</button>
    </form>
  );
};
