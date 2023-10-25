import { useState } from "react";
import TaskInput from "./TaskInput";

export function TaskForm({ onSubmit, inputRef }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  }
  return (
    <form action="" onSubmit={handleSubmit} className="new-item-form mb-8">
      <div className="form-row flex flex-col mb-3">
        <TaskInput
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          inputRef={inputRef}
        />
      </div>
      <button className=" border-2 rounded-lg p-2 hover:bg-teal-700 transition-all duration-200">
        Add
      </button>
    </form>
  );
}
