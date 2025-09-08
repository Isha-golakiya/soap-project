import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slice/count_slice';

const AddToCartModal = ({ show, onHide, product }) => {
  const [grams, setGrams] = useState('');
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (show) {
      setGrams('');
      setQuantity(0);
    }
  }, [show]);

  if (!product) return null;

  const handleAdd = () => {
    const item = {
      ...product,
      grams: Number(grams),
      quantity: Number(quantity)
    };
    dispatch(addToCart(item));
    onHide();
  };

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => (prev > 0 ? prev - 1 : 0));

  const gramOptions = ['50', '100', '150', '200'];

  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Body className="d-flex p-4" style={{ backgroundColor: '#fdfaf7', borderRadius: '8px' }}>
        <div style={{ flex: '1', paddingRight: '20px' }}>
          <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
        </div>
        <div style={{ flex: '3', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ color: '#4e3c31' }}>{product.name}</h4>
            <p style={{ color: '#555' }}>{product.description}</p>
            <h5 style={{ color: '#4e3c31' }}>Price: ₹{product.price}</h5>

            <div className="my-3">
              <h3>Select Weight (grams):</h3>
              <div className="d-flex gap-2 mt-2">
                {gramOptions.map(weight => (
                  <Button key={weight} variant={grams === weight ? 'dark' : 'outline-dark'} onClick={() => setGrams(weight)}>
                    {weight}g
                  </Button>
                ))}
              </div>
            </div>

            <div className="d-flex align-items-center mt-3">
              <h3 className="me-3 mb-0">Quantity:</h3>
              <Button variant="outline-dark" onClick={decrement}>-</Button>
              <span className="mx-3" style={{ fontSize: '1.2rem' }}>{quantity}</span>
              <Button variant="outline-dark" onClick={increment}>+</Button>
            </div>
          </div>

          <div className="d-flex justify-content-end gap-2">
            <Button variant="secondary" onClick={onHide}>Close</Button>
            <Button variant="dark" onClick={handleAdd} disabled={!grams || quantity < 1}>
              Add to Cart
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddToCartModal;
