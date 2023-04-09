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

    const previousCart = JSON.parse(localStorage.getItem('shopping-cart'))

    if(previousCart){
        shoppingCart = previousCart
    }

    return shoppingCart
}


export {
    addToDb,
    getDataFromDb
}