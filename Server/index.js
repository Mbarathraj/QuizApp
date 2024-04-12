const express = require("express")
const cors = require("cors")
const quizes = require("./Db.json")
const app = express()

const port = 8000;


app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "DELETE"]
}))

app.get("/quizes/:id/:cat", (req, res) => {
    let typeOfQues=Number(req.params.id);
    typeOfQues+=1;
    let levelOfQues=req.params.cat;
    return res.json(quizes[req.params.id][typeOfQues][`${levelOfQues}`].questions)
})
app.listen(port, (err) => { console.log(`App is running in port: ${port}`) })