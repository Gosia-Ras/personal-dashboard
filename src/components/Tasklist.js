const tasks = [
  {
    name: "Design Meeting",
    date: "2023-01-01",
    status: "Completed",
  },
  {
    name: "Develop Prototype",
    date: "2023-01-05",
    status: "In Progress",
  },
  {
    name: "Client Feedback Session",
    date: "2023-01-10",
    status: "Pending",
  },
  {
    name: "Bug Fixing",
    date: "2023-01-15",
    status: "In Progress",
  },
  {
    name: "Update Documentation",
    date: "2023-01-20",
    status: "Pending",
  },
  {
    name: "Onboard New Team Member",
    date: "2023-01-25",
    status: "Completed",
  },
  {
    name: "Internal Review",
    date: "2023-02-01",
    status: "In Progress",
  },
];

const Tasklist = () => {
  return (
    <div className="w-full mt-16 lg:px-4 justify-center">
      <h2>Task list</h2>
      <ul role="list" className="divide-y divide-gray-100">
        {tasks.map((task) => (
          <li key={task.name} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {task.name}
                </p>
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {task.date}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {task.status}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasklist;
