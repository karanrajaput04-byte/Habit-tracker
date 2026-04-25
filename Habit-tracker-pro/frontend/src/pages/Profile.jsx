import { useState, useEffect } from "react";

export default function Profile() {
  const defaultUser = {
    name: "",
    email: "",
    mobile: "",
    age: "",
    height: "",
    weight: "",
    bio: "",
    photo: "",
    joined: "April 2026"
  };

  const [user, setUser] = useState(defaultUser);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("profileUser");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const saveProfile = () => {
    localStorage.setItem("profileUser", JSON.stringify(user));
    setShowModal(false);
    alert("✅ Profile Updated");
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const img = URL.createObjectURL(file);
      setUser({ ...user, photo: img });
      alert("📸 Photo selected. You can reselect if needed.");
    }
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">👤 My Profile</h2>

      {/* Cover */}
<div
  className="main-card mb-4 cover-banner"
  style={{
    height: "220px",
    position: "relative",
    zIndex: "1",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    background:
      "linear-gradient(90deg,#2563eb,#7c3aed,#06b6d4)"
  }}
>
  <div style={{ color: "white" }}>
    <h1 style={{ fontWeight: "800", marginBottom: "8px" }}>
      Welcome Back, Prajwal 🚀
    </h1>

    <p style={{ color: "#e0f2fe", fontSize: "16px" }}>
      Build discipline daily. Become unstoppable.
    </p>
  </div>
</div>

      <div className="row g-4">
        {/* Left */}
        <div className="col-md-4">
<div
 className="main-card text-center"
 style={{
   marginTop:"-90px",
   position:"relative",
   zIndex:"5"
 }}
>            <img
              src={
                user.photo
                  ? user.photo
                  : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              }
              alt="profile"
              style={{
                width: "140px",
                height: "140px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "5px solid white"
              }}
            />

            <h3 className="mt-3">{user.name || "Your Name"}</h3>
            <p>{user.bio || "Build yourself daily 🔥"}</p>

            <div className="mb-2">
              <span className="badge bg-primary me-2">⭐ Pro Level</span>
              <span className="badge bg-success">Joined {user.joined}</span>
            </div>

            <button
              className="gradient-btn mt-2"
              onClick={() => setShowModal(true)}
            >
              ✏ Edit Profile
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="col-md-8">
          <div className="main-card">
            <h4>📋 Personal Details</h4>

            <div className="row mt-3">
              <div className="col-md-6">
                <p>📧 {user.email || "-"}</p>
                <p>📱 {user.mobile || "-"}</p>
                <p>🎂 Age: {user.age || "-"}</p>
              </div>

              <div className="col-md-6">
                <p>📏 Height: {user.height || "-"}</p>
                <p>⚖ Weight: {user.weight || "-"}</p>
                <p>🔥 Streak: 12 Days</p>
              </div>
            </div>
          </div>

          {/* Mini Stats */}
          <div className="row g-3 mt-1">
            <div className="col-md-4">
              <div className="main-card text-center">
                <h5>✅ Tasks</h5>
                <h3>58</h3>
              </div>
            </div>

            <div className="col-md-4">
              <div className="main-card text-center">
                <h5>🏆 Badges</h5>
                <h3>5</h3>
              </div>
            </div>

            <div className="col-md-4">
              <div className="main-card text-center">
                <h5>📈 Growth</h5>
                <h3>87%</h3>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="main-card mt-3">
            <h4>🏅 Achievements</h4>
            <div className="d-flex gap-2 flex-wrap mt-3">
              <span className="badge bg-warning text-dark">🔥 7 Days</span>
              <span className="badge bg-info">🏆 21 Days</span>
              <span className="badge bg-danger">👑 90 Days</span>
              <span className="badge bg-success">✅ 50 Tasks</span>
              <span className="badge bg-secondary">📚 Habit Master</span>
            </div>
          </div>
        </div>
      </div>
      

      {/* Modal */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.75)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999
          }}
        >
          <div
            className="main-card"
            style={{
              width: "95%",
              maxWidth: "620px",
              maxHeight: "90vh",
              overflowY: "auto"
            }}
          >
            <h3>Edit Profile</h3>

            <label>👤 Full Name</label>
            <input className="form-control mb-2" name="name" value={user.name} onChange={handleChange} />

            <label>📧 Email</label>
            <input className="form-control mb-2" name="email" value={user.email} onChange={handleChange} />

            <label>📱 Mobile</label>
            <input className="form-control mb-2" name="mobile" value={user.mobile} onChange={handleChange} />

            <label>🎂 Age</label>
            <input className="form-control mb-2" name="age" value={user.age} onChange={handleChange} />

            <label>📏 Height</label>
            <input className="form-control mb-2" name="height" value={user.height} onChange={handleChange} />

            <label>⚖ Weight</label>
            <input className="form-control mb-2" name="weight" value={user.weight} onChange={handleChange} />

            <label>📝 Bio</label>
            <textarea className="form-control mb-2" name="bio" value={user.bio} onChange={handleChange}></textarea>

            <label>🖼 Change Profile Photo</label>
            <input
              type="file"
              className="form-control mb-3"
              accept="image/*"
              onChange={handlePhotoUpload}
            />

            <small className="text-info">
              Tip: choose square image for best fit.
            </small>

            <div className="d-flex gap-2 mt-3">
              <button className="gradient-btn" onClick={saveProfile}>
                Save
              </button>

              <button
                className="btn btn-danger"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}