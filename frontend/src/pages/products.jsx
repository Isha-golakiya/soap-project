import { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: '', price: '', description: '', category: '', image: '' });
  const [file, setFile] = useState(null);
  const [editId, setEditId] = useState(null);

  const categories = ['Organic', 'Herbal', 'Plant-Based', 'Handmade'];

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/product/alldata');
      setProducts(res.data.data.data);
    } catch (error) {
      console.error('Error fetching products', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleImageUpload = async () => {
    if (!file) return form.image;
    const formData = new FormData();
    formData.append('image', file); 

    try {
      const res = await axios.post('http://localhost:5000/upload', formData);
      return res.data.data; 
    } catch (err) {
      console.error('Image upload failed:', err);
      return null;
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const uploadedImage = await handleImageUpload();
      if (!uploadedImage) {
        alert("Image upload failed. Please try again.");
        return;
      }

      const formDetails = { name: form.name, price: form.price, description: form.description, category: form.category, image: uploadedImage, };

      if (editId) {
        await axios.put(`http://localhost:5000/product/update/${editId}`, formDetails);
        alert("Product updated successfully.");
        setEditId(null);
      } else {
        await axios.post('http://localhost:5000/product/newproduct', formDetails);
        alert("Product added successfully.");
      }

      setForm({ name: '', price: '', description: '', category: '', image: '' });
      setFile(null);
      fetchProducts();
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure?')) {
      await axios.delete(`http://localhost:5000/product/delete/${id}`);
      fetchProducts();
    }
  };


  const handleEdit = (product) => {
    setEditId(product._id);
    setForm({ name: product.name, price: product.price, description: product.description, category: product.category, image: product.image });
    setFile(null);
  };


  return (
    <div className="container mt-4">
      <h2 className="mb-3">Add Product</h2>
      <form onSubmit={handleSubmit} className="mb-5">
        <input className="form-control mb-2" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        <input className="form-control mb-2" placeholder="Price" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} required />
        <textarea className="form-control mb-2" placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <select className="form-select mb-2" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} required>
          <option value="">Select Category</option>
          {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </select>
        <input className="form-control mb-2" type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit" className="btn btn-primary">{editId ? 'Update' : 'Add'} Product</button>
      </form>

      <h3>All Products</h3>
      <table className="table table-bordered table-hover mt-3">
        <thead className="table-dark">
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price (₹)</th>
            <th>Description</th>
            <th>Category</th>
            <th style={{ width: '90px' }}>Edit</th>
            <th style={{ width: '100px' }}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map(prod => (
            <tr key={prod._id}>
              <td>
                <img
                  src={prod.image}
                  alt={prod.name}
                  style={{ width: '100%', height: '75px', objectFit: 'cover', borderRadius: '6px' }}
                />
              </td>
              <td>{prod.name}</td>
              <td>₹{prod.price}</td>
              <td>{prod.description}</td>
              <td>{prod.category}</td>
              <td>
                <button className="btn btn-sm btn-primary" onClick={() => handleEdit(prod)}>Edit</button>

              </td>
              <td>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(prod._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
