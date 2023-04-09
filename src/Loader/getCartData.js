import { getDataFromDb } from "../utility/fakeDb"

export const getCartData = async() =>{
    const productData = await fetch('products.json')
    const products = await productData.json()

    let storedCart = getDataFromDb();
    let productArr = [];
    for(const id in storedCart){
        const foundProduct = products.find(product => product.id === id);
        if(foundProduct){
            foundProduct.quantity = storedCart[id]
            productArr.push(foundProduct)
        }
      
    }

    return productArr
}