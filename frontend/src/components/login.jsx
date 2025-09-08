import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Container } from 'react-bootstrap';
import logo from '../images/logo.jpg';
import { showregistermodal } from "../store/slice/register_slice";
import { hideloginmodal } from '../store/slice/login_slice';
import { setUser } from '../store/slice/user_slice'; 
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const loginpage = useSelector((state) => state.login.loginmodal);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/login', {
        email,
        password
      });

      const token = res.data.data.token;
      const user = res.data.data.data;

      console.log("Token received");
      console.log("User data:", user);

      if (!token) {
        console.log("Token not received from server");
      }

      localStorage.setItem('token', token);
      console.log("Stored token");

      dispatch(setUser(user)); 

      alert('Login successful');
      dispatch(hideloginmodal());
    } catch (err) {
      console.error(err.response.data || err.message);
      alert(err.response.data.data.message || 'Login failed');
    }
  };

  return (
    <Modal backdrop="static" show={loginpage} onHide={() => dispatch(hideloginmodal())} size="md" aria-labelledby="contained-modal-title-vcenter" centered >
      <Container fluid>
        <Modal.Header closeButton onClick={() => dispatch(hideloginmodal())}>
          <Modal.Title as="div" className="w-100 d-flex justify-content-center">
            <img src={logo} alt="logo" width={100} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text"className="form-control mt-2" placeholder="Email Id"  value={email}
            onChange={(e) => setEmail(e.target.value)} required/>
          <input type="password" className="form-control my-3" placeholder="Password" value={password}
            onChange={(e) => setPassword(e.target.value)}required/>
          <Link to="#" className="text-secondary" style={{ textDecoration: 'none' }}>
            Forgot Password?
          </Link>
          <div className="d-grid my-3">
            <button className="btn" type="button" style={{ backgroundColor: '#4e3c31', color: 'white' }}
              onClick={handleLogin} >
              Log In
            </button>
          </div>
          <p className="text-dark" style={{ textAlign: 'center' }}>
            Create an Account?{' '}
            <Link className="text-secondary" style={{ textDecoration: 'none' }}
              onClick={() => {dispatch(showregistermodal());dispatch(hideloginmodal());}}>
              Register Now
            </Link>
          </p>
        </Modal.Body>
      </Container>
    </Modal>
  );
};

export default Login;
