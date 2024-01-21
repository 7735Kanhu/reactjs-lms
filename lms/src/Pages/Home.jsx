import React from 'react'
import person from '../assets/hero-person.png'
import "../index.css";
import profesor from '../assets/professor.png'
import knowledge from '../assets/knowledge.png'
import Abour1 from '../assets/about-1.jpg';
import PapularCourses from '../components/PapularCourses';
import benefit from '../assets/cta-1.jpg';
import professional from '../assets/target.png'
import training from '../assets/training.png'
import process from '../assets/process.png'



const Home = () => {
  return (
    <>
      <div className="hero-wrapper">
        <div className="overlay">
          <div className="hero-container">
            <div className="hero-left">
              <h1>WE CAN TEACH YOU</h1>
              <h5>are you ready to learn?</h5>
              <button>Learn More</button>
            </div>
            <div className="hero-right">
              <img src={person} alt="person" />
            </div>
          </div>
        </div>
      </div>
      <div className="welcome">
        <div className="welcome-container">
          <div className="left-welcome">
            <h2>
              Welcome to online <br />
              learning center
            </h2>
            <p>
              There are many variations of passages of lorem ipsum available but
              the majority have suffered alteration in some form by injected
              humour or randomised words which don't look.
            </p>
            <div className="welcome-icon">
              <div className="icon">
                <img src={profesor} alt="profasor" />
                <p>Start learning from our experts</p>
              </div>
              <div className="icon">
                <img src={knowledge} alt="knowledge" />
                <p>Enhance your skills with us now</p>
              </div>
            </div>
            <button>Learn More</button>
          </div>
          <div className="right-welcome">
            <div className="right-image">
              <img src={Abour1} alt="about" />
              <div className="circle"></div>
              <p>
                TRUSTED BY <span>4890</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <PapularCourses
        url={"https://picsum.photos/v2/list"}
        limit={10}
        page={1}
      />
      <div className="mission-container">
        <div className="mission-wrapper">
          <div className="left-mission">
            <h2> Our one & only mission is to extend your knowledge base  </h2>
              <button>Learn More</button>
          </div>
          <div className="right-mission">
            <i className='fa fa-play'></i>
          </div>
        </div>
      </div>
      <div className="benefits-container">
        <div className="benifit-wrapper">
        <div className="left-benefit">
            <img src={benefit} alt="office" />
        </div>
        <div className="right-benefit">
            <h2>Benefits of learning with Us</h2>
            <p>There cursus massa at urnaaculis estie. Sed aliquamellus vitae ultrs condmentum leo massa mollis estiegittis miristum nulla sed medy fringilla vitae.</p>
            <div className="mission-icons">
              <div className="mission-icon">
              <img src={professional} alt="profesnal" />
              <h6>Professional Courses</h6>
              </div>
              <div className="mission-icon">
              <img src={training} alt="training" />
              <h6>Live Learning</h6>
              </div>
              <div className="mission-icon">
              <img src={process} alt="profesnal" />
              <h6>Expert Teachers</h6>
              </div>
            </div>
            <button>Learn More</button>
        </div>
        </div>
      </div>
    </>
  );
}

export default Home