import axios from "axios";
import { useState } from "react";

export default function Upload() {
  const [movie, setMovie] = useState({});

  const submit = async () => {
    try{
       await axios.post(
      `${import.meta.env.VITE_BACKEND}/api/admin/movie`,
      movie
    );
    alert("Movie added");
    }
    catch(err){
      console.log(err.message);
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
          Upload Movie
        </h3>

        <p
          className="text-center mb-4 fst-italic"
          style={{ color: "#9efcff" }}
        >
          “Add new content to the AI system”
        </p>

        <input
          className="form-control mb-3"
          placeholder="Movie Name"
          onChange={e =>
            setMovie({ ...movie, title: e.target.value })
          }
          style={{
            background: "rgba(255,255,255,0.15)",
            color: "#fff",
            border: "none"
          }}
        />

        <input
          className="form-control mb-3"
          placeholder="Image URL"
          onChange={e =>
            setMovie({ ...movie, image: e.target.value })
          }
          style={{
            background: "rgba(255,255,255,0.15)",
            color: "#fff",
            border: "none"
          }}
        />

        <input
          className="form-control mb-3"
          placeholder="Release Date"
          onChange={e =>
            setMovie({ ...movie, releaseDate: e.target.value })
          }
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
          onClick={submit}
        >
          Upload Movie
        </button>
      </div>
    </div>
  );
}
