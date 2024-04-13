const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const StudentModal = require("./StudentModal")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/QuizApp")

const quizes = require("./Db.json")

const port = 8000;



app.post("/login", (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    StudentModal.findOne({email:email})
    .then(user =>{
        console.log(user);
        if(user){
            if(user.password===password){
                res.json("Success")
            }
            else{
                res.json("Wrong password")
            }
        }
        else{
            res.json("no data")
        }
    })
})

// app.use(cors({
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST", "PATCH", "DELETE"]
// }))


app.get("/quizes/:id/:cat", (req, res) => {
    let typeOfQues = Number(req.params.id);
    typeOfQues += 1;
    let levelOfQues = req.params.cat;
    return res.json(quizes[req.params.id][typeOfQues][`${levelOfQues}`].questions)
})
app.listen(port, (err) => { console.log(`App is running in port: ${port}`) })