import { Link } from "react-router-dom";
const Adminsidebar = () => {
    return (
        <div className="navbar">
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
        </button>
        <div className="offcanvas-lg offcanvas-start " id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" ></button>
            </div>
            <div className="offcanvas-body ">
                <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
                    <li className="nav-item">
                        <Link className='nav-link text-dark' to='/admin'>Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link text-dark' to='/admin/user'>User</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link text-dark' to='/admin/products'>Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link text-dark' to='/admin/settings'>Settings</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    
    

    )
}
export default Adminsidebar;