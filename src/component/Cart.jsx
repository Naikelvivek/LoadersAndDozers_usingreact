import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/action'; // Adjust the path according to your directory structure

const Cart = () => {
    const cartItems = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
    };

    const handleIncreaseQuantity = (product) => {
        dispatch(increaseQuantity(product));
    };

    const handleDecreaseQuantity = (product) => {
        dispatch(decreaseQuantity(product));
    };

    return (
        <div className="container">
            <h2 className="my-4">Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cartItems.map((item) => (
                    <div className="row mb-3" key={item.id}>
                        <div className="col-md-4">
                            <img src={item.image} alt={item.title} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{item.title}</h3>
                            <p className="lead fw-bold">
                                {item.qty} x ${item.price} = ${item.qty * item.price}
                            </p>
                            <button
                                className="btn btn-outline-dark me-4"
                                onClick={() => handleDecreaseQuantity(item)}
                            >
                                <i className="fa fa-minus"></i>
                            </button>
                            <button
                                className="btn btn-outline-dark"
                                onClick={() => handleIncreaseQuantity(item)}
                            >
                                <i className="fa fa-plus"></i>
                            </button>
                            <button
                                className="btn btn-danger ms-2"
                                onClick={() => handleRemoveFromCart(item)}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
