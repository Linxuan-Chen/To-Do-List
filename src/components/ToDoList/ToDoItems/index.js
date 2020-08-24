import React from "react";


export default function ToDoItems(props) {
  const { task, changeIsComplete } = props;

  const checkboxChangeHandler = () => {
    changeIsComplete(task.id);
  };

  return (
    <li className="row">
      <div className="col-2 pt-2">
        <input
          type="checkbox"
          name="isComplete"
          id="isComplete"
          checked={task.isComplete}
          onChange={checkboxChangeHandler}
        />
      </div>
      <div className="col-6 text-center pt-2">
        <span style={
            {
              textDecoration: task.isComplete? "line-through": "none"
            }
          }>
        {
          task.task
        }
        </span>
      </div>
      <div className="col text-right pr-0">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-info mr-2 my-1">
            Info
          </button>
          <button type="button" className="btn btn-warning mx-2 my-1">
            Edit
          </button>
          <button type="button" className="btn btn-danger ml-2 my-1">
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}
