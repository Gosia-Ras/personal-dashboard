import { useState } from "react";

export function TodoForm({ onSubmit, inputRef }) {
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
        <label className="text-xl mb-3">Add New Item</label>
        <input
          ref={inputRef}
          className="text-slate-900 p-2 focus:border-cyan-600 focus:border-2"
          type="text"
          id="item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
      </div>
      <button className="bg-teal-700 text-white px-4 py-2 rounded hover:bg-teal-500 transition-all duration-200 mb-3">
        Add
      </button>
    </form>
  );
}
