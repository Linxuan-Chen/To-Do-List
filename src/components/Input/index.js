
import React, { useState } from "react";

import "./index.scss";

export default function Input(props) {

  const { addList, setIsInputShow } = props;

  // Bind value in input box to state inputValue
  const [inputValue, setInputValue] = useState("");
  const inputChangeHandler = (e) => {
    setInputValue(e.target.value)
  }


  /**
   * @description: Run when add button is clicked
   */  
  const addButtonClickHandler = () => {
    // Pass inputValue to addList method in App
    addList(inputValue);
    // Initialize inputValue
    setInputValue('');
    // Close input box when add is clicked
    setIsInputShow(false);
  }

  return (
    <div>
      <div className="container input">
        <div className="row mt-1">
          {/* input box starts */}
          <div className="col-10 p-0 pt-1 pl-1">
            <input
              type="text"
              className="plus-input"
              placeholder="Please input the task you want to add"
              value={inputValue}
              onChange={inputChangeHandler}
            />
          </div>
          {/* input box ends */}

          {/* Add button starts */}
          <div className="col-2 text-right p-0 pl-1">
            <div className="btn btn-success" onClick={addButtonClickHandler}>Add</div>
          </div>
          {/* Add button ends */}
        </div>
      </div>
    </div>
  );
}
