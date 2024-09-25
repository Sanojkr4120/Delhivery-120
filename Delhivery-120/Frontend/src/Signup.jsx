// eslint-disable-next-line no-unused-vars
import React from "react";
import {useState} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Signup() {
    
    const [name, setName] = useState()
  
    const [email, setEmail] = useState()
   
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/register", {name, email, password})
        .then(result => {console.log(result)
            navigate('/login')
        })
        .catch(err => console.log(err));

    }

    return (
    
        <div className="d-flex gap-4 justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-4  rounded wx-25">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="text">
                            <strong>Name</strong>
                        </label>
                        <input 
                        type="text"
                        placeholder="Enter Full Name"
                        autoComplete="off"
                        name="texts"
                        className="form-control rounded-0"
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input 
                        type="email"
                        placeholder="Enter Email"
                        autoComplete="off"
                        name="emails"
                        className="form-control rounded-0"
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input 
                        type="password"
                        placeholder="Enter Password"
                        autoComplete="off"
                        name="password"
                        className="form-control rounded-0"
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" id='login' className="btn btn-success w-100 rounded-0">
                        Sign Up
                    </button>
                </form>
                    <p>Already Have an Account</p>
                    <Link to="/login"
                    id='login'
                     className="btn btn-default border w-100 bg-light rounded-0 h-5 text-decoration-none" >Login</Link>
                    



                        
                
                
            </div>
        </div>
    
    );
}

export default Signup;