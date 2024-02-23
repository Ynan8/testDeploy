const express = require("express")

const app = express();

app.get("/hello", (req, res) => {
    res.status(200).json({ message : "hello peoples" })
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})