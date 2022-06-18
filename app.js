const express = require("express");
const app = express();

app.get("/", (req, res) => {

    const message = {
        "msg":"hellow",
        "timestamp": Date.now
    }
    res.json(message);
})

const port = process.env.port ? process.env.port : 5000;
app.listen(port, (req, res) => {
    console.log(`server started listening to port ${port}`);
})