const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const pokemon = require('./models/pokemon');


// View Engine Middleware Configure
const reactViewsEngine = require('jsx-view-engine').createEngine();
app.engine('jsx', reactViewsEngine);
app.set('view engine', 'jsx');
app.set('views', './views');


//Index
app.get('/', (req, res) => {
    res.send('<h2> Welcome to the Pokemon App! </h2>')
})

app.get('/pokemon', (req, res) => {
    res.render("Index", {pokemon})
})


//Show
app.get('/modules/pokemon/:id', (req, res) => {
    res.render('views/Show', {
      //second param must be an object
      pokemon: pokemon[req.params.id],
    });
  });





// Listen
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });