import React from 'react';
import './index.css';

const ButtonComponent = ({accion, estilo, nombre}) => {
  return (
    <>
        <button onClick={accion} className={estilo}>{nombre}</button>
    </>
  );
};

export default ButtonComponent;
