import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CartItem from './Cards/CartItem';
import { clearCart, removeItemFromDb } from '../utility/fakeDb';
import { CartContext } from '../App';

const Cart = () => {
    const [cart, setCart] = useContext(CartContext || [])
    let total = 0;
    cart.map(product =>
        total += product.price * product.quantity
    )
    const handleClearCart = () =>{
        clearCart()
    }
    const handleRemoveItem = id =>{
        const remainig = cart.filter(product => product.id !== id);
        setCart(remainig)
        removeItemFromDb(id)
    }
    return (
        <div className='py-5 flex justify-center text-gray-900 bg-gray-100 min-h-screen'>
            <div>
                <h3 className='py-5 text-2xl font-semibold text-black'>{cart.length > 0 ? 'Review cart items' : 'Cart is empty'}</h3>
                <ul className='divide-y divide-gray-700'>
                    {cart.map(product => 
                    <CartItem
                        key={product.id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}
                    ></CartItem>)}
                </ul>
                <div className="divide-y-1 text-right">
                    <p>Total Amount: <span className='font-semibold'>{total}$</span></p>
                    <p className='text-small text-gray-400'>Not including taxes and shipping costs</p>
                </div>
                <div className='flex justify-end gap-5'>
                    {cart.length > 0 ?
                        <button onClick={handleClearCart} className='btn-outlined'>Clear Cart</button>
                        : <Link to='/shop'>
                            <button className='btn-outlined'>Back To Shop</button>
                        </Link>
                    }
                    <button className='btn-primary'>Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;