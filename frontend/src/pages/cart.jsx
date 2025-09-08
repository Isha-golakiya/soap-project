import { useSelector, useDispatch } from 'react-redux';
import { Container, Table, Image, Button } from 'react-bootstrap';
import {removeFromCart, increaseQuantity,decreaseQuantity} from '../store/slice/count_slice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)};

  return (
    <Container className="my-5">
      <div className="text-center mb-4">
        <h3>Cart</h3>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <>
         
          <Table striped bordered hover responsive className="align-middle text-center">
            <thead style={{ backgroundColor: "#f8f2ec" }}>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Weight (g)</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>
                    <Image
                        src={item.image}
                      alt={item.name}
                      style={{ width: "70px", height: "70px", objectFit: "cover", borderRadius: "6px" }}
                      thumbnail
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.grams}g</td>
                  <td>₹{item.price}</td>
                  <td>
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      <Button variant="outline-dark" size="sm" onClick={() => dispatch(decreaseQuantity({ id: item.id, grams: item.grams }))}>-</Button>
                      <span>{item.quantity}</span>
                      <Button variant="outline-dark" size="sm" onClick={() => dispatch(increaseQuantity({ id: item.id, grams: item.grams }))}>+</Button>
                    </div>
                  </td>
                  <td>₹{item.price * item.quantity}</td>
                  <td>
                    <Button variant="outline-danger" size="sm" onClick={() => dispatch(removeFromCart({ id: item.id, grams: item.grams }))}>
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="text-end pe-3">
            <h5>Total: ₹{calculateTotal()}</h5>
          </div>
        </>
      )}
    </Container>
  );
};

export default Cart;
