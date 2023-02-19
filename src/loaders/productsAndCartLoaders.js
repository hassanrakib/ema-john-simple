import { getStoredCart } from "../utilities/fakedb";

export async function productsAndCartLoaders() {
    // get products
    const response = await fetch(`http://localhost:5000/products`);
    const data = await response.json();
    const products = data.result;

    // get cart
    const storedCart = getStoredCart();

    // find product from products using saved ids in savedCart
    let savedCart = [];
    for (const id in storedCart) {
        const addedProduct = products.find(product => product._id === id);
        if (addedProduct) {
            addedProduct.quantity = storedCart[id];
            savedCart.push(addedProduct);
        }
    }
    console.log(savedCart);
    return { products, savedCart };
}