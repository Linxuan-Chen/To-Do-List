import React from "react";

import "./index.scss";

export default function Header(props) {

  const {setIsInputShow, isInputShow} = props;

  const plusButtonClickHandler = () => {
    setIsInputShow(!isInputShow)
  };

  return (
    <header className="header container">
      <div className="row bg-primary">
        <div className="col-10 text-center text-white p-0">To Do list</div>
        <div className="col-2 p-0 text-right pr-3">
          <div className="btn pt-0 text-white text-center" onClick={plusButtonClickHandler}>
            &#43;
          </div>
        </div>
      </div>
    </header>
  );
}
