// import React from 'react'
import logo4 from './images/logo4.png'
import logo5 from './images/logo5.png'
import logo6 from './images/logo6.png'
import "../css/home.css";
export default function Home() {
  return (
    <div>
      <h2 className='text1'>Welcome to Delivery Express</h2>
      <div className='box'>
        <p className='para1'>Welcome to Delivery Express, where convenience meets reliability in every shipment. Our company prides itself on offering top-notch package pickup and delivery services tailored to your needs. Whether you’re sending a small parcel or planning a corporate relocation, we’ve got you covered from start to finish. With our streamlined booking process and real-time tracking, you can trust us to handle your items with care and precision, ensuring they reach their destination promptly and securely.

          At Delivery Express, we understand the importance of seamless transitions, especially when it comes to corporate moves. That’s why our expert team is dedicated to providing comprehensive relocation solutions designed to minimize disruption to your business operations. From packing and loading to transportation and unpacking, we take care of every detail so you can focus on what matters most. With our commitment to excellence and customer satisfaction, you can rest assured that your move is in good hands with Delivery Express.</p>
      </div>

      <div className='container'>
        <h2 className='text2'>Featured Services</h2>
        <div className='row'>
          <div className='col-md-4'>
            <img src={logo4} className='image' />
            <div className='container'>
              <h3 className='text3'>Door-to-Door Package Pickup and Delivery</h3>
              <p className='para2'>From pickup to delivery, our seamless and efficient service ensures convenience and reliability for packages of all sizes, providing hassle-free logistics solutions from your doorstep to theirs.</p>
            </div>

          </div>
          <div className='col-md-4'>
            <img src={logo5} className='image' />
            <div className='container'>
              <h3 className='text3'>Tailored Corporate Relocation Services</h3>
              <p className='para2'>Tailored relocation services designed specifically for businesses, facilitating smooth transitions between office spaces while minimizing downtime and disruption to operations.</p>
            </div>

          </div>
          <div className='col-md-4'>
            <img src={logo6} className='image' />
            <div className='container'>
              <h3 className='text3'>Streamlined Booking and Tracking</h3>
              <p className='para2'>Easy one-call booking and on-call package tracking capabilities, providing customers with hassle-free logistics management and real-time visibility into the status of their shipments.</p>
            </div>

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
