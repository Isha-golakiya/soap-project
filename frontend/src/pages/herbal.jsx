import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Button } from 'react-bootstrap';
import bg from '../images/shops.jpg';
import { useNavigate } from 'react-router-dom';
import AddToCartModal from '../pages/cartmodal';

const Herbal = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); 
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/product/alldata')
      .then(res => {
        const all = res.data.data.data || [];
        const filtered = all.filter(prod =>
          prod.category?.toLowerCase().includes('herbal')
        );
        setProducts(filtered);
      })
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  return (
    <>
      <AddToCartModal show={showModal} onHide={() => setShowModal(false)}product={selectedProduct}/>

      
      <div className="image">
        <img src={bg} alt="shop banner" className='img-fluid' />
      </div>

      <Container className="my-5">
        <h2 className="text-center mt-5">Herbal Soaps</h2>
        <div className="row justify-content-center pb-5">
          {products.map(product => (
            <div key={product._id} className="col-sm-12 col-md-6 col-lg-4 pt-5">
              <div className="card h-100 m-3" style={{ borderRadius: '8px', backgroundColor: 'white' }}>
                <img src={product.image} className="card-img-top product-img img-fluid" alt={product.name}
                  style={{ height: '250px', objectFit: 'cover', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' , backgroundColor:' #fff2e9ff'}}/>

                <div className="card-body d-flex flex-column text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">₹{product.price}</p>
                  <p className="card-text" style={{ fontSize: '20px', color: 'black', flexGrow: '1', overflow: 'hidden' }}>
                    {product.description}
                  </p>
                  <div className="cart mt-auto">
                    <button
                      style={{ border: '1px solid #4e3c31', borderRadius: '5px', background: '#4e3c31', color: 'white' }}
                      onClick={() => handleAddToCart(product)}> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        <div className="text-center mt-3">
          <Button onClick={() => navigate(-1)}>Back</Button>
        </div>
      </Container>
    </>
  );
};

export default Herbal;
