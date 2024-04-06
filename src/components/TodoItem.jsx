import { useState } from "react";

const TodoItem = ({ id, description, done, handlerToggleTodo, handlerDeleteTodo }) => {
  const [checkbox, setCheckbox] = useState(done);

  return (
    <li className="todo__item">
      <div className="checkbox-wrapper-46" title={ !checkbox ? "Marcar tarea como completada" : "Desmarcar tarea como completada" }>
        <input
          type="checkbox"
          name="checkbox"
          id={id}
          className="inp-cbx"
          checked={checkbox}
          onChange={() => {
            setCheckbox(!checkbox);
            handlerToggleTodo(id);
          }}
        />
        <label htmlFor={id} className="cbx">
          <span>
            <svg viewBox="0 0 12 10" height="12px" width="12px">
              <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
            </svg>
          </span>
          <span className={"todo__description" + (checkbox ? " todo__completed" : "") }>{description}</span>
        </label>
      </div>
      <button className="btn__delete" title="Eliminar tarea" onClick={() => { handlerDeleteTodo(id) }} ></button>
    </li>
  );
};

export default TodoItem;
