const express = require('express')
const app = express()
const pokedex = require('./models/pokemons')


app.set("view engine","jsx")
// --> Gives ViewEngine
app.engine("jsx", require("express-react-views").createEngine())
// --> Initializes ViewEngine

app.use(express.urlencoded({extended:false}));
// --> Parse URLencoded responses [req.body*]

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
// --> Intercept reqRes proccess and manage dataFlow
// ---------------------------------[Middleware]


app.get('/pokemons', (req,res)=>{
    res.render('Index', {
        pokemons: pokedex
    })
})
// ----------------------------------[Index (R)]

app.get('/pokemons/new',(req,res)=>{
    res.render('New')
})
// --------------------------------------[New]

app.post('/pokemons',(req,res)=>{
    pokedex.push(req.body)
    // ---> Add New Fruit to Existing DataSet
    console.log(req.body)
    res.redirect('/pokemons')
})
// ----------------------------------[POST (C)]


app.get('/pokemons/:indexOfPokeArray', (req,res)=>{
    res.render('Show',{
        pokemon: pokedex[req.params.indexOfPokeArray]
    })
})
// ----------------------------------[Show]



app.listen(3000,()=>{
    console.log("Updating Pokemon")
})