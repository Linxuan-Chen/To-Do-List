import React, { useState } from "react";

import "./index.scss";

export default function Input(props) {

  const { addList, setIsInputShow } = props;

  const [inputValue, setInputValue] = useState("");

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value)
  }

  const addButtonClickHandler = () => {
    addList(inputValue);
    setInputValue('');
    setIsInputShow(false);
  }

  return (
    <div>
      <div className="container input">
        <div className="row mt-1">
          <div className="col-10 p-0 pt-1 pl-1">
            <input
              type="text"
              className="plus-input"
              placeholder="Please input the task you want to add"
              value={inputValue}
              onChange={inputChangeHandler}
            />
          </div>
          <div className="col-2 text-right p-0 pl-1">
            <div className="btn btn-success" onClick={addButtonClickHandler}>Add</div>
          </div>
        </div>
      </div>
    </div>
  );
}
