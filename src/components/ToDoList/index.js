import React, { useState } from "react";
import ToDoItems from "./ToDoItems";

export default function ToDoList(props) {
  const { toDoList, setToDoList } = props;

  const [currentTask, setCurrentTask] = useState({});


  /**
   * @description: Change isComplete flag to opposite status when checkbox is checked
   * @param {Number} timestamp Timestamp of current task
   */
  const changeIsComplete = (timestamp) => {
    setToDoList(
      toDoList.map(
        (item) => {
          if (item.timestamp === timestamp) {
            item.isComplete = !item.isComplete;
            item.completeTimestamp = new Date().getTime();
          }
          return item;
        })
    );
  };

  /**
   * @description: Find the task obj when timestamp fits, then replace the task content with editValue
   * @param {Number} timestamp Timestamp of current task
   * @param {String} editValue Value in textarea in edit modal
   */
  const changeTaskContent = (timestamp, editValue) => {
    setToDoList(
      toDoList.map(
        (item) => {
          if (item.timestamp === timestamp) {
            item.task = editValue;
          }
          return item
        }
      )
    )
  }
  /**
   * @description: Change currentTask according to timestamp passed by button actions
   * @param {Number} timestamp Timestamp of current task
   */
  const changCurrentTask = (timestamp) => {
    setCurrentTask(
      toDoList.filter(
        item => {
          return item.timestamp === timestamp
        }
      )[0]
    )
  };


  /**
   * @description: Delete the task object according to timestamp passed by button acitons
   * @param {Number} timestamp Timestamp of current task
   */
  const deleteTask = (timestamp) => {
    setToDoList(toDoList.filter(
      item => {
        return item.timestamp !== timestamp
      }
    ));
  }

  return (
    <>
      {/* Display to do list */}
      <ul className="container">
        {toDoList.map((task, index) => {
          return (
            <ToDoItems
              key={index}
              task={task}
              currentTask={currentTask}
              changeIsComplete={changeIsComplete}
              changCurrentTask={changCurrentTask}
              changeTaskContent={changeTaskContent}
              deleteTask={deleteTask}
            />
          );
        })}
      </ul>
    </>
  );
}
