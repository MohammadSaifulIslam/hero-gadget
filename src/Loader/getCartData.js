import { getDataFromDb } from "../utility/fakeDb"

export const getCartAndProductData = async() =>{
    const productData = await fetch('products.json')
    const products = await productData.json()

    let storedCart = getDataFromDb();
    let cartArr = [];
    for(const id in storedCart){
        const foundProduct = products.find(product => product.id === id);
        if(foundProduct){
            foundProduct.quantity = storedCart[id]
            cartArr.push(foundProduct)
        }
      
    }

    return [products ,cartArr]
}