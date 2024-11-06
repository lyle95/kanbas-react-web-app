import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({ 
    todo,
}: {
    todo: { id: string; title: string };
}) {
    const dispatch = useDispatch();
    return (
      <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
        {todo.title}
        <div className="d-flex">
            <button onClick={() => dispatch(setTodo(todo))}
                id="wd-set-todo-click" className="btn btn-primary mx-1"> Edit </button> 
            <button onClick={() => dispatch(deleteTodo(todo.id))}
                id="wd-delete-todo-click" className="btn btn-danger mx-1"> Delete </button>
        </div>
    </li>
);}
  