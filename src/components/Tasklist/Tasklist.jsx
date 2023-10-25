import useLocalStorage from "./useLocalStorage";
import { TaskForm } from "./Form/TaskForm";
import { List } from "./Task/List";

const Tasklist = ({ inputRef }) => {
  const [todos, setTodos] = useLocalStorage("ITEMS", []);

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false,
        },
      ];
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <div className="w-full mt-8 tasklist p-8">
      <TaskForm onSubmit={addTodo} inputRef={inputRef} />
      <h1 className="text-3xl font-semibold tracking-wide mb-5">Task list</h1>
      <List todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default Tasklist;
