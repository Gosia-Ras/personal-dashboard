import { ListItem } from "./ListItem";
import { useState } from "react";

export function List({ todos, toggleTodo, deleteTodo }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const uncompletedTasks = todos.filter((todo) => !todo.completed).length;

  const filterMap = {
    All: () => true,
    Active: (todo) => !todo.completed,
    Completed: (todo) => todo.completed,
  };

  function filterTasks(event) {
    const filterName = event.target.dataset.filter; // Use data attributes to identify which filter is clicked
    setActiveFilter(filterName);
  }

  const filteredTodos = todos.filter(filterMap[activeFilter]);

  return (
    <>
      <div className="filters flex flex-row gap-2 my-5">
        <button
          type="button"
          className="border-2 rounded p-2 hover:bg-teal-700 transition-all duration-200"
          aria-pressed={activeFilter === "All"}
          data-filter="All"
          onClick={filterTasks}
        >
          Show all tasks
        </button>
        <button
          type="button"
          className="border-2 rounded p-2 hover:bg-teal-700 transition-all duration-200"
          aria-pressed={activeFilter === "Active"}
          data-filter="Active"
          onClick={filterTasks}
        >
          Show active tasks
        </button>
        <button
          type="button"
          className="border-2 rounded p-2 hover:bg-teal-700 transition-all duration-200"
          aria-pressed={activeFilter === "Completed"}
          data-filter="Completed"
          onClick={filterTasks}
        >
          Show completed tasks
        </button>
      </div>
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
