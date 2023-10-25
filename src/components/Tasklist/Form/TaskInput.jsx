
function TaskInput({ value, onChange, inputRef }) {
  return (
    <div className="form-row flex flex-col mb-3">
      <label className="text-xl mb-3">Add New Item</label>
      <input
        ref={inputRef}
        className="text-slate-900 p-2 focus:border-cyan-600 focus:border-2"
        type="text"
        id="item"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default TaskInput;
