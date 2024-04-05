import { useForm } from "../hooks/useForm";

const TodoForm = () => {
  //uso de custom hook
  const { todoInput, onInputChange, onResetForm } = useForm({
    todoInput: "",
  });

  const onSubmit = (event) => {
    //previene accion por default
    event.preventDefault();

    //

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
