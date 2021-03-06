export const addItemToCart = (item, next) => {
    let cart = [];
    if (typeof window !== undefined) {
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        cart.push({
            ...item,
            count: 1,
        });
        localStorage.setItem("cart", JSON.stringify(cart));
        next();
    }
};

export const loadCart = () => {
    if (typeof window !== undefined) {
        if (localStorage.getItem("cart")) {
            return JSON.parse(localStorage.getItem("cart"));
        }
    }
};

export const removeItemFromCart = (productId) => {
    let cart = [];
    console.log(productId);
    if (typeof window !== undefined) {
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        cart.map((prod, i) => {
            if (prod._id === productId) {
                cart.splice(i, 1);
            }
        });
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    return cart;
};

export const emptyCart = (next) => {
    if (typeof window !== undefined) {
        localStorage.removeItem('cart');
        next();
    }
    
}