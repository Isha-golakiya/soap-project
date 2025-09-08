import { Routes, Route } from "react-router-dom";
import AdminLayout from "../layout/admin_layout";
import Dashboard from "../pages/dashboard";
import Settings from "../pages/settings";
import Products from "../pages/products";
import User from "../pages/user";
import ProtectedAdminRoute from "../components/adminprotect"; 

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<ProtectedAdminRoute />}>
        <Route element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="user" element={<User />} />
          <Route path="settings" element={<Settings />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
