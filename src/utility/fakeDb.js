// add to localstorage
const addToDb = id => {
    let shoppingCart = {};

    const previousCart = JSON.parse(localStorage.getItem('shopping-cart'));

    if (previousCart) {
        shoppingCart = previousCart;
    }

    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    } else {
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

// get data from localstorage
const getDataFromDb = () =>{
    let shoppingCart = {}

    const storedCart = JSON.parse(localStorage.getItem('shopping-cart'))

    if(storedCart){
        shoppingCart = storedCart
    }

    return shoppingCart
}

// remove a scacific item from localstorage
const removeItemFromDb = id =>{
    const storedCart = JSON.parse(localStorage.getItem('shopping-cart'))

    if(storedCart){
        if(id in storedCart){
            delete storedCart[id]
        }
    }
    localStorage.setItem('shopping-cart', JSON.stringify(storedCart))
}

// clear all data from localstorage function
const clearCart = () =>{
    localStorage.clear('shopping-cart')
}

export {
    addToDb,
    getDataFromDb,
    removeItemFromDb,
    clearCart
}