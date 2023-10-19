import { useState } from "react";

export function TodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  }
  return (
    <form action="" onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row flex flex-col">
        <label htmlFor="">New Item</label>
        <input
          className="text-slate-900 p-2"
          type="text"
          id="item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
      </div>
      <button className="bg-green-900 text-white p-3">Add</button>
    </form>
  );
}
