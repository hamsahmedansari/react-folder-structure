import React from "react";
import { getAllTodos } from "../utils/fakeApi";
import {
  GetAllTodoData,
  GetAllTodoError,
  GetAllTodosProps,
} from "./GetAllTodosType";

const GetAllTodos = (props: GetAllTodosProps) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<GetAllTodoError>();
  const [data, setData] = React.useState<GetAllTodoData>();

  const fetchData =async () => {
    try {
      setLoading(true);
      // API

      const response = await getAllTodos()

      setData(response);
    } catch (error) {
      setError({
        message: "SOME THING WENT",
        status: 504,
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchMore = (page: number, offset: number) => {
    //
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, fetchData: fetch, fetchMore };
};

export default GetAllTodos;
