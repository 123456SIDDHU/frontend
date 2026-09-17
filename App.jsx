import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Comment from "./pages/Comment";
import AdminLogin from "./pages/AdminLogin.jsx";
import AdminDashboard from "./pages/AdminDashboard";
import Upload from "./pages/Upload";
import Statistics from "./pages/Statistics";
import Analysis from "./pages/Analysis";
import AdminProtectedRoute from "./components/AdminProtectedRoute";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/comment/:id" element={<Comment />} />
        <Route path="/admin" element={ <AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminProtectedRoute> <AdminDashboard /> </AdminProtectedRoute>} />
        <Route path="/admin/upload" element={<AdminProtectedRoute> <Upload /> </AdminProtectedRoute>} />
        <Route path="/admin/stats" element={<AdminProtectedRoute> <Statistics /> </AdminProtectedRoute>} />
        <Route path="/admin/analysis/:id" element={<AdminProtectedRoute> <Analysis /> </AdminProtectedRoute>} />
      </Routes>
  );
}

export default App;
