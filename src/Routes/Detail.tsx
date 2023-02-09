import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { ToDos } from "../components/Todo";
import { RooteState } from "../store";

interface ToDosProps {
  toDos: ToDos[];
}

function Detail({ toDos }: ToDosProps) {
  const todos = useParams();
  const todo = toDos.find((todo) => todo.id === parseInt(todos.id as string));
  return (
    <>
      <h1>{todo?.text}</h1>
      <h4>Created at: {todo?.id}</h4>
    </>
  );
}

function mapStateToProps(state: RooteState) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
