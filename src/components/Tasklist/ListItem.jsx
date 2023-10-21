import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export function ListItem({ completed, title, id, toggleTodo, deleteTodo }) {
  return (
    <li key={id} className="mb-3 py-3 flex flex-row justify-between item">
      <label htmlFor="" className="mr-3 text-xl flex items-center">
        <FontAwesomeIcon
          icon={completed ? faCheckCircle : faCircle}
          className={completed ? "text-green-500 mr-3" : "text-gray-500 mr-3"}
          onClick={() => toggleTodo(id, !completed)}
          style={{ cursor: "pointer" }}
        />
        <span className={completed ? "line-through" : ""}>{title}</span>
      </label>
      <button
        className="bg-rose-800 text-white px-4 py-2 rounded hover:bg-rose-600 transition-all duration-300"
        onClick={() => deleteTodo(id)}
      >
        Delete
      </button>
    </li>
  );
}
