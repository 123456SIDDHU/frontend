import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND}/api/movies`)
      .then(res => setMovies(res.data));
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
        <h2
          className="text-center mb-2"
          style={{ color: "#00f5ff", letterSpacing: "1px" }}
        >
          🎬 AI Movie Review System
        </h2>

        <p
          className="text-center mb-4 fst-italic"
          style={{ color: "#9efcff" }}
        >
          “Future ratings driven by artificial intelligence”
        </p>

        <div className="row  gy-3">
          {movies.map(m => (
            <MovieCard key={m._id} movie={m} />
          ))}
        </div>
      </div>
    </div>
  );
}
