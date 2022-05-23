import React from "react";
import Counter from "../Counter/Counter";
// import Tasks from "../Tasks/Tasks";
import styles from "./task.module.css";

const Task = ({ todolist, deleteTodo }) => {
  // NOTE: do not delete `data-cy` key value pair

  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" />
      <div data-cy="task-text">
        {todolist.map((e, index) => {
          return <div key={index}>{e}</div>;
        })}
      </div>
      {/* Counter here */}
      <Counter />
      <button data-cy="task-remove-button" >
        Remove
      </button>
    </li>
  );
};

export default Task;
