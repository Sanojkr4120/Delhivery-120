const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/employee")


const EmployeeSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

const EmployeeModel = mongoose.model("employees", EmployeeSchema);
module.exports = EmployeeModel;




