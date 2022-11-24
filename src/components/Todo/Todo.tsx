import React from "react";
import { TodoProps } from "./TodoType";

const Todo: React.FC<TodoProps> = ({ title, key }) => {
  return <p key={key}>{title}</p>;
};

export default React.memo(Todo);
