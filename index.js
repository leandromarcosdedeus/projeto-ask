const express = require('express');

const app = express();

app.get("/oi", (req, res)=>{
    nome = req.query["canal"];
    res.send("ola " + nome)
})


app.listen(3000, ()=>{
    console.log('Servidor online!')
});