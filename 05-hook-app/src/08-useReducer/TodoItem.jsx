
export const TodoItem = ({ todo,onDeleteTodo,onToggleTodo }) => (
  <>
    <li className="list-group-item">
      <span
        className={`align-self-center ${(todo.done) ? 'text-decoration-line-through':'' } `}
        onDoubleClick={() => onToggleTodo(todo.id)}

      >
        {todo.description}

      </span>
      <button className="btn btn-primary"
        onClick={() => onDeleteTodo(todo.id)}>  Borrar  </button>
    </li>
  </>
) 
