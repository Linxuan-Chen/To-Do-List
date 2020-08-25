import React, { useState, useEffect } from "react";
import "./App.css";

import MyHeader from "./components/Header";
import MyInput from "./components/Input";
import MyList from "./components/ToDoList";

function App() {
  // state to store task info
  const [toDoList, setToDoList] = useState([]);

  // state to decide if the input box is shown
  const [isInputShow, setIsInputShow] = useState(false);

  /**
   * @description: Add tasks to toDoList state, task obj is composed by content, isComplete flag and timestamp
   * @param {String} value task contents
   */
  const addList = (value) => {
    if (value === "") {
      return;
    } else {
      let item = {
        task: value,
        isComplete: false,
        timestamp: new Date().getTime(),
        completeTimestamp: null,
      };
      setToDoList([item, ...toDoList]);
    }
  };
  /**
   * @description: Get to-do-list data stored in local storage
   */
  useEffect(() => {
    const toDoData = JSON.parse(localStorage.getItem("toDoData") || "[]");
    setToDoList(toDoData);
  }, []);
  /**
   * @description: Store to-do-list data to local storage
   */
  useEffect(() => {
    localStorage.setItem("toDoData", JSON.stringify(toDoList));
  }, [toDoList]);

  return (
    <div className="App">
      {/* Header starts */}
      <MyHeader setIsInputShow={setIsInputShow} isInputShow={isInputShow} />
      {/* Header ends */}

      {/* Show input box when plus button is triggered */}
      {isInputShow ? (
        <MyInput addList={addList} setIsInputShow={setIsInputShow} />
      ) : (
        ""
      )}
      {/* input box ends */}

      {/* To do list starts */}
      <MyList toDoList={toDoList} setToDoList={setToDoList} />
      {/* To do list ends */}
      <div className="reset container">
        <div className="row">
          <div className="col p-0 text-right">
            <button
            className="btn btn-danger"
              onClick={() => {
                if(window.confirm("Are you sure?")){
                  setToDoList([])
                }
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
