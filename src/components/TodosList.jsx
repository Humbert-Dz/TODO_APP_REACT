import TodoItem from "./TodoItem";

const TodosList = ({ todos, handlerToggleTodo, handlerDeleteTodo }) => {
  return (
    <ul className="card__list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} handlerToggleTodo={handlerToggleTodo} handlerDeleteTodo={handlerDeleteTodo} />
      ))}
    </ul>
  );
};

export default TodosList;
