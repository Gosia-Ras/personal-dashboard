import { ListItem } from "./ListItem";

export function List({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && (
        <p className="text-sm">There's nothing on your list yet :)</p>
      )}
      {todos.map((todo) => {
        return (
          <ListItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
