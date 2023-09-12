import React from "react";
import "../../styles/resume.css";
import MyResume from "../../assets/Coby Walsh Resume.pdf";
import { FaGithub } from 'react-icons/fa'; 

const styles = {
  resumeStyle: {
    background: "#82f4b1",
  },
  ResumeStyle: {
    fontSize: "100px",
  },
  iconStyles: {
    fontSize: '40px'
  }
};

function resume() {
  const handleDownloadResume = () => {
    const anchor = document.createElement("a");
    anchor.href = MyResume;
    anchor.download = "Coby Walsh Resume.pdf";
    anchor.click();
  };
  return (
    <header style={styles.resumeStyle} id="myResume" className="resume">
      <h1 style={styles.ResumeStyle}>Resume</h1>
      <div id="resumeInfo" className="resumeInfo">
      <h2>Coby Walsh</h2>
      <h3>Phone: 509-389-7222</h3>
      <h3>Email: cobywalsh89@gmail.com</h3>
      <h4>Summery of Qualifications:</h4>
      <ul>
        <li>10 years of work experience in the outdoor industry</li>
        <li> 6 years of experience working as a ski patroller</li>
        <li> 7 years of medical experience</li>
        <li> Mentorship experience</li>
        <li> Leadership experience</li>
        <li>Teaching experience</li>
        <li>10 years of customer service experience</li>
      <h4>Experience:</h4>
        <h5>University of Utah Emergency Department</h5>
        <li>Gain IV access</li>
        <li>Assist in traumas, criticals, and brain attacks</li>
        <li>Document vitals</li>
        <li>Assist nurses and doctors with various tasks</li>
        <h5>Ski Patrol at Park City Mountain Resort, Park City Utah</h5>
        <li>Rookie trainer for 4 seasons</li>
        <li>Quickly respond to on mountain medical emergencies</li>
        <li>Avalanche mitigation</li>
        <li>Team lead for 3 seasons</li>
        <li>Mentor new patrollers</li>
        <li>Maintain slow signs, rope lines and speak to reckless skiers</li>
        <h5>Mountain Guide at RMI, Ashford Washington</h5>
        <li>Assist in teaching snow school</li>
        <li>Ability to perform team and solo crevasse rescue</li>
        <li>Safely mitigate/manage mountain hazards</li>
        <li>Manage up to three clients on my rope team</li>
        <h5>Trip Leader at Splore, Salt Lake City Utah</h5>
        <li>Pre-Trip gear staging, food preparation, medical gear check</li>
        <li>
          Provide trips for clients with cognitive and physical disabilities
        </li>
        <li>Provide a fun and safe environment for clients</li>
        <li>Interact with a wide variety of organizations</li>
        <li>Mentor guides and interns</li>
        <h5>
          Assistant Outdoor Coordinator at EPIC Adventures, Cheney Washington
        </h5>
        <li>Program logistics</li>
        <li>Trip leader mentoring</li>
        <li>Trip leader assistance</li>
        <h4>Education:</h4>
        <li>Eastern Washington University</li>
        <li>Studied Recreation Management</li>
        <li>Aerial lift evacuation</li>
        <li>Avalanche pro one</li>
        <li>Pro rescue</li>
        <li>EMT certification</li>
        <li>Full Stack Coding Bootcamp at the University of Utah</li>
      </ul>

      <button onClick={handleDownloadResume}>Download Resume</button>
    </div>
    <footer style={styles.footerStyles}>
        {/* GitHub link */}
        <a
          href="https://github.com/CobyWalsh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub style={styles.iconStyles} /> GitHub
        </a>
      </footer>
    </header>
  );
}

export default resume;
