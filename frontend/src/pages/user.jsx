import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const User = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    contact: '',
    role: 'user'
  });

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [users, setUsers] = useState([]);
  const [EditId, setEditId] = useState(null);


  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = e => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.warn('No token found. Are you logged in?');
        return;
      }
      const res = await axios.get('http://localhost:5000/api/alldata', {
        headers: { Authorization: `Bearer ${token}` }
      });

      const allUsers = res.data.data.data || [];
      setUsers(allUsers.filter(u => u.role === 'user'));
    } catch (err) {
      console.error('Error fetching users:', err.response?.data || err.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, val]) => {
      if (val) data.append(key, val);
    });
    if (image) data.append('image', image);

    const token = localStorage.getItem('token');

    try {
      if (EditId) {
        await axios.put(`http://localhost:5000/api/update/${EditId}`, data, {
          headers: { Authorization: `Bearer ${token}` }
        });
        alert('User updated successfully');
      } else {

        await axios.post('http://localhost:5000/api/newuser', data, {
          headers: { Authorization: `Bearer ${token}` }
        });
        alert('User added successfully');
      }

      setFormData({ firstname: '', lastname: '', email: '', password: '', contact: '', role: 'user' });
      setImage(null);
      setImagePreview(null);
      setEditId(null);
      fetchUsers();
    } catch (err) {
      console.error('Error submitting form:', err.response?.data || err.message);
      alert(err.response?.data?.message || 'Error submitting form');
    }
  };

  const handleEdit = (user) => {
    setEditId(user._id);
    setFormData({ firstname: user.firstname, lastname: user.lastname, email: user.email, password: user.password, contact: user.contact, role: user.role });
    // setImagePreview(`http://localhost:5000/uploads/profile/${user.image}`);
    setImagePreview(user.image); 

  };

  const handleDelete = async (userId) => {
    const confirm = window.confirm("Are you sure you want to delete this user?");
    if (!confirm) return;
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/delete/${userId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      alert('User deleted successfully');
      fetchUsers();
    } catch (err) {
      console.error('Error deleting user:', err.response?.data || err.message);
      alert(err.response?.data?.message || 'Error deleting user');
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Add User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-2"><input className="form-control" name="firstname" placeholder="First Name" value={formData.firstname} onChange={handleChange} required /></div>
        <div className="mb-2"><input className="form-control" name="lastname" placeholder="Last Name" value={formData.lastname} onChange={handleChange} required /></div>
        <div className="mb-2"><input className="form-control" name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required /></div>
        <div className="mb-2"><input className="form-control" name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} required /></div>
        <div className="mb-2"><input className="form-control" name="contact" type="tel" placeholder="Contact" value={formData.contact} onChange={handleChange} required /></div>
        <div className="mb-2"><input className="form-control" type="file" accept="image/*" onChange={handleImageChange} /></div>
        {imagePreview && (
          <div className="mb-3">
            <img src={imagePreview} alt="Preview" width="100" style={{ borderRadius: '10px' }} />
          </div>
        )}
        <button type="submit" className="btn btn-primary">
          Add User
        </button>
      </form>
      <hr />
      <h3 className="mt-4">All Users</h3>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <div className="table-responsive mt-3">
          <table className="table table-bordered table-hover align-middle text-center">
            <thead className="table-dark">
              <tr>
                <th>Profile</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u._id}>
                  <td>
                    {u.image ? (
                      <img src={u.image} alt="Profile" width="60" height="60" style={{ borderRadius: '50%', objectFit: 'cover' }} />

                    ) : (
                      'No Image'
                    )}
                  </td>
                  <td>{u.firstname} {u.lastname}</td>
                  <td>{u.email}</td>
                  <td>{u.contact}</td>
                  <td>
                    <button className="btn btn-primary btn-sm" onClick={() => handleEdit(u)}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(u._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default User;
