function Journal() {
  return (
    <div>
      <div className="mb-4">
        <h1>Journal</h1>
        <p className="text-muted">Write your daily reflection and track mood.</p>
      </div>
      <div className="card shadow-sm">
        <div className="card-body">
          <div className="mb-3">
            <label className="form-label">Mood</label>
            <select className="form-select">
              <option>Happy</option>
              <option>Motivated</option>
              <option>Neutral</option>
              <option>Stressed</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Reflection</label>
            <textarea className="form-control" rows="6" placeholder="Write your thoughts here..."></textarea>
          </div>
          <button className="btn btn-primary">Save Entry</button>
        </div>
      </div>
    </div>
  );
}

export default Journal;
