import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <h2></h2>
      <Outlet />
    </div>
  );
};

export default AuthLayout;