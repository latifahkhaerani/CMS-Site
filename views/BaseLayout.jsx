import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function BaseLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Sidebar />
      <Outlet />
    </div>
  );
}
