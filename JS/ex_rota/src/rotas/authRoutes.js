const express = require('express');

const app = express();

app.use(express.json());

app.post("/cadastro", async (req, res) => {
    try {
        const { email, senha } = req.body;
        return res.status(201).json({ message: "boa" });
    } catch (err) {
        return res.status(500).json({ message: "nao deu but" });
    }
});

app.post("/login", async (req, res) => {
    try {
        const { email, senha } = req.body;
        return res.status(200).json({ message: "boa" });
    } catch (err) {
        return res.status(500).json({ message: "nao deu but" });
    }
});

module.exports = app;