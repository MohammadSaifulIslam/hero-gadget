import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Cart = () => {
    const cart = useLoaderData()
    console.log(cart)
    return (
        <div>
            <h3>Cart compo</h3>
        </div>
    );
};

export default Cart;