import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Analysis() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND}/api/admin/analysis/${id}`)
      .then(res => {
        setData(res.data);
      });
  }, []);

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #0f2027, #000)"
      }}
    >
      <div
        className="p-4"
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(8px)",
          borderRadius: "16px",
          boxShadow: "0 0 25px rgba(0,245,255,0.25)"
        }}
      >
        <h3
          className="text-center mb-2"
          style={{ color: "#00f5ff", letterSpacing: "1px" }}
        >
          Movie Analysis
        </h3>

        <p
          className="text-center mb-4 fst-italic"
          style={{ color: "#9efcff" }}
        >
          “Insights powered by sentiment intelligence”
        </p>

        <p style={{ color: "#cfd8dc" }}>
          Total Comments: <strong>{data.total}</strong>
        </p>

        <p style={{ color: "#9efcff" }}>
          Positive Comments: <strong>{data.positive}</strong>
        </p>

        <p style={{ color: "#ff8a80" }}>
          Negative Comments: <strong>{data.negative}</strong>
        </p>

        <p style={{ color: "#9efcff" }}>
          Positive %: <strong>{data.posPercent}%</strong>
        </p>

        <p style={{ color: "#ff8a80" }}>
          Negative %: <strong>{data.negPercent}%</strong>
        </p>

        <p
          className="mt-3 text-center"
          style={{
            color: "#00f5ff",
            fontSize: "18px",
            fontWeight: "600"
          }}
        >
          ⭐ Overall Rating: {data.rating}
        </p>
      </div>
    </div>
  );
}
