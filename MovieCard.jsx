import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie }) {
  const nav = useNavigate();

  return (
    <div className="col-md-6 col-lg-4 col-sm-6 col-12">
      <div
        className="card m-3 h-100 border-0"
        style={{
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(6px)",
          borderRadius: "14px",
          boxShadow: "0 0 18px rgba(0,255,255,0.15)"
        }}
      >
        <img
          src={movie.image}
          className="card-img-top"
          alt={movie.title}
          style={{
            height: "220px",
            objectFit: "cover",
            borderTopLeftRadius: "14px",
            borderTopRightRadius: "14px"
          }}
        />

        <div className="card-body p-3 text-center">
          <h6
            className="mb-1"
            style={{ color: "#00f5ff", fontWeight: "600" }}
          >
            {movie.title}
          </h6>

          <p className="mb-1" style={{ color: "#cfd8dc" }}>
            ⭐ Rating: <strong>{movie.rating}</strong>
          </p>

          <p
            className="small fst-italic"
            style={{ color: "#9efcff" }}
          >
            “Your review powers the AI”
          </p>

          <button
            className="btn btn-sm w-100"
            style={{
              background: "linear-gradient(90deg,#00f5ff,#008cff)",
              color: "#000",
              fontWeight: "600",
              borderRadius: "20px"
            }}
            onClick={() => nav(`/comment/${movie._id}`)}
          >
            Add Comment
          </button>
        </div>
      </div>
    </div>
  );
}
