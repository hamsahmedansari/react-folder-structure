import { GetAllTodoData } from "../hooks/GetAllTodosType";

export const getAllTodos = () =>
  new Promise<GetAllTodoData>((res, rej) => {

setTimeout(() => {
    rej()
}, 1000);
    
    // setTimeout(() => {
    //   res({
    //     data: {
    //       getAllTodo: [
    //         {
    //           createBy: "Hams",
    //           id: "something",
    //           title: "something with title",
    //         },
    //         {
    //           createBy: "Hams",
    //           id: "something",
    //           title: "something with title",
    //         },
    //         {
    //           createBy: "Hams",
    //           id: "something",
    //           title: "something with title",
    //         },
    //         {
    //           createBy: "Hams",
    //           id: "something",
    //           title: "something with title",
    //         },
    //         {
    //           createBy: "Hams",
    //           id: "something",
    //           title: "something with title",
    //         },
    //         {
    //           createBy: "Hams",
    //           id: "something",
    //           title: "something with title",
    //         },
    //       ],
    //     },
    //   });
    // }, 1000);
  });
