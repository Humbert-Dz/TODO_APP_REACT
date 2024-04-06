import TodoItem from "./TodoItem";

const TodosList = ({ todos, handlerAddTodo, handlerToggleTodo }) => {
  return (
    <ul className="card__list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} handlerToggleTodo={handlerToggleTodo} />
      ))}
    </ul>
  );
};

export default TodosList;
