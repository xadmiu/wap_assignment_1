const express = require('express');
const app = express();


app.get('/', (req, res) => {
    let name = req.name || 'person'
    let age = req.name || 40;

    res.send(`Welcome ${name}, age: ${age}`);
});

app.listen(3000, () => {
    console.log("Server started at 3000");
});