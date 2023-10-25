const express = require("express");
const bodyparser = require("body-parser");
const app = express();

const port = 3000

//iniciar servidor
app.use(bodyparser.urlencoded({extended : true}));
app.use(express.json());

app.post("/cadastro", async(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    if(email == null || password == null){
        return res.status(400).json({error : "Digite os campos corretamente"})
    }

    console.log(email);
    console.log(password)

    res.json({error : null, msg : "Teste feito com sucesso"})

})

app.get("/", async(req,res) =>{
    res.sendFile(
        __dirname + "/index.html"
    )
});


app.listen(port, ()=>{
    console.log(`O servidor esta rodando na porta ${port})`)
})