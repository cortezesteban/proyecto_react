import { useContext, useState } from 'react';
import { CartContext } from '../../context/cartContext';
import { AddItemButton } from '../AddItemButtonComponent/AddItemButton';
import Dropdown from "react-bootstrap/Dropdown";

import './ItemCount.css';

export const ItemCount = ({ stock }) => {

    const { count, setCount } = useContext(CartContext);
    const [ countItem, setCountItem ] = useState(1);

    let items = [];

    for (let i = 0; i < stock; i++) {
        items[i] = i + 1;
    }

    const handleCountItem = (e) => {
        setCountItem(e);
    }

    const handleCartCount = () => {
        setCount(count + countItem);
        setCountItem(1)
    }

    return (
        <Dropdown data-bs-theme="dark" className='dropDownStyle'>
            <div className='stockContainerStyle'>
                <h4 className='spanDetailStyle'>Stock: </h4>
                <Dropdown.Toggle variant='dark'>{countItem}</Dropdown.Toggle>
                <Dropdown.Menu className='dropDownMenuStyle'>
                    {items.map((item, i) => (
                        <Dropdown.Item key={i} onClick={() => handleCountItem(item)}>
                            {item}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </div>
            <AddItemButton handleCartCount={handleCartCount}/>
        </Dropdown>
    )
}