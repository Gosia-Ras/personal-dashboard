// TaskFilter.js
function TaskFilter({ activeFilter, onFilterChange }) {
  function handleFilterChange(event) {
    const filterName = event.target.dataset.filter;
    onFilterChange(filterName);
  }

  return (
    <div className="filters flex flex-row gap-2 my-5">
      <button
        type="button"
        className="border-2 rounded-lg p-2 hover:bg-teal-700 transition-all duration-200"
        aria-pressed={activeFilter === "All"}
        data-filter="All"
        onClick={handleFilterChange}
      >
        Show all tasks
      </button>
      <button
        type="button"
        className="border-2 rounded-lg p-2 hover:bg-teal-700 transition-all duration-200"
        aria-pressed={activeFilter === "Active"}
        data-filter="Active"
        onClick={handleFilterChange}
      >
        Show active tasks
      </button>
      <button
        type="button"
        className="border-2 rounded-lg p-2 hover:bg-teal-700 transition-all duration-200"
        aria-pressed={activeFilter === "Completed"}
        data-filter="Completed"
        onClick={handleFilterChange}
      >
        Show completed tasks
      </button>
    </div>
  );
}

export default TaskFilter;
