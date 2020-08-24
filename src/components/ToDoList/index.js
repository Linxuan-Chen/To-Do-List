import React from "react";
import ToDoItems from "./ToDoItems";

export default function ToDoList(props) {

  const { toDoList, setToDoList } = props;

  const changeIsComplete = (id) => {
      setToDoList(
        toDoList.map(
            (item) => {
                if (item.id === id) {
                    item.isComplete = !item.isComplete;
                }
                return item;
            }
        )
      )
      console.log(toDoList);
  };
  return (
    <>
      <ul className="container">
        {toDoList.map((task, index) => {
          return <ToDoItems key={index} task={task} changeIsComplete={changeIsComplete}/>;
        })}
      </ul>
    </>
  );
}
