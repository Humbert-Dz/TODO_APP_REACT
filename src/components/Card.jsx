import { useTodo } from "../hooks/useTodo";
import TodoForm from "./TodoForm";
import TodosList from "./TodosList";

const Card = () => {
  const {
    todos,
    handlerAddTodo,
    handlerDeleteTodo,
    handlerToggleTodo,
    getCountTodos,
    getPendingTodos,
    getCompletedTodos,
  } = useTodo();

  return (
    <div className="card__container">
      <TodoForm handlerAddTodo={handlerAddTodo} />
      <TodosList todos={todos} handlerToggleTodo={handlerToggleTodo}/>
    </div>
  );
};

export default Card;
