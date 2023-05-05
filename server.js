require('dotenv').config();
const express = require('express');
const app = express();
const Pokemon = require('./models/pokemon');

const PORT = process.env.PORT || 3000;
const { connect, connection } = require("mongoose");

//mongoose
connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  connection.once("open", () => {
    console.log("connected to mongo");
  });

// View Engine Middleware Configure
const reactViewsEngine = require('jsx-view-engine').createEngine();
app.engine('jsx', reactViewsEngine);
app.set('view engine', 'jsx');
app.set('views', './views');

//middleware
app.use(express.urlencoded({extended:false}))
app.use((req,res,next)=>{
    next();
})

// I.N.D.U.C.E.S

//Index
app.get('/', (req, res) => {
    res.send('<h2> Welcome to the Pokemon App! </h2>')
})

app.get('/pokemon', async (req, res) => {
   // res.render("Index", {pokemon})
    try {
        const foundPokemon = await Pokemon.find({});
        res.render('Index',{pokemon: foundPokemon})
      } catch (err) {
        res.status(400).send(err);
       // return;
      };
});

//New

app.get("/pokemon/new", (req, res) => {
    res.render("New");
  });  

  // create
  app.post('/pokemon', async (req, res) =>{
    try{
        const database = req.body.database === 'on'
        const newPokemon = await Pokemon.create({name:req.body.name, image:req.body.image, database:database})
        // console.log(New Pokemon)
        res.redirect('pokemon')
    } catch(err){
        res.status(400).send(err)
    }
}) 

// Show
app.get("/pokemon/:id", async (req, res) =>{
    try{
        const foundPokemon = await Pokemon.findById(req.params.id)
        res.render("Show", {pokemon: foundPokemon})
    }catch (err){
        res.status(400).send(err)
    }
});



// Listen
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });