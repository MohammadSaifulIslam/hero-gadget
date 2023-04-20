import React, { createContext, useState } from 'react';
import Header from './components/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './components/Footer';
import toast, { Toaster } from 'react-hot-toast';
import Modal from './components/Modal';

export const CartContext = createContext([]);
export const ProductContex = createContext([])

const App = () => {
  const [isOpen, setIsOpen ] = useState(false)
  const [products ,cartArr] = useLoaderData()
  const [cart, setCart] = useState(cartArr)

  const cartAlert = sessionStorage.getItem('alert')
  if(cart.length > 0 && cartAlert !== 'true'){
    setIsOpen(true)
    sessionStorage.setItem('alert', true)
  }

  return (
    <CartContext.Provider value={[cart, setCart]}>
      <ProductContex.Provider value={products}>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}></Modal>
        <Toaster />
      </ProductContex.Provider>
    </CartContext.Provider>
  );
};

export default App;