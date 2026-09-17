import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AdminLogin() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND}/api/admin/login`,
        { email, password },
        { withCredentials: true }
      );

      if (res.data.login) {
        alert(res.data.msg);
        nav("/admin/dashboard");
      } else {
        alert(res.data.msg);
      }
    } catch (err) {
      alert(err.message);
    }
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
        className="p-4 position-relative"
        style={{
          width: "100%",
          maxWidth: "380px",
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(8px)",
          borderRadius: "16px",
          boxShadow: "0 0 25px rgba(0,245,255,0.25)"
        }}
      >
        {/* 🔙 Back Button */}
        <button
          className="btn btn-sm position-absolute"
          style={{
            top: "10px",
            left: "10px",
            color: "#9efcff",
            border: "1px solid #9efcff",
            background: "transparent",
            borderRadius: "20px"
          }}
          onClick={() => nav("/")}
        >
          ← Home
        </button>

        <h3
          className="text-center mb-2 mt-3"
          style={{ color: "#00f5ff", letterSpacing: "1px" }}
        >
          Admin Login
        </h3>

        <p
          className="text-center mb-4 fst-italic"
          style={{ color: "#9efcff" }}
        >
          “Authorized access only”
        </p>

        <input
          className="form-control mb-3"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
          style={{
            background: "rgba(255,255,255,0.15)",
            color: "#fff",
            border: "none"
          }}
        />

        <input
          className="form-control mb-3"
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
          style={{
            background: "rgba(255,255,255,0.15)",
            color: "#fff",
            border: "none"
          }}
        />

        <button
          className="btn w-100"
          style={{
            background: "linear-gradient(90deg,#00f5ff,#008cff)",
            color: "#000",
            fontWeight: "600",
            borderRadius: "30px"
          }}
          onClick={login}
        >
          Login
        </button>
      </div>
    </div>
  );
}
