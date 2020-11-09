/*
 * @Author: your name
 * @Date: 2020-08-24 13:17:36
 * @LastEditTime: 2020-11-09 12:20:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \To do list\To-Do-List\src\components\Header\index.js
 */
import React from "react";

import "./index.scss";

export default function Header(props) {
  const { setIsInputShow, isInputShow } = props;

  /**
   * @description: Change isInputShow flag to opposite when plus button is triggered
   */
  const plusButtonClickHandler = () => {
    setIsInputShow(!isInputShow);
  };

  return (
    <header className="header container">
      <div className="row bg-primary">
        <div className="col-10 text-center text-white p-0">
          Please Press Plus Button To Add A New Task
        </div>
        <div className="col-2 p-0 text-right pr-3">
          <div className="col-12"></div>
          <div
            className="btn pt-0 text-white text-center"
            onClick={plusButtonClickHandler}
          >
            &#43;
          </div>
        </div>
      </div>
    </header>
  );
}
