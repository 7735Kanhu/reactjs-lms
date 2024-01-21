import React, { useState } from 'react'
import cources from '../assets/course-1-3.jpg'

const PapularCourses = ({url,limit=5,page}) => {
  const [image,setImage] =useState([])

  
  return (
    <div className='papular-container'>
        <div className="popular-header-container">
            <div className="popular-header-wrapper">
            <h2>Explore our <br />popular courses</h2>
            </div>
        </div>
        <div className="courses-container">
            <div className="courses-card">
                <img src={cources} alt="cources" />
                <div className="card-body">
                <p>by <span>Ruth Becker</span></p>
                <h3>Improve editing skills</h3>
                <hr />
                <div className="status">
                    <span>3 months</span><span>Open</span>
                </div>
                <button>See Preview</button>
                </div>
            </div>
            <div className="courses-card">
                <img src={cources} alt="cources" />
                <div className="card-body">
                <p>by <span>Ruth Becker</span></p>
                <h3>Improve editing skills</h3>
                <hr />
                <div className="status">
                    <span>3 months</span><span>Open</span>
                </div>
                <button>See Preview</button>
                </div>
            </div>
            <div className="courses-card">
                <img src={cources} alt="cources" />
                <div className="card-body">
                <p>by <span>Ruth Becker</span></p>
                <h3>Improve editing skills</h3>
                <hr />
                <div className="status">
                    <span>3 months</span><span>Open</span>
                </div>
                <button>See Preview</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PapularCourses