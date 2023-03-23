import React from 'react';
import profilePic from '../images/profile.png';
import './About.css';
import educationHistory from "../data/education.json";
import {FaGraduationCap} from "react-icons/fa"

const EducationCard = ({ institution, degree, graduationYear, image }) => {
  return (
    <div className="education-card">
      <img src={image} alt={institution} className="education-image" />
      <div className="education-details">
        <div className="education-institution">{institution}</div>
        <div className="education-degree">{degree}</div>
        <div className="education-graduation-year">{graduationYear}</div>
      </div>
    </div>
  );
};
function About() {
  return (
    <div>
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
      <h2 className="education-header">Education</h2>
      <div className="education-timeline">
        {educationHistory.map((education, index) => (
          <div className="timeline" key={index}>
            <div className="timeline-icon">
              <FaGraduationCap style={{color: "white"}}/>
            </div>
            <div className="timeline-content">
              <EducationCard {...education} />
            </div>
            <div className="timeline-year">{education.graduationYear}</div>
          </div>))}
      </div>
    </div>
  );
}

export default About;



