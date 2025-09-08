import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import bg from '../images/shops.jpg';
import { Container } from 'react-bootstrap';
import AddToCartModal from '../pages/cartmodal';
import orange from '../images/ntrl2.jpg';
import sandal from '../images/sandal2.jpg'
import papaya from '../images/papaya2.jpg'
import tea from '../images/tea2.webp'

const categories = [
  {
    label: 'Organic Soaps',
    path: '/shop/organic',
    image: orange
  },
  {
    label: 'Herbal Soaps',
    path: '/shop/herbal',
    image: tea
  },
  {
    label: 'Plant-Based Soaps',
    path: '/shop/plant',
    image: sandal
  },
  {
    label: 'Handmade Soaps',
    path: '/shop/handmade',
    image: papaya
  }
];


const Shop = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/product/alldata')
      .then(res => {
        if (res.data.status) {
          setProducts(res.data.data.data);
        }
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleModalAdd = (item) => {
    console.log('Added to cart:', item);
    alert('Product added to cart!');
    setShowModal(false);
  };

  return (
    <>
      <AddToCartModal show={showModal} onHide={() => setShowModal(false)} product={selectedProduct} onAdd={handleModalAdd} />

      <div className="image">
        <img src={bg} alt="shop banner" className="img-fluid" />
      </div>

      <div className="shop_category">
        <Container>
          <h2 className="text-center py-5">Explore Our Soap Categories</h2>
          <div className="row justify-content-center">
            {categories.map((cat, i) => (
              <div key={i} className="col-sm-6 col-md-4 col-lg-3">
                <Link to={cat.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="card h-90" style={{ borderRadius: '10px', backgroundColor: 'white', overflow: 'hidden', margin: '10px' }}>
                    <img src={cat.image} className="card-img-top" alt={cat.label} style={{ height: '200px', objectFit: 'cover' }}/>
                    <div className="card-body text-center">
                      <h5 className="card-title">{cat.label}</h5>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </div>


      <div className="shop_products">
        <Container>
          <h2 className="text-center mt-5">All Products</h2>
          <div className="row justify-content-center">
            {products.map(product => (
              <div key={product._id} className="col-sm-12 col-md-6 col-lg-4 pt-5">
                <div className="card h-100 m-3" style={{ borderRadius: '8px', backgroundColor: 'white' }}>
                  <img src={product.image}
                    className="card-img-top" alt={product.name} style={{ height: '250px', objectFit: 'cover', borderTopLeftRadius: '8px', borderTopRightRadius: '8px', backgroundColor: ' #fff2e9ff' }} />
                  <div className="card-body d-flex flex-column text-center">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">₹{product.price}</p>
                    <p className="card-text" style={{ fontSize: '20px', color: 'black', flexGrow: '1', overflow: 'hidden' }}>
                      {product.description}
                    </p>
                    <div className="cart mt-auto w-5">
                      <button
                        style={{ border: '1px solid #4e3c31', borderRadius: '5px', background: '#4e3c31', color: 'white' }}
                        onClick={() => handleAddToCart(product)}>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Shop;
