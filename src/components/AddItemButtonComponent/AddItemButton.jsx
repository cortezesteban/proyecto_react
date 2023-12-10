import './AddItemButton.css';

export const AddItemButton = ({handleCartCount}) => {
  return (
    <button type="submit" className='btnDetailStyle' onClick={handleCartCount}>Agregar al Carrito</button>
  )
}
