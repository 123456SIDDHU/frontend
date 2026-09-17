import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

export default function AdminProtectedRoute({ children }) {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND}/api/admin/islogin`,
          { withCredentials: true }
        );
        setIsAuth(res.data.islogin);
      } catch {
        setIsAuth(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuth === null) return null; // loading

  return isAuth ? children : <Navigate to="/admin" />;
}
