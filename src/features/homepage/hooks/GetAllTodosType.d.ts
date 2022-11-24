import { AxiosApiError, AxiosApiSuccess } from "../../../types/ErrorType";
import { Todo } from "../../../types/TodoType";

export interface GetAllTodosProps {
  
}

export type GetAllTodoError = AxiosApiError;

export interface GetAllTodoData extends AxiosApiSuccess {
  data: {
    getAllTodo: Todo[];
  };
}
