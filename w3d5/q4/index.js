const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));
app.use('/css', express.static(path.join(__dirname, 'css')));

const currentHour = new Date().getHours();
const isDay = currentHour >= 6 && currentHour <= 18;

app.get('/', (req, res) => {
    res.render('index', {data: { isDay }});
});

app.get('/output', (req, res) => {
    const q = req.query;
    res.send(`Welcome ${q.name}, age: ${q.age}`);
});

app.post('/result', (req, res) => {
    const name = req.body.name || 'Person';
    const age = req.body.age || 40;

    res.redirect(303, `/output?name=${name}&age=${age}`);
});

app.listen(3000, () => {
    console.log("Server started at 3000");
});