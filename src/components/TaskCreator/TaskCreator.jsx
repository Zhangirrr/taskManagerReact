import React, { useState } from "react";
import s from "./TaskCreator.module.scss";
import { Button, TextField } from "@mui/material";

function TaskCreator( {onSubmit }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");


  const onTitle = (event) => setTitle(event.target.value);
  const onText = (event) => setText(event.target.value);
  
  const submit = (event) => {
    event.preventDefault()
    
    if(!title){
        return
    }
    if(!text){
        return
    }

    onSubmit({
        id: Date.now(),
        title,
        text,
        date: new Date(),
        completed: false
    })

    setTitle((prev) => (prev = ""));
    setText((prev) => (prev = ""));
  };
  return (
    <form className={s.mainDiv} onSubmit={submit}>
      {/* <h3>Заголовок</h3> */}
      <TextField
        id="standard-basic"
        label="Заголовок"
        variant="standard"
        type="text"
        value={title}
        onChange={onTitle}
      />
      <hr className={s.hr} />
      <TextField
        id="outlined-basic"
        label="Задача"
        variant="outlined"
        value={text}
        onChange={onText}
      />
      <Button type="submit" variant="contained" className={s.btn}>
        Сохранить
      </Button>
    </form>
  );
}

export default TaskCreator;

{
  /* <input
      type="text"
      placeholder="Заголовок..."
      value={title}
      onChange={onTitle}
    /> */
}

{
  /* <input
      className={s.input}
      type="text"
      placeholder="Type..."
      value={text}
      onChange={onText}
    /> */
}
