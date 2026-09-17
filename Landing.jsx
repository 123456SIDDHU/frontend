import { useNavigate } from "react-router-dom";

export default function Landing() {
  const nav = useNavigate();

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
          borderRadius: "18px",
          boxShadow: "0 0 30px rgba(0,245,255,0.3)"
        }}
      >
        <h2
          className="mb-3"
          style={{
            color: "#00f5ff",
            letterSpacing: "1.5px",
            fontWeight: "600"
          }}
        >
          🎬 AI Movie Review System
        </h2>

        <p
          className="mb-4 fst-italic"
          style={{ color: "#9efcff" }}
        >
          “Experience movies through intelligent ratings”
        </p>

        <button
          className="btn btn-lg w-100 mb-3"
          style={{
            background: "linear-gradient(90deg,#00f5ff,#008cff)",
            color: "#000",
            fontWeight: "600",
            borderRadius: "30px"
          }}
          onClick={() => nav("/home")}
        >
          Continue as Guest
        </button>

        <button
          className="btn btn-lg w-100"
          style={{
            background: "linear-gradient(90deg,#9efcff,#00f5ff)",
            color: "#000",
            fontWeight: "600",
            borderRadius: "30px"
          }}
          onClick={() => nav("/admin")}
        >
          Admin Login
        </button>
      </div>
    </div>
  );
}
