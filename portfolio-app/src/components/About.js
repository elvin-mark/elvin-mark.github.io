import React from 'react';
import profilePic from '../images/profile.png';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <div className="description-container">
        <h2>About Me</h2>
        <p>
          Hi there! My name is Elvin and I'm a software engineer with a passion for AI and for learning in general. I have several years of experience working in personal projects and some years of experience working in companies using cutting-edge technologies and developing complex software systems.
        </p>
        <p>
          In my free time, I enjoy learning new things, working on personal projects just for fun, and sharing my knowledge with others. I also love to travel and explore new places and new food whenever I get the chance.
        </p>
      </div>
    </div>
  );
}

export default About;



