const express = require("express");
const app = express();
const pokemon = require("./models/pokemon");

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.get("/", (req, res) =>{
    res.send(`<h1>Hello World</h1>`)
});

app.listen("3000", (req, res) => {
    console.log("Onwards and Upwards")
})