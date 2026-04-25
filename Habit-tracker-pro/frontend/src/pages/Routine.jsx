import { useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

export default function Routine() {
  const [taskName, setTaskName] = useState("");
  const [taskTime, setTaskTime] = useState("");

  const [tasks, setTasks] = useState([
    { name: "Workout", time: "6:00 AM" },
    { name: "Study", time: "7:00 PM" },
    { name: "Meditation", time: "9:00 PM" }
  ]);

  const [checks, setChecks] = useState({});

  const addTask = () => {
    if (!taskName.trim()) return;

    setTasks([
      ...tasks,
      { name: taskName, time: taskTime || "Anytime" }
    ]);

    setTaskName("");
    setTaskTime("");
  };

  const toggleCheck = (taskIndex, day) => {
    const key = `${taskIndex}-${day}`;

    setChecks({
      ...checks,
      [key]: !checks[key]
    });
  };

  const renderDays = () =>
    Array.from({ length: 28 }, (_, i) => i + 1);

  /* Graph by habits */
  const graphData = tasks.map((task, index) => {
    let done = 0;

    for (let d = 1; d <= 28; d++) {
      if (checks[`${index}-${d}`]) done++;
    }

    return {
      task: task.name,
      done
    };
  });

  return (
    <div className="container py-4">
      <h2 className="mb-4">📅 Elite Routine Tracker</h2>

      {/* Add */}
      <div className="main-card mb-4">
        <h4 className="mb-3">➕ Add Routine</h4>

        <div className="row g-3">
          <div className="col-md-5">
            <input
              className="form-control"
              placeholder="Task Name"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </div>

          <div className="col-md-4">
            <input
              type="time"
              className="form-control"
              value={taskTime}
              onChange={(e) => setTaskTime(e.target.value)}
            />
          </div>

          <div className="col-md-3">
            <button
              className="gradient-btn w-100"
              onClick={addTask}
            >
              Add Task
            </button>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="main-card mb-4" style={{ overflowX: "auto" }}>
        <h4 className="mb-3">✅ Habit Completion Grid</h4>

        <table className="table table-bordered text-center align-middle">
          <thead>
            <tr>
              <th>Habit</th>
              {renderDays().map((day) => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {tasks.map((task, taskIndex) => (
              <tr key={taskIndex}>
                <td
                  style={{
                    minWidth: "180px",
                    textAlign: "left",
                    fontWeight: "600"
                  }}
                >
                  {task.name}
                  <br />
                  <small>{task.time}</small>
                </td>

                {renderDays().map((day) => {
                  const key = `${taskIndex}-${day}`;

                  return (
                    <td key={day}>
                      <input
                        type="checkbox"
                        checked={checks[key] || false}
                        onChange={() =>
                          toggleCheck(taskIndex, day)
                        }
                      />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Better Graph */}
      <div className="main-card">
        <h4 className="mb-3">📊 Habit Performance Report</h4>
        <p>Most active vs least active habits</p>

        <div
          style={{
            width: "100%",
            maxWidth: "800px",
            height: 320,
            margin: "auto"
          }}
        >
          <ResponsiveContainer>
            <BarChart data={graphData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#334155"
              />
              <XAxis dataKey="task" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip />
              <Bar
                dataKey="done"
                fill="#22c55e"
                radius={[8, 8, 0, 0]}
                barSize={45}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}