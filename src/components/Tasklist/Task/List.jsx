import { ListItem } from "./ListItem";
import { useState } from "react";
import TaskFilter from "./TaskFilter";

export function List({ todos, toggleTodo, deleteTodo }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const uncompletedTasks = todos.filter((todo) => !todo.completed).length;

  const filterMap = {
    All: () => true,
    Active: (todo) => !todo.completed,
    Completed: (todo) => todo.completed,
  };

  const filteredTodos = todos.filter(filterMap[activeFilter]);

  return (
    <>
      <TaskFilter
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
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

        {filteredTodos.map((todo) => {
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
    </>
  );
}
