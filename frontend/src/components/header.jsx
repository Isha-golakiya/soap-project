import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap';
import logo from '../images/logo.jpg';
import { FaCartShopping, FaUser } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { showloginmodal } from '../store/slice/login_slice';
import { logoutUser } from '../store/slice/user_slice';
import UserProfileIcon from './profileimg';
import { NavLink } from 'react-router-dom';
import { Badge,Dropdown } from 'react-bootstrap';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <Navbar expand="lg" className="bg-body-light">
      <Container fluid>
        <Navbar.Brand href="#" className="logo">
          <img src={logo} alt="Logo" width={105} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
        <Navbar.Offcanvas id="offcanvasNavbar-expand-lg" aria-labelledby="offcanvasNavbarLabel-expand-lg" placement="end" backdrop="static" className="offcanvas-custom">
          <Offcanvas.Header closeButton style={{ borderBottom: '1px solid #4e3c31' }}>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg" className="w-100 text-start" style={{ color: '#4e3c31' }}>
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="align-items-center">
            <Nav className="justify-content-center flex-grow-1">
              <Nav.Link as={NavLink} to="/" style={{ color: '#4e3c31', fontSize: '22px' }} className='menu'>Home</Nav.Link>
              <Nav.Link as={NavLink} to="/about" style={{ color: '#4e3c31', fontSize: '22px' }} className='menu'>About</Nav.Link>
              <Nav.Link as={NavLink} to="/shop" style={{ color: '#4e3c31', fontSize: '22px' }} className='menu'>Shop</Nav.Link>
              <Nav.Link as={NavLink} to="/contact" style={{ color: '#4e3c31', fontSize: '22px' }} className='menu'>Contact</Nav.Link>
            </Nav>
            <div className="d-flex align-items-center gap-3" style={{ color: '#4e3c31' }}>

              {user ? (
                <Dropdown>
                  <Dropdown.Toggle variant="white" id="dropdown-basic" style={{ display: 'flex', alignItems: 'center',border: 'none', }}>
                    <UserProfileIcon />
                    <span style={{ marginLeft: '8px', color: '#4e3c31', fontSize: '22px' }}>
                      {user?.firstname}
                    </span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => dispatch(logoutUser())} style={{backgroundColor:'white',fontSize:'18px',color:'#4e3c31',border:'none'}}> Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <div className="icon1" onClick={() => dispatch(showloginmodal())}><FaUser /> </div>
              )}
              <Nav.Link as={NavLink} to="/cart" className="position-relative ">
                <FaCartShopping style={{ fontSize: "21px" }} className='cart' />
                {cartItems.length > 0 && (
                  <Badge bg="dark" pill className="position-absolute top-0 start-100 translate-middle">
                    {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                  </Badge>
                )}
              </Nav.Link>

            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
