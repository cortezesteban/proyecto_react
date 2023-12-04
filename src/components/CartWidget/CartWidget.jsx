import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

import './CartWidget.css';

 const CartWidget = () => {

  const { count } = useContext(CartContext);

  return (
    <div className='d-flex justify-content-between align-items-center text-white'>
        <h4 className='h4Style'>{count}</h4>
        <span className="imagen imagenCarrito"></span>
    </div>
  )
}

export default CartWidget;
