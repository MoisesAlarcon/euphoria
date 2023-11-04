import React, { useRef } from 'react'
import Link from 'next/link';
import toast from 'react-hot-toast';

import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
import getStripe from '../lib/getStripe';

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if(response.statusCode === 500) return;
    
    const data = await response.json();

    toast.loading('Redirecting...');

    stripe.redirectToCheckout({ sessionId: data.id });
  }

  return (
    <div className="cart-wrapper" ref={cartRef}>
    <div className="cart-container">
      <button
      type="button"
      className="cart-heading"
      onClick={() => setShowCart(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M15 6l-6 6l6 6"></path>
</svg>
        <span className="heading">Your Cart</span>
        <span className="cart-num-items">({totalQuantities} items)</span>
      </button>

      {cartItems.length < 1 && (
        <div className="empty-cart">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-bag" width="150" height="150" viewBox="0 0 24 24" stroke="currentColor" fill="none">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z"></path>
   <path d="M9 11v-5a3 3 0 0 1 6 0v5"></path>
</svg>
          <h3>Your shopping bag is empty</h3>
          <Link href="/">
            <button
              type="button"
              onClick={() => setShowCart(false)}
              className="btn"
            >
              Continue Shopping
            </button>
          </Link>
        </div>
      )}

        <div className="product-container">
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div className="product" key={item._id}>
              <img src={urlFor(item?.image[0])} className="cart-product-image" />
              <div className="item-desc">
                <div className="flex top">
                  <h5>{item.name}</h5>
                  <h4>${item.price}</h4>
                </div>
                <div className="flex bottom">
                  <div>
                  <p className="quantity-desc">
                    <span className="minus" onClick={() => toggleCartItemQuanitity(item._id, 'dec') }>
                    -
                    </span>
                    <span className="num" onClick="">{item.quantity}</span>
                    <span className="plus" onClick={() => toggleCartItemQuanitity(item._id, 'inc') }>+</span>
                  </p>
                  </div>
                  <button
                    type="button"
                    className="remove-item"
                    onClick={() => onRemove(item)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash-filled" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" fill="currentColor"></path>
   <path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z" fill="currentColor"></path>
</svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      {cartItems.length >= 1 && (
        <div className="cart-bottom">
          <div className="total">
            <h3>Subtotal:</h3>
            <h3>${totalPrice}</h3>
          </div>
          <div className="btn-container">
            <button type="button" className="btn" onClick={handleCheckout}>
              Pay with Stripe
            </button>
          </div>
        </div>
      )}
    </div>
  </div>
  )
}

export default Cart