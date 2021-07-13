const express = require('express');
const session = require('express-session');
const app = express();

app.use(express.urlencoded({extended: false}));
app.set('view engine', 'ejs');
app.use(session({
    secret: 'X$#@GBUCN*&8',
}));

const products = [
    { id: 1, name: 'Laptop', description: "this is laptop", price: 1200},
    { id: 2, name: 'Car', description: "this is car", price: 15000},
    { id: 3, name: 'Refrigerator', description: "this is refrigrator", price: 500},
]
app.get('/products', (req, res) => {
    res.render('product', {data: { products }});
});

app.get('/shoppingcart', (req, res) => {
    const cart = req.session.cart || [];
    console.log(cart);
    res.render('shoppingcart', {data: { cart }});
});

app.post('/addToCart', (req, res) => {
    const { id, name, price } = req.body;
    const cart = req.session.cart || {};

    cart[id] = {
        ...(cart[id] || {name, price}),
        quantity: ((cart[id] && cart[id].quantity) || 0) + 1,
    };

    req.session.cart = cart;
    res.redirect(302, '/shoppingCart');
});

app.listen(3000, () => {
    console.log("Server started at 3000");
});