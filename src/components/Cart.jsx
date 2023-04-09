import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CartItem from './Cards/CartItem';

const Cart = () => {
    const cart = useLoaderData()
    console.log(cart)
    return (
        <div className='py-5 flex justify-center text-gray-900 bg-gray-100 min-h-[calc(100vh-157px)]'>
           <div>
            <h3 className='py-5 text-2xl font-semibold text-black'>{cart.length > 0 ? 'Review cart items' : 'Cart is empty'}</h3>
                <ul className='divide-y divide-gray-700'>
                    {cart.map(product=> <CartItem
                    key={product.id}
                    product={product}
                    ></CartItem>)}
                </ul>
           </div>
        </div>
    );
};

export default Cart;