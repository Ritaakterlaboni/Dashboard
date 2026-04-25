import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;