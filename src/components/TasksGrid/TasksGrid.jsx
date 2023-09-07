import React from "react";

import Task from "../Task";

import s from "./TasksGrid.module.scss";

function TasksGrid({ tasks, checkTask }) {
  return (
    <div className={s.grid}>
      {tasks.map((elem, index) => (
        <Task
          key={index}
          title={elem.title}
          text={elem.text}
          checkTask={checkTask}
        />
      ))}
    </div>
  );
}

export default TasksGrid;
