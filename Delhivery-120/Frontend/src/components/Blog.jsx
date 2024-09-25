// import React from 'react'
import blog1 from './images/blog1.webp';
import blog2 from './images/blog2.webp';
import blog3 from './images/blog3.webp';
import blog4 from './images/blog4.webp';
import "../css/blog.css";



export default function Blog() {
  return (
    <div>
      <h2 className='head1 my-5 text2'>BLOGS</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={blog1} className='image2' />
            <h2 className='text14'>Top 10 Tips for Safe and Secure Package Delivery</h2>
            <p className='para7'>In todays fast-paced world, package delivery has become an integral part of our lives. Whether you are sending a gift to a loved one or receiving an important shipment for your business, ensuring the safe and secure delivery of your packages is paramount.</p>
           <a href="/blog1"> <button className="btn" id="dispatch">Read More</button></a>


          </div>

          <div className="col-md-6">
            <img src={blog2} className='image2' />
            <h2 className='text14'>Streamlining Your Corporate Relocation: Expert Tips and Tricks</h2>
            <p className='para7'>Corporate relocations can be both exciting and daunting for businesses. Whether you are moving to a new office space to accommodate growth or relocating your entire headquarters to a different city, the process requires careful planning and execution to ensure a smooth transition.</p>
            <a href="/blog2"> <button className="btn" id="dispatch">Read More</button></a>


          </div>

          <div className="col-md-6 my-5">
            <img src={blog3} className='image2' />
            <h2 className='text14'>The Future of Delivery: Trends and Innovations to Watch</h2>
            <p className='para7'>The world of delivery is evolving rapidly, driven by technological advancements, changing consumer expectations, and the rise of e-commerce. From drone delivery to autonomous vehicles and sustainable packaging solutions, the future of delivery is filled with exciting possibilities.</p>
            <a href="/blog3"> <button className="btn" id="dispatch">Read More</button></a>


          </div>

          <div className="col-md-6 my-5">
            <img src={blog4} className='image2' />
            <h2 className='text14'>Navigating the Last-Mile Delivery Challenge: Strategies for Success</h2>
            <p className='para7'>Last-mile delivery, the final leg of the delivery process from a distribution center to the end destination, presents unique challenges and opportunities for delivery companies. Lets explore the complexities of last-mile delivery and share strategies for success that delivery companies can implement to overcome...</p>
            <a href="/blog4"> <button className="btn" id="dispatch">Read More</button></a>


          </div>
        </div>
      </div>
      <div className='box my-5'>
        <div className='row'>
          <div className='col-md-10'>
            <h2 className='text4'>Unlock Seamless Logistics: Book Your Appointment Now!</h2>
          </div>

          <div className='col-md-2'>
            <button className="btn" id="dispatch">Dispatch Today</button>
          </div>
        </div>
      </div>
    </div>
  )
}
