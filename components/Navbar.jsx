import React from 'react'
import Link from 'next/link'
import { useStateContext } from '../context/StateContext'

import { Cart } from '.'

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href="/">Euphoria</Link>
      </p>

      <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-bag" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z"></path>
          <path d="M9 11v-5a3 3 0 0 1 6 0v5"></path>
        </svg>
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar