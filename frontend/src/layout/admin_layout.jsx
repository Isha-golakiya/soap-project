import AdminHeader from "../components/admin_header";
import Adminsidebar from "../components/admin_sidebar";
import { Outlet } from "react-router-dom";
const AdminLayout = () => {
    return (
        <>
            <div className="row container-fluid m-0 p-0  ">
                <div className="col-2 inline-block p-0" >
                    <div className="bg-body-tertiary vh-100">
                        <Adminsidebar />
                    </div>
                </div>
                <div className="col-10 p-0">
                    <div className="bg-body-tertiary">
                        <AdminHeader />
                    </div>
                    <Outlet />
                </div>
            </div>

        </>
    )
}
export default AdminLayout;