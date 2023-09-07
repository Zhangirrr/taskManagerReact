import React from "react";
import CheckIcon from "@mui/icons-material/Check";

import s from "./Task.module.scss";

function Task({ title, text, checkTask }) {
  return (
    <div className={s.task}>
      <h3>{title}</h3>
      <p>{text}</p>
      <div className={s.bottomPart}>
        <div className={s.controlPanel}>
          <button type="button" className={s.icon} onClick={checkTask}>
          <CheckIcon />
          </button>
        </div>
        <p className={s.date}>18.01.2023</p>
      </div>
    </div>
  );
}

export default Task;
