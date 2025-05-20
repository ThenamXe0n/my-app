import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  return (
    <section className="h-screen flex  w-screen ">
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </section>
  );
};

export default DashboardLayout;
