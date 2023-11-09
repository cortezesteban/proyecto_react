import React from 'react';
import './CartWidget.css';

 const CartWidget = ({contador}) => {
  return (
    <div className='d-flex justify-content-between align-items-center text-white'>
        <h4 className='h4Style'>{contador}</h4>
        <span className="imagen imagenCarrito"></span>
    </div>
  )
}

export default CartWidget;
