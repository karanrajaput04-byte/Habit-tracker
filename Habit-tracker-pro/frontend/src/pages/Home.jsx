import React, { useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip
} from "recharts";

export default function Home() {
  const [habits, setHabits] = useState([
    { name: "Workout", time: "6:00 AM", done: true },
    { name: "Study 2 Hours", time: "7:00 PM", done: false },
    { name: "Meditation", time: "9:00 PM", done: true }
  ]);

  const weeklyData = [
    { day: "Mon", value: 3 },
    { day: "Tue", value: 5 },
    { day: "Wed", value: 4 },
    { day: "Thu", value: 6 },
    { day: "Fri", value: 2 },
    { day: "Sat", value: 7 },
    { day: "Sun", value: 5 }
  ];

  const completed = habits.filter((h) => h.done).length;
  const percent = Math.round((completed / habits.length) * 100);

  return (
    <div className="container py-4">

      {/* HERO */}
      <div className="main-card mb-4 p-4">
        <h1 className="fw-bold mb-2 text-info">
          Welcome Back, Prajwal 👋
        </h1>

        <p className="text-light opacity-75 mb-3">
          Build discipline daily. Success follows consistency.
        </p>

        <div className="progress" style={{ height: "10px" }}>
          <div
            className="progress-bar bg-info"
            style={{ width: `${percent}%` }}
          ></div>
        </div>

        <small className="text-light opacity-75">
          Today Progress {percent}%
        </small>
      </div>

      {/* STATS */}
      <div className="row g-4 mb-4">
        {[
          ["🔥 Current Streak", "12"],
          ["🏆 Best Streak", "29"],
          ["✅ Completion", `${percent}%`],
          ["🎖️ Badges", "5"]
        ].map((item, i) => (
          <div className="col-md-3" key={i}>
            <div className="main-card text-center p-4 h-100">
              <h6 className="text-light opacity-75">{item[0]}</h6>
              <h2 className="text-info fw-bold">{item[1]}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* MISSION + RING */}
      <div className="row g-4 mb-4">

        <div className="col-md-6">
          <div className="main-card p-4 h-100">
            <h4 className="mb-3">🎯 Today's Main Focus</h4>
            <h3 className="text-info">Study 2 Hours</h3>
            <p className="text-light opacity-75">7:00 PM</p>

            <button className="gradient-btn mt-2">
              Start Focus
            </button>
          </div>
        </div>

        <div className="col-md-6">
          <div className="main-card p-4 text-center h-100">
            <h4 className="mb-3">⚡ Productivity Score</h4>

            <div
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                margin: "auto",
                background: `conic-gradient(#22c55e ${percent}%, #23354d 0%)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <div
                style={{
                  width: "110px",
                  height: "110px",
                  borderRadius: "50%",
                  background: "#0f172a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "28px",
                  fontWeight: "700"
                }}
              >
                {percent}%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HABITS */}
      <div className="main-card p-4 mb-4">
        <div className="d-flex justify-content-between mb-3">
          <h4>Today's Habits</h4>
          <button className="gradient-btn">+ Add</button>
        </div>

        {habits.map((habit, index) => (
          <div
            key={index}
            className="d-flex justify-content-between align-items-center p-3 mb-3 rounded"
            style={{
              background: "#1e2d45"
            }}
          >
            <div>
              <h6 className="mb-1">{habit.name}</h6>
              <small className="text-light opacity-75">
                {habit.time}
              </small>
            </div>

            <span
              className={`badge ${
                habit.done ? "bg-success" : "bg-warning text-dark"
              }`}
            >
              {habit.done ? "Completed" : "Pending"}
            </span>
          </div>
        ))}
      </div>

      {/* GRAPH + BADGE */}
      <div className="row g-4">

        <div className="col-md-8">
          <div className="main-card p-4 h-100">
            <h4 className="mb-3">📈 Weekly Performance</h4>

            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <BarChart data={weeklyData}>
                  <XAxis dataKey="day" stroke="#9fb3c8" />
                  <Tooltip />
                  <Bar
                    dataKey="value"
                    fill="#2f7cf6"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="main-card p-4 h-100">
            <h4 className="mb-3">🏆 Next Badge</h4>

            <h5 className="text-warning">
              21 Day Warrior
            </h5>

            <p className="text-light opacity-75">
              Complete 3 more active days to unlock.
            </p>

            <div className="progress">
              <div
                className="progress-bar bg-warning"
                style={{ width: "82%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="text-center mt-5 text-light opacity-50">
        Made with 💙 by Prajwal | Build Discipline Daily 🚀
      </div>
    </div>
  );
}