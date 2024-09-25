// import React from 'react'
import logo2 from './images/logo2.jpeg'
import "../css/services.css";

export default function Services() {
  return (
    <div>
          <h2 className='head1 my-5 text2'>Services</h2>
        <div className='box'>
            <div className='row'>
                <div className='col-md-6'>
                    <h4 className='text7'>What We Do</h4>
                    <h1 className='text8'>Effortless Logistics Solutions</h1>
                    <p className='para4'>At Delivery Express, we specialize in simplifying your logistics needs. Whether you require seamless package delivery or expert corporate moving solutions, we have got you covered.<br/><br/><br/>
                    Our services are designed to provide convenience, reliability, and peace of mind, ensuring your shipments reach their destination safely and efficiently. With our commitment to excellence and customer satisfaction, you can trust us to handle all your transportation needs with care and precision.</p>

                </div>

                <div className='col-md-6'>
                <img src={logo2} className='image1'/>
                    </div>
            </div>
        </div>

        <div className='box'>
          <h4 className='text9'>Services</h4>
          <h1 className='text10'>Seamless Logistics Solutions</h1>

          <div className='row'>
            <div className='col-md-6'>
              <h3 className='text11'>Express Package Delivery</h3>
              <p className='para5'>Efficiency in Motion: Swift and secure delivery service tailored to meet your urgent shipping needs, ensuring your parcels reach their destination on time, every time.</p>
            </div>

            <div className='col-md-6'>
              <h3 className='text11'>Corporate Relocation Services</h3>
              <p className='para5'>Business in Transit: Expert assistance for seamless corporate moves, minimizing disruption to your operations while ensuring a smooth transition to your new office space.</p>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-6'>
              <h3 className='text11'>Large Item Transport</h3>
              <p className='para5'>Handle with Care, Deliver with Confidence: Specialized handling and transportation services for oversized items, providing safe and reliable delivery to your desired location.</p>
            </div>

            <div className='col-md-6'>
              <h3 className='text11'>Real-time Tracking and Support</h3>
              <p className='para5'>Stay Connected, Stay Informed: Easy-to-use tracking system and dedicated customer support for real-time visibility into your shipments, ensuring peace of mind throughout the entire delivery process.</p>
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
