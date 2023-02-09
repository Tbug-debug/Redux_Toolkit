import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../store";
import { Dispatch } from "redux";

interface ToDoProps {
  text: string;
  onBtnClick: () => void;
  id: number;
}

export interface ToDos {
  text: string;
  id: number;
}

function ToDo({ text, onBtnClick, id }: ToDoProps) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch: Dispatch, ownProps: ToDos) {
  return {
    onBtnClick: () => dispatch(remove(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
