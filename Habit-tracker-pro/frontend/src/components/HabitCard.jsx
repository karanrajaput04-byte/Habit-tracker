function HabitCard({ title, category, onEdit, onDelete }) {
  return (
    <div className="card mb-3">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5 className="card-title mb-1">{title}</h5>
          <p className="card-text text-muted">{category}</p>
        </div>
        <div>
          <button className="btn btn-sm btn-outline-secondary me-2" onClick={onEdit}>
            Edit
          </button>
          <button className="btn btn-sm btn-outline-danger" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default HabitCard;
