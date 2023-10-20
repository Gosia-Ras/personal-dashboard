import { ListItem } from "./ListItem";

export function List({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {(() => {
        if (todos.length === 0) {
          return (
            <p className="text-sm mb-5">There's nothing on your list yet :)</p>
          );
        } else if (todos.length === 1) {
          return (
            <p className="text-sm mb-5">
              You have {todos.length} task to complete
            </p>
          );
        } else {
          return (
            <p className="text-sm mb-5">
              You have {todos.length} tasks to complete
            </p>
          );
        }
      })()}

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
