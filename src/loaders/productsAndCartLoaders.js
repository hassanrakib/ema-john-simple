import { getStoredCart } from "../utilities/fakedb";

export async function productsAndCartLoaders() {
    // get products
    const response = await fetch(`products.json`);
    const products = await response.json();

    // get cart
    const storedCart = getStoredCart();

    // find product from products using saved ids in savedCart
    let savedCart = [];
    for (const id in storedCart) {
        const addedProduct = products.find(product => product.id === id);
        if (addedProduct) {
            addedProduct.quantity = storedCart[id];
            savedCart.push(addedProduct);
        }
    }
    console.log(savedCart);
    return { products, savedCart };
}