import React, { useState } from "react";

export default function EditModel(props) {
  const { editboxHandler, title, currentTask, getTime } = props;
  // Bind value in input box to editValue state
  const [editValue, setEditValue] = useState("");

  return (
    <div
      className="modal fade"
      id="editModal"
      tabIndex="-1"
      aria-labelledby="editModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          {/* modal header starts */}
          <div className="modal-header">
            <h5 className="modal-title" id="editModalLabel">
              {title}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          {/* modal header ends */}
          <div className="modal-body text-left">
            {/* Time added */}
            <div className="edit-tiem">
              <span>Time Added: </span>{" "}
              <span>{getTime(currentTask.timestamp)}</span>
            </div>
          {/* textarea for editing task content */}
            <textarea
              className="mt-2"
              value={editValue}
              placeholder="Please input task modified"
              onChange={(e) => {
                setEditValue(e.target.value);
              }}
            />
          </div>
          <div className="modal-footer">
            {/* close button */}
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            {/* submit button to store the data to toDoList state */}
            <button
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
              onClick={() => {
                // change currentTask and pass the value to ToDoItem when button is clicked
                editboxHandler(currentTask.timestamp, editValue);
                // reset editValue
                setEditValue('');
              }}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
