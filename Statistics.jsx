import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Statistics() {
  const [movies, setMovies] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND}/api/movies`)
      .then(res => setMovies(res.data))
      .catch((err)=>console.log(err.message));
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #0f2027, #000)",
        padding: "30px 0"
      }}
    >
      <div className="container">
        <h3
          className="text-center mb-2"
          style={{ color: "#00f5ff", letterSpacing: "1px" }}
        >
          📊 Movie Statistics
        </h3>

        <p
          className="text-center mb-4 fst-italic"
          style={{ color: "#9efcff" }}
        >
          “Analyze audience sentiment with AI insights”
        </p>

        <div className="row gy-3">
          {movies.map(m => (
            <div key={m._id} className="col-md-4 col-sm-6 col-12">
              <div
                className="card m-3 border-0 h-100"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(6px)",
                  borderRadius: "14px",
                  boxShadow: "0 0 20px rgba(0,245,255,0.2)"
                }}
              >
                <img
                  src={m.image}
                  className="card-img-top"
                  alt={m.title}
                  style={{
                    height: "220px",
                    objectFit: "cover",
                    borderTopLeftRadius: "14px",
                    borderTopRightRadius: "14px"
                  }}
                />

                <div className="card-body text-center">
                  <p
                    className="card-text mb-2"
                    style={{ color: "#cfd8dc", fontWeight: "600" }}
                  >
                    {m.title}
                  </p>

                  <button
                    className="btn btn-sm w-100"
                    style={{
                      background: "linear-gradient(90deg,#00f5ff,#008cff)",
                      color: "#000",
                      fontWeight: "600",
                      borderRadius: "20px"
                    }}
                    onClick={() => nav(`/admin/analysis/${m._id}`)}
                  >
                    View Analysis
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
