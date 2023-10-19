export function ListItem({ completed, title, id, toggleTodo, deleteTodo }) {
  return (
    <li key={id} className="mb-3">
      <label htmlFor="" className="mr-3 text-xl">
        <input
          className="mr-3"
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button
        className="bg-rose-800 text-white px-4 py-2 rounded hover:bg-rose-600 transition-all duration-200 "
        onClick={() => deleteTodo(id)}
      >
        Delete
      </button>
    </li>
  );
}
