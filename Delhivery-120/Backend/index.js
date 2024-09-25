const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require("./models/Employee");







const app = express()
app.use(express.json())
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employee")

app.post('/login', (req, res) => {

    const {email, password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json("Success")
            } else {
                res.json("The password is incorrect")
            }
        } else {
            res.json("No record existed")
        }
    })
})


app.post('/register', (req, res) => {

    EmployeeModel.create(req.body)
    .then(employees => res.json(employeess))
    .catch(err => res.json(err))
})


// const contactSchema = new mongoose.Schema({
//     name: String,
//     email: String, 
//     move_From: String,
//     move_To: String, 
//     phone_No: number
// });

// module.exports = mongoose.model("contact ", contactusSchema);
// app.post('/Contact', (req, res) => {

//     // const {name, email, move_From, move_To, phone_No} = req.body;
//     // .then(response => {
//     //     console.log('Success:', response.data);
//     //   })
//     //   .catch(error => {
//     //     console.error('Error:', error);
//     //   });
//     EmployeeModel.create(req.body)
//     .then(contactus => res.json(contactus))
//     .catch(err => res.json(err))
    
// });




app.listen(3001, () => {
    console.log("server is running");
})