import React from 'react';
import './ButtonComponent.css';

const ButtonComponent = ({accion, estilo, nombre}) => {
  return (
    <>
        <button onClick={accion} className={estilo}>{nombre}</button>
    </>
  );
};

export default ButtonComponent;
