import { ListItem } from "./ListItem";

export function List({ todos, toggleTodo, deleteTodo }) {
  const uncompletedTasks = todos.filter((todo) => !todo.completed).length;

  return (
    <ul className="list">
      {(() => {
        if (uncompletedTasks === 0) {
          return (
            <p className="text-sm mb-5">
              You don't have any uncompleted tasks :)
            </p>
          );
        } else if (uncompletedTasks === 1) {
          return (
            <p className="text-sm mb-5">
              You have {uncompletedTasks} task to complete
            </p>
          );
        } else {
          return (
            <p className="text-sm mb-5">
              You have {uncompletedTasks} tasks to complete
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
