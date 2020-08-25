
import React from 'react'

export default function DeleteModal(props) {

    const { title, deleteHandler, currentTask } = props;

    return (
        <div
            className="modal fade"
            id="deleteModal"
            tabIndex="-1"
            aria-labelledby="deleteModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    {/* set modal header to danger color */}
                    <div className="modal-header bg-danger text-white">
                        <h5 className="modal-title" id="deleteModalLabel">
                            {title}
                        </h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span className="text-white" aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    {/* modal header ends */}
                    {/* modal body starts */}
                    <div className="modal-body text-left">
                        <p className="pt-3">You can't rollback if you click delete!</p>
                    </div>
                    {/* modal body ends */}
                    <div className="modal-footer">
                        {/* when delete button is clicked, close the modal and delete the data */}
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                            onClick={
                                () => {
                                    deleteHandler(currentTask.timestamp)
                                }
                            }
                        >
                            Delete
              </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
