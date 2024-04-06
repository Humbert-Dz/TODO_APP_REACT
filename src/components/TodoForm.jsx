import { useForm } from "../hooks/useForm";

const TodoForm = ({handlerAddTodo}) => {
  //uso de custom hook
  const { todoInput, onInputChange, onResetForm } = useForm({
    todoInput: "",
  });

  const onSubmit = (event) => {
    //previene accion por default
    event.preventDefault();

    if(todoInput.length <= 2) return;

    handlerAddTodo({id: new Date().getTime(), description: todoInput, done: false});

    //resetea el formulario
    onResetForm();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="todoInput"
        value={todoInput}
        onChange={onInputChange}
        className="card__input"
        placeholder="Agrega una nueva tarea..."
        title="Agrega tu tarea y pulsa enter"
        autoFocus
      />
    </form>
  );
};

export default TodoForm;
