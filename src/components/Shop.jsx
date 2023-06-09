import React, { useContext } from 'react';
import ProductCard from './Cards/ProductCard';
import { addToDb } from '../utility/fakeDb';
import { CartContext, ProductContex } from '../App';
import toast, { Toaster } from 'react-hot-toast';

const Shop = () => {
    const productData = useContext(ProductContex);
    const [cart,setCart] = useContext(CartContext)
    
    // handle add to cart function
    const handleAddToCart = product =>{
        let newCart = []
        const exists = cart.find(existingProduct => existingProduct.id === product.id);
        if(!exists){
            product.quantity = 1;
            newCart = [...cart,product]
            setCart(newCart)
        }else{
            const rest = cart.filter(existingProduct => existingProduct.id !== product.id);
            product.quantity += 1;
            newCart = [...rest, product]
            setCart(newCart)
        }
       addToDb(product.id)
       toast.success('Successfully added item! 🙂')
    }
    return (
        <div className='my-container product-container'>
           {
            productData.map(product => <ProductCard 
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
            ></ProductCard>)
           }
        </div>
    );
};

export default Shop;