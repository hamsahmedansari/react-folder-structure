import React from "react";
import { Todo } from "../../../../components/Todo";
import GetAllTodos from "../../hooks/GetAllTodos";

const Todos = () => {
  const { data, error, loading } = GetAllTodos({});

  const renderTodos = React.useCallback(() => {
    return data?.data.getAllTodo.map((row) => (
      <Todo title={row.title} key={row.id} />
    ));
  }, [data]);

  return (
    <p>
      {loading && <>loading</>}
      {error && <>error</>}

      {renderTodos()}
    </p>
  );
};

export default Todos;
