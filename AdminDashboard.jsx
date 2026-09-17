import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const nav = useNavigate();

  const logout = async () => {
    await axios.post(
      `${import.meta.env.VITE_BACKEND}/api/admin/logout`,
      {},
      { withCredentials: true }
    );
    nav("/admin");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #0f2027, #000)"
      }}
    >
      <div
        className="text-center p-5"
        style={{
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(8px)",
          borderRadius: "16px",
          boxShadow: "0 0 25px rgba(0,245,255,0.25)"
        }}
      >
        <h3 style={{ color: "#00f5ff" }}>Admin Control Panel</h3>

        <button
          className="btn btn-lg w-100 my-3"
          style={{
            background: "linear-gradient(90deg,#00f5ff,#008cff)",
            color: "#000",
            fontWeight: "600",
            borderRadius: "30px"
          }}
          onClick={() => nav("/admin/upload")}
        >
          Upload Movie
        </button>

        <button
          className="btn btn-lg w-100 mb-3"
          style={{
            background: "linear-gradient(90deg,#9efcff,#00f5ff)",
            color: "#000",
            fontWeight: "600",
            borderRadius: "30px"
          }}
          onClick={() => nav("/admin/stats")}
        >
          View Statistics
        </button>

        {/* 🔴 LOGOUT BUTTON */}
        <button
          className="btn btn-sm w-100"
          style={{
            background: "transparent",
            color: "#ff8a80",
            border: "1px solid #ff8a80",
            borderRadius: "20px"
          }}
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
