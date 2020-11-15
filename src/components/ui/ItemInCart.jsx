import React, { useEffect, useState } from 'react';

// Images
import add from '../../assets/add.svg';
import subtract from '../../assets/subtract.svg';

const ItemInCart = ({ item, updateQuantity }) => {
    const [newQuantity, setNewQuantity] = useState('');

    const decreaseQuantity = () => {
        let updated = newQuantity;
        if (newQuantity === '') {
            updated = 1;
        }
        updated = parseInt(updated, 10);
        updated = updated - 1;
        setNewQuantity(updated);
    };

    const increaseQuantity = () => {
        console.log('wow clicked!');
        let updated = newQuantity;
        if (updated === '') {
            updated = 1;
        }
        updated = parseInt(updated, 10);
        updated = updated + 1;
        setNewQuantity(updated);
    };

    const pricesTimesQuantity = (price) => {
        const total = parseInt(price, 10) * item.quantity;
        const formatted = total.toFixed(2);
        const string = `$${formatted}`;
        return string;
    };

    useEffect(() => {
        console.log(item);
        if (item && item.id && newQuantity !== '') {
            console.log('QUANTITY CHANGED ->', newQuantity);
            console.log(item.id);
            updateQuantity(item.id, newQuantity);
        }
    }, [newQuantity]);

    useEffect(() => {
        if (item.quantity) {
            console.log('quantity on item: ', item.quantity);
        }
    }, [item]);

    const remove = () => {
        updateQuantity(item.id, 0);
    };

    return (
        <div key={item.id} className="itemInCart">
            <h3>{item.quantity} x {item.title}
            {
                item.variant.title !== 'Default Title'
                ? ` - ${item.variant.title}`
                : null
            }
            </h3>
            <p className="price">{pricesTimesQuantity(item.attrs.variant.price, item.quantity)}</p>
            <img src={item.variant.image.src} alt="" />
            <div className="controlQuantity">
                <button className="increaseDecrease" onClick={decreaseQuantity} type="button">
                    <img src={subtract} alt="" />
                </button>
                <span className="quantityInCart">{item.quantity}</span>
                <button className="increaseDecrease" onClick={increaseQuantity} type="button">
                    <img src={add} alt="" />
                </button>
            </div>
            <button onClick={remove} className="removeItem" type="button">Remove</button>
        </div>
    )
};

export default ItemInCart;
