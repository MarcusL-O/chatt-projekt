// + npm init -y
//git ignore, ska skeivas (nedan)
//.env
//node_modueles 
// + npm install express
//node server.js FÖR ATT TESTA 
//boiler plate i server .js

const express = require("express");
const app = express();
const PORT= 3000;

app.use(express.json());
const cors = require("cors");
app.use(cors());

let messages = []
let currentId = 1;

app.get("/api/messages", (req,res) => {
    console.log("getting all msg");
    res.json(messages);
});

app.post("/api/messages", (req, res) => {
    const {text } = req.body;

    if (!text)
    {
        return res.status(400);
    }

    const newMessage = {
        id: currentId++,
        text,
        createdAt: new Date()
    }
})

messages.push(newMessage);
res.status(200).json(newMessage);



app.listen(PORT, (req, res) => {
    console.log("Listening to 3000");
});