import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";

export default function Stats() {
  const pieData = [
    { name: "Study", value: 40, color: "#3b82f6" },
    { name: "Fitness", value: 25, color: "#22c55e" },
    { name: "Spiritual", value: 20, color: "#a855f7" },
    { name: "Growth", value: 15, color: "#f59e0b" }
  ];

  const weekData = [
    { day: "Mon", score: 45 },
    { day: "Tue", score: 62 },
    { day: "Wed", score: 58 },
    { day: "Thu", score: 70 },
    { day: "Fri", score: 55 },
    { day: "Sat", score: 82 },
    { day: "Sun", score: 76 }
  ];

  // 90 days
  const heatmap = Array.from({ length: 90 }, (_, i) =>
  Math.random() > 0.45 ? 1 : 0
);
  return (
    <div className="container py-4">
      <h2 className="mb-4">📊 Performance Dashboard</h2>

      {/* Top Cards */}
      <div className="row g-3">
        <div className="col-md-3">
          <div className="main-card text-center">
            <h6>🔥 Current Streak</h6>
            <h2>12</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="main-card text-center">
            <h6>🏆 Best Streak</h6>
            <h2>29</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="main-card text-center">
            <h6>📈 Completion</h6>
            <h2>84%</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="main-card text-center">
            <h6>⭐ Level</h6>
            <h2>Pro</h2>
          </div>
        </div>
      </div>

      {/* Main Screen */}
      <div className="row g-4 mt-2">

        {/* Left Pie */}
        <div className="col-md-5">
          <div className="main-card">
            <h4 className="mb-3">🧩 Habit Categories</h4>

            <div style={{ height: 260 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    outerRadius={95}
                    innerRadius={55}
                    paddingAngle={3}
                  >
                    {pieData.map((item, i) => (
                      <Cell key={i} fill={item.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Legend */}
            <div className="mt-2">
              {pieData.map((item, i) => (
                <div
                  key={i}
                  className="d-flex justify-content-between align-items-center mb-2"
                >
                  <div className="d-flex align-items-center gap-2">
                    <div
                      style={{
                        width: "14px",
                        height: "14px",
                        borderRadius: "4px",
                        background: item.color
                      }}
                    ></div>
                    <span>{item.name}</span>
                  </div>

                  <strong>{item.value}%</strong>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="col-md-7">

          {/* Heatmap */}
          <div className="main-card mb-4">
            <h4 className="mb-3">📅 Consistency Report</h4>
            <p>Last 90 Days Contribution</p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(20,16px)",
                gap: "5px"
              }}
            >
              {heatmap.map((item, i) => (
                <div
                  key={i}
                  title={`Day ${i + 1}`}
                  style={{
                    width: "16px",
                    height: "16px",
                    borderRadius: "3px",
                    background: item ? "#22c55e" : "#1e293b"
                  }}
                ></div>
              ))}
            </div>

            <div className="mt-3 d-flex gap-2 align-items-center">
              <small>Less</small>
              <div style={{width:12,height:12,background:"#1e293b"}}></div>
              <div style={{width:12,height:12,background:"#22c55e"}}></div>
              <small>More</small>
            </div>
          </div>

          {/* Graph */}
          <div className="main-card">
            <h4 className="mb-2">📈 Weekly Productivity</h4>

            <div style={{ height: 220 }}>
              <ResponsiveContainer>
                <LineChart data={weekData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="day" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="#22c55e"
                    strokeWidth={4}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="main-card mt-4 text-center">
        <h4>💡 Insight</h4>
        <p className="mb-0">
          Your consistency is strong. Keep momentum and improve weekdays.
        </p>
      </div>
    </div>
  );
}