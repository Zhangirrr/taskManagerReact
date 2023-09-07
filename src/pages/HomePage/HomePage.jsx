import React, { useState } from "react";
import TasksGrid from "../../components/TasksGrid";

import s from "./HomePage.module.scss";
import TaskCreator from "../../components/TaskCreator";

function HomePage() {
  const [taskData, setTaskData] = useState([]);

  const addTask = (task) => {
    setTaskData(prev => [...prev, task]);
  };

  const checkTask = (id) => {
    setTaskData(prev => prev.map(task => {
      if(task.id === id){
        return {...task, completed: !task.completed}
      }
      return task
    }))
  }

  return (
    <div className={s.wrapper}>
      <div className={s.header}>Keeper</div>
      <div className={s.sidePanel}></div>
      <TaskCreator onSubmit={addTask}/>
      <TasksGrid tasks={taskData} checkTask={checkTask}/>
    </div>
  );
}

export default HomePage;
