// eslint-disable-next-line no-unused-vars
import React from "react";
import {useState} from 'react';
import "../css/about.css";
// import {Link} from "react-router-dom";
import axios from 'axios';
// import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:8080"

export default function About() {
    
    const [formData, setFormData] = useState({
        name : "",
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
        <div >
            <h2 className='head1 my-5'>ABOUT US</h2>
            <div className='box'>
                <h3 className='text5'>Empowering Seamless Logistics: Our Mission is to Redefine Convenience in Transportation, While Our Vision Strives for a World Where Shipping and Moving are Effortless and Stress-Free.</h3>
                <div className='row'>
                    <div className='col-md-4'>
                        <h4 className='text6'>Our Mission</h4>
                        <p className='para3'>We are dedicated to revolutionizing convenience in logistics. Our commitment lies in offering seamless, reliable, and innovative solutions for package delivery and corporate moving. We aim to empower individuals and businesses alike with hassle-free transportation services, ensuring peace of mind and satisfaction throughout the entire process.<br /><br />Driven by our mission, we continually strive to surpass expectations and cultivate enduring relationships with our clients. Moreover, We are deeply committed to making a positive impact on the communities we serve, aiming to foster growth and prosperity through our dedicated services. At At Delivery Express, our mission is clear: to redefine convenience in logistics and leave a lasting impression on every doorstep we reach.</p>

                    </div>

                    <div className='col-md-4'>
                        <h4 className='text6'>Our Vision</h4>
                        <p className='para3'>At Delivery Express, our values form the cornerstone of our operations. We prioritize reliability, ensuring our customers consistently rely on us for seamless package deliveries and precision-driven corporate moves. Through collaboration and teamwork, we leverage diverse talents to uphold our unwavering commitment to excellence.


                            <br /><br />Our culture of innovation and dedication to core values drive us toward our vision of industry leadership. Each team member contributes to our success, propelling us forward as we strive to deliver unparalleled logistics solutions. At Delivery Express, We are more than just a delivery service; We are your trusted partner, delivering reliability and excellence with every doorstep.</p>

                    </div>

                    <div className='col-md-4'>
                        <h2 className='form-title' id='conthead'> Reach Out To Us</h2>
                        <form onSubmit={handleSubmit}>
                    
                            <div className='group' >
                        
                                <input 
                                type="text"
                                placeholder="Enter Full Name"
                                autoComplete="off"
                                name="name"
                                id="name"
                                className="p-2 form-control rounded-4 fs-4 "
                                onChange={handleOnChange}
                                />


                                <input 
                                type="number"
                                placeholder="Enter Phone No."
                                autoComplete="off"
                                name="number"
                                id="number"
                                className="p-2 form-control rounded-4  my-5 fs-4 "
                                onChange={handleOnChange}
                                />


                                <button type="submit" className="btn btn-success w-15   rounded-4" id="form_submit" >
                                    Submit
                                </button>
                            </div>
                                    
                                    
                            
                        </form>
                    </div>
                </div>
            </div>
            <div className='box my-5'>
                <div className='row'>
                    <div className='col-md-10'>
                        <h2 className='text4' id="appoint">Unlock Seamless Logistics: Book Your Appointment Now!</h2>
                    </div>

                    <div className='col-md-2'>
                        <button className="btn" id="dispatch">Dispatch Today</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
