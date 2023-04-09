import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard';
import { addToDb } from '../utility/fakeDb';

const Shop = () => {
    const productData = useLoaderData();
    
    // handle add to cart function
    const handleAddToCart = id =>{
       addToDb(id)
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