import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CalendarPage() {
  const [date, setDate] = useState(new Date());
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([
    "🔥 5 Day Login Streak",
    "📘 Study React at 7 PM",
    "💧 Drink 3L Water Today",
  ]);

  const addNote = () => {
    if (!note) return;
    setNotes([...notes, note]);
    setNote("");
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">📅 Progress Calendar</h2>

      <div className="row g-4">
        {/* Calendar */}
        <div className="col-md-7">
          <div className="main-card">
            <Calendar
              onChange={setDate}
              value={date}
            />

            <div className="mt-4">
              <h5>Selected Date:</h5>
              <p>{date.toDateString()}</p>
            </div>

            <div className="mt-4">
              <h5>🔥 Current Login Streak</h5>
              <h3>7 Days</h3>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="col-md-5">
          <div className="main-card">
            <h4>📝 Add Reminder</h4>

            <input
              type="text"
              className="form-control mt-3"
              placeholder="Enter reminder note..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />

            <button className="gradient-btn mt-3" onClick={addNote}>
              + Add Note
            </button>
          </div>

          <div className="main-card mt-4">
            <h4>📌 Notes & Events</h4>

            {notes.map((item, index) => (
              <div key={index} className="list-item">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}