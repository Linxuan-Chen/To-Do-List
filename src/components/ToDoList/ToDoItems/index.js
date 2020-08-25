import React from "react";

import CheckModal from "../../Modal/CheckModal";
import EditModel from "../../Modal/EditModel";
import DeleteModal from "../../Modal/DeleteModal";

export default function ToDoItems(props) {
  const { task, changeIsComplete, currentTask, changCurrentTask, changeTaskContent, deleteTask } = props;

  /**
   * @description: Pass task timestamp back to parent component
   */

  const checkboxChangeHandler = () => {
    changeIsComplete(task.timestamp);
  };

  /**
   * @description: Handler for save button in edit modal
   * @param {Number} timestamp Timestamp of current task
   * @param {String} editValue Value in textarea box when trying to edit the task
   */
  const editboxHandler = (timestamp, editValue) => {
    changeTaskContent(timestamp, editValue);
  }

  /**
   * @description: Handler for delete button in delete modal
   * @param {Number} timestamp Timestamp of current task
   */
  const deleteHandler = (timestamp) => {
    deleteTask(timestamp);
  }

  /**
   * @description: Parse timestamp to regular time format
   * @param {Number} timestamp Timestamp of current task
   */
  const getTime = (timestamp) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    const minites = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    const seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    return (
      year +
      "-" +
      month +
      "-" +
      day +
      " " +
      hours +
      ":" +
      minites +
      ":" +
      seconds
    );
  };

  return (
    <li className="row shadow-sm mt-2">
      {/* checkbox starts */}
      <div className="col-2 col-lg-2 pt-3">
        <input
          type="checkbox"
          name="isComplete"
          id="isComplete"
          checked={task.isComplete}
          onChange={checkboxChangeHandler}
        />
      </div>
      {/* checkbox ends */}

      {/* task content starts */}
      <div className="col-10 col-lg-6 text-center pt-3 text-truncate">
        <span
          style={{
            textDecoration: task.isComplete ? "line-through" : "none",
          }}
        >
          {task.task}
        </span>
      </div>
      {/* task content ends */}

      <div className="col-12 col-lg-4 text-right pr-0 pb-2 pt-2">
        {/* checkModal starts */}
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            className="btn btn-info mr-2 my-1"
            type="button"
            data-toggle="modal"
            data-target="#checkModal"
            onClick={() => {
              changCurrentTask(task.timestamp);
            }}
          >
            Info
          </button>
          <CheckModal
            ariaLabelledby="checkModal"
            title="Task Info"
            currentTask={currentTask}
            getTime={getTime}
          />

          {/* checkModal ends */}

          {/* editModal starts */}
          <button
            type="button"
            className="btn btn-warning mx-2 my-1"
            data-toggle="modal"
            data-target="#editModal"
            onClick={() => {
              changCurrentTask(task.timestamp);
            }}
          >
            Edit
          </button>
          <EditModel editboxHandler={editboxHandler} currentTask={currentTask} title="Edit Task" getTime={getTime} />
          {/* edit modal ends */}

          {/* delete modal starts */}
          <button type="button" className="btn btn-danger ml-2 my-1" data-toggle="modal"
            data-target="#deleteModal" onClick={() => {
              changCurrentTask(task.timestamp);
            }}>

            Delete
          </button>
          <DeleteModal title="Are You Sure?" currentTask={currentTask} deleteHandler={deleteHandler} />
          {/* delete modal starts */}
        </div>
      </div>
    </li>
  );
}
