import React from "react";

export default function Modal(props) {

  const {
    title,
    currentTask,
    getTime
  } = props;

  return (
    <>
      <div
        className="modal fade"
        id="checkModal"
        tabIndex="-1"
        aria-labelledby="checkModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            {/* modal header starts */}
            <div className="modal-header text-center">
              <h5 className="modal-title" >
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
              {/* Task time starts */}
              <p className="task-time">
                <span>Time Added: </span>
                {getTime(currentTask.timestamp)}
              </p>
              {/* Task time ends */}

               {/*task content starts */}
              <p className="task-content">
                <span>Task: </span>
                {currentTask.task}
              </p>
               {/*task content ends */}

               {/* task status starts */}
              <p className="task-status">
                <span>Status: </span>
                {currentTask.isComplete ? "Complete" : "In Progress"}
              </p>
              {/* if isComplete flag is true, run getTime method to parse the timestamp */}
                  {
                      currentTask.isComplete? 
                      <div className="task-completeTime">
                      <span>Complete Time: </span>
                      {getTime(currentTask.completeTimestamp)}
                      </div>: ''
                  }
            </div>
            {/* task status ends */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
