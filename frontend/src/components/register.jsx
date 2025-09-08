import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Container } from 'react-bootstrap';
import logo from '../images/logo.jpg';
import { hideregistermodal } from '../store/slice/register_slice';
import { showloginmodal } from "../store/slice/login_slice";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const registerpage = useSelector((state) => state.register.registermodal);
  const dispatch = useDispatch();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('user');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleRegister = async () => {
    if (password !== confirmPassword) {
      return alert("Passwords do not match!");
    }
    try {
      const formData = new FormData();
      formData.append("firstname", firstname);
      formData.append("lastname", lastname);
      formData.append("contact", contact);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("role", role);
      if (imageFile) {
        formData.append("image", imageFile);
      }

      const res = await axios.post("http://localhost:5000/api/newuser", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });


      if (res.data.status) {
        alert("Registered successfully!");
        dispatch(hideregistermodal());
        dispatch(showloginmodal());
      }
    } catch (err) {
      console.error(err.response?.data || err.message || "Unknown error");
      alert(err.response?.data?.data?.message || err.message || "Registration failed");
    }
  };

  return (
    <Modal backdrop="static" show={registerpage} onHide={() => dispatch(hideregistermodal())} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
      <Container fluid>
        <Modal.Header closeButton onClick={() => dispatch(hideregistermodal())}>
          <Modal.Title as="div" className="w-100 d-flex justify-content-center">
            <img src={logo} alt="logo" width={100} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" className="form-control mt-2" placeholder="First Name" value={firstname} onChange={(e) => setFirstname(e.target.value)} required />
          <input type="text" className="form-control mt-2" placeholder="Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)} required />
          <input type="tel" className="form-control mt-2" placeholder="Contact" value={contact} onChange={(e) => setContact(e.target.value)} required />
          <input type="email" className="form-control mt-2" placeholder="Email Id" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" className="form-control mt-2" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <input type="password" className="form-control mt-2" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          <div className="mt-2">
            <label><input type="radio" value="user" checked={role === 'user'} onChange={(e) => setRole(e.target.value)} /> User</label>
            <label className="ms-3"><input type="radio" value="admin" checked={role === 'admin'} onChange={(e) => setRole(e.target.value)} /> Admin</label>
          </div>

          {imagePreview && (
            <div className="text-center my-2">
              <img src={imagePreview} alt="Preview" width={100} height="auto" style={{ borderRadius: '10px' }} />
            </div>
          )}
          <input type="file" accept="image/*" className="form-control my-2" onChange={handleImageChange} />
          <div className="d-grid my-3">
            <button className="btn" type="button" style={{ backgroundColor: '#4e3c31', color: 'white' }} onClick={handleRegister}>
              Register
            </button>
          </div>
          <p className="text-dark text-center">Back to{' '}
            <Link className="text-secondary" style={{ textDecoration: 'none' }} onClick={() => { dispatch(hideregistermodal()); dispatch(showloginmodal()); }}>
              Login
            </Link>
          </p>
        </Modal.Body>
      </Container>
    </Modal>
  );
};

export default Register;



