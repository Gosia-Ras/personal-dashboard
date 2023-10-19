export function ListItem({ completed, title, id, toggleTodo, deleteTodo }) {
  return (
    <li key={id} className="mb-3">
      <label htmlFor="" className="mr-3">
        <input
          className="mr-3"
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button
        className="bg-red-500 text-white p-2"
        onClick={() => deleteTodo(id)}
      >
        Delete
      </button>
    </li>
  );
}
