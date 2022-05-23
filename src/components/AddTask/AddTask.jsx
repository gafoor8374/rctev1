import React ,{useState}from "react";
import Task from "../Task/Task";
// import TaskApp from "../TaskApp";
import styles from "./addTask.module.css";

const AddTask = () => {
  const [task,setTask]=useState('')
  const [todo,setTodo]= useState([])
  // NOTE: do not delete `data-cy` key value pair
  const deleteHandle=(indexValue)=>{
    const newTodo = todo.filter((todolist,index)=>index!==indexValue)
    setTodo(newTodo) 
  }
  return (
    <div className={styles.todoForm}>
      <div>
        <h1>Todo List</h1>
      </div>
      <input
  
        onChange={(e) => {
          setTask(e.target.value);
        }}
        data-cy="add-task-input"
        type="text"
        placeholder="Add task"
      />
      <button
        onClick={() => {
          const newTodo=[...todo,task];
          setTodo(newTodo);
          console.log(newTodo)
          setTask("");
        }}
        data-cy="add-task-button"
      >
        +
      </button>
      <Task todolist={todo} deleteTodo={deleteHandle} />
      {/* <TaskApp todolist={todo}/> */}

    </div>
  );
};

export default AddTask;
