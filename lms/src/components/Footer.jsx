import React from 'react'

const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className="footer-container">
            <div className="footer-links">
                <h5>Courses</h5>
                <p>Introduction Web Design</p>
                <span>Mike Hardson</span>
                <p>Learning MBA Management</p>
                <span>Jessica Brown</span>
            </div>
            <div className="footer-links">
                <h5>Explore</h5>
               <ul>
                <li>About</li>
                <li>Overview</li>
                <li>Teachers</li>
                <li>Join Us</li>
               </ul>
            </div>
            <div className="footer-links">
                <h5>Gallery</h5>
               <ul>
                <li>Help</li>
                <li>Contact</li>
                <li>Register Now</li>
                <li>Join Us</li>
               </ul>
            </div>
            <div className="footer-links">
                <h5>About</h5>
               <p>Lorem ipsum dolor sit ametcon, sectetur adipiscing elit. Phasellus vehic sagittis euismod.</p>
            </div>
        </div>
        <div className="footer-buttom">
            <p>© Copyright 2024 by <span>Kanhu Charan</span></p>
            <div className="right-footer">
              <i className="fa-brands fa-linkedin-in"></i>
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
        </div>
    </div>
  )
}

export default Footer