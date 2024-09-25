// eslint-disable-next-line no-unused-vars
import React from "react";
import {useState} from 'react';
import "../css/contactus.css";
// import {Link} from "react-router-dom";
import axios from 'axios';
// import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:8080"

function ContactUs() {

    const [formData, setFormData] = useState({
        name : "",
        email : "",
        moveFrom : "",
        moveTo : "",
        number : ""
    })

    const handleOnChange = async(e)=>{
        const {value,name} = e.target
        setFormData((preve) =>{
            return{
                ...preve,
                [name] : value
            }
                
                
            
        })
    }
    


   

    const handleSubmit = (e) => {
        e.preventDefault()
       
        const data = axios.post("/create", formData)
        console.log(formData);
       
            alert("Submit Successfully")
              
            
              
         
       

    }

    return (
    
        <div>
            <h2 className="head1 my-5">Contact Us</h2>
            <div className="box">
                <div className="row">
                    
                    <div className="col-md-6">
                            <h4 className="text12">
                            Got questions or need assistance? Reach out to us today for prompt
                            and friendly support
                            </h4>
                            <br />
                            <br />
                            <h5 className="text13">Address:-</h5>
                            <br />
                            <p className="para6">Patliputra Colony - Patna ,Bihar</p>
                            <br />
                            <br />

                            <h5 className="text13">Email Us:-</h5>
                            <br />
                            <p className="para6">Delhivery_Express123@gmail.com</p>
                            <br />
                            <br />

                            <h5 className="text13">Call Us:-</h5>
                            <br />
                            <p className="para6">9939394120</p>
                            <br />
                            <br />
                    </div>

                    <div className="col-md-6">

                            <h4 className="text12">
                                Track & Schedule with Ease: One-Call Convenience for Package
                                Updates
                            </h4>

                            
                            <form onSubmit={handleSubmit}>
                    
                                    <div className="group">
                                        
                                        <input 
                                        type="text"
                                        placeholder="Enter Full Name"
                                        autoComplete="off"
                                        name="name"
                                        id="name"
                                        className="p-2 form-control rounded-4 my-4 fs-4"
                                        onChange={handleOnChange}
                                        />
    
                                        <input 
                                        type="email"
                                        placeholder="Enter Email"
                                        autoComplete="off"
                                        name="email"
                                        id="email"
                                        className="p-2 form-control rounded-4 my-4 fs-4"
                                        onChange={handleOnChange}
                                        />
    
                                        <input 
                                        type="text"
                                        placeholder="Move From"
                                        autoComplete="off"
                                        name="moveFrom"
                                        id="moveFrom"
                                        className="p-2 form-control rounded-4 my-4 fs-4"
                                        onChange={handleOnChange}
                                        />
    
                                        <input 
                                        type="text"
                                        placeholder="Move To"
                                        autoComplete="off"
                                        name="moveTo"
                                        id="moveTo"
                                        className="p-2 form-control rounded-4 my-4 fs-4"
                                        onChange={handleOnChange}
                                        />
    
                                        <input 
                                        type="number"
                                        placeholder="Enter Phone No."
                                        autoComplete="off"
                                        name="number"
                                        id="number"
                                        className="p-2 form-control rounded-4 my-4 fs-4"
                                        onChange={handleOnChange}
                                        />

                                        <button type="submit" className="btn btn-success w-15   rounded-4" id="form_submit">
                                        Submit
                                        </button>
                                    </div>
                                            
                                            
                                    
                            </form>
                               
                           
                    </div>        
                
                </div>   
            </div>
        </div>
    
    );
}

export default ContactUs;