import React, { useState } from "react";
import "./App.css";

import MyHeader from "./components/Header";
import MyInput from "./components/Input";
import MyList from './components/ToDoList'


function App() {
  const [toDoList, setToDoList] = useState([]);
  const [isInputShow, setIsInputShow] = useState(false);
  const addList = (value) => {
    if(value === "") {
      return
    } else {
      let item = {
        task: value,
        isComplete: false,
        id: Math.floor(Math.random()*10000000)
      }
      setToDoList([item, ...toDoList]);
    }
  }
  return (
    <div className="App">
      <MyHeader setIsInputShow={setIsInputShow} isInputShow={isInputShow} />
      {isInputShow ? <MyInput addList={addList} setIsInputShow={setIsInputShow}/> : ""}
      <MyList toDoList={toDoList} setToDoList={setToDoList} />
    </div>
  );
}

export default App;
