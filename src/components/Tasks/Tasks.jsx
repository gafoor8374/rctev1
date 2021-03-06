import React from "react";
import styles from "./tasks.module.css";

const Tasks = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
        {/* {props.todo} */}
      </div>
    </>
  );
};

export default Tasks;
