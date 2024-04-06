import { useEffect, useReducer } from "react";
import {reducer} from "./reducer";

//funcion que ontiene los todos del localStorage si es que existen
const initialTodos = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

const algo = () => { return [{id: 1, description: 'tengo hambre', done: true}] };

export const useTodo = () => {
  //estado reducer
  const [ todos, distpach ] = useReducer(reducer, algo());

  //al cambiar los todos, guardarlos en el localstorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //funcion para agregar un nuevo todo
  const handlerAddTodo = (todo) => {
    distpach({
      type: "[TODO] Add Todo",
      payload: todo,
    });
  };

  //funcion para eliminar un todo
  const handlerDeleteTodo = (id) => {
    distpach({
      type: "[TODO] Delete Todo",
      payload: id,
    });
  };

  //función para cambiar el estado del todo
  const handlerToggleTodo = (id) => {
    distpach({
      type: "[TODO] toggle todo",
      payload: id,
    });
  };

  //funcion para contar todos los todos
  const getCountTodos = () => {
    return todos.length;
  };

  //funcion para contar los todos pendientes
  const getPendingTodos = () => {
    return todos.filter((todo) => !todo.done).length;
  };

  //funcion para contar a los todos completados
  const getCompletedTodos = () => {
    return todos.filter((todo) => todo.done).length;
  };

  return {
    todos,
    handlerAddTodo,
    handlerDeleteTodo,
    handlerToggleTodo,
    getCountTodos,
    getPendingTodos,
    getCompletedTodos,
  };
};
