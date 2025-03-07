import React from "react";
import "./App.css";
import profilePic from "./Photo.png";
import tsIcon from "./ts.png";
import reactIcon from "./react.svg";
import expressIcon from "./express-js.png";
import angular from "./angular.png";
import expo from "./expo.png";
import Ionic from "./ionic.png";
import node from "./nodejs.png";
import MongoDB from "./mongodb.png";





import { FaEnvelope, FaLinkedin, FaGithub, FaPhone ,FaTimes,FaBars} from "react-icons/fa";
import { useEffect,useState } from "react";


function App() {
  const [menuOpen, setMenuOpen] = useState(true);

  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });
  
    sections.forEach((section) => observer.observe(section));
  
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);


  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        window.scrollTo({
          top: targetSection.offsetTop - navbarHeight - 50, // Adjust based on navbar height
          behavior: 'smooth'
        });
      }
    });
  });
  const about="I am a Software Developer with 1.5 years of experience in web and mobile development using React.js, Angular, Ionic, and Express.js. I hold an MCA and a B.Sc. (Hons) in Computer Science, with a strong passion for building efficient, user-friendly applications."
  return (
    <div className="container">
      <header className="header" id="head">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h1 className="name">Anirban Sadhu</h1>
        <p className="title">Software Developer</p>
      </header>
      {!menuOpen && (
      <nav className="navbar" style={{minHeight:50}}>
         {/* Menu Button */}
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
         <FaBars />
      </button>
    
    
      </nav>)}
      {menuOpen && (

      <nav className="navbar">
         {/* Menu Button */}
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
         <FaTimes />
      </button>
    
        <ul className="nav-list">
        <li><a href="#head" className="nav-link">About</a></li>
        <li><a href="#education" className="nav-link">Education</a></li>


          <li><a href="#skills" className="nav-link">Skills</a></li>
          <li><a href="#work-experience" className="nav-link">Experience</a></li>

          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul> 
      </nav>)}
      <section id="about" className="section about">
        <h2 className="section-title">About Me</h2>
        <p className="section-text">
       {about}</p>
      </section>

      <section id="education" className="section education">
  <h2 className="section-title">Education</h2>

  {/* Degrees Section */}
  <div className="sub-section">
    <h3 className="sub-section-title">Degrees</h3>

    <div className="degree-timeline">
      <div className="degree card">
        <h3 className="degree-title">Master of Computer Applications (MCA)</h3>
        <p className="college-name">Asansol Engineering College</p>
        <p className="year-cgpa">2021 - 2023 | CGPA: 9.73</p>
      </div>
      
      <div className="degree card">
        <h3 className="degree-title">B.Sc. (Hons) in Computer Science</h3>
        <p className="college-name">Panchakot Mahavidyalaya</p>
        <p className="year-cgpa">2018 - 2021 | CGPA: 8.27</p>
      </div>
    </div>
  </div>

  {/* Certificates Section */}
  <div className="sub-section">
    <h3 className="sub-section-title">Certificates</h3>
    <ul className="certificates">
      <li>
        React.js Course by Scaler 
        <a 
          href="https://moonshot.scaler.com/s/li/CK8HT21QBh" 
          target="_blank" 
          rel="noopener noreferrer"
          className="view-button"
        >
          View
        </a>
      </li>
      <li>
        IOT Course by NPTEL-IITKGP
        <a 
          href="https://archive.nptel.ac.in/content/noc/NOC23/SEM1/Ecertificates/106/noc23-cs51/Course/NPTEL23CS51S5301001004062673.jpg" 
          target="_blank" 
          rel="noopener noreferrer"
          className="view-button"
        >
          View
        </a>
      </li>
    </ul>
  </div>
</section>


      <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>

        <div className="skills">
          <div className="skill">
            <img src={angular} alt="JavaScript" />
            <span className="skill-name">Angular</span>
          </div>
          <div className="skill">
            <img src={reactIcon} alt="TypeScript" />
            <span className="skill-name">React.js</span>
          </div>
          <div className="skill">
            <img src={expo} alt="React" />
            <span className="skill-name">Expo</span>
          </div>
          <div className="skill">
            <img src={Ionic} alt="Express" />
            <span className="skill-name">Ionic</span>
          </div>
          <div className="skill">
            <img src={expressIcon} alt="Express" />
            <span className="skill-name">Express.js</span>
          </div>  <div className="skill">
            <img src={node} alt="Express" />
            <span className="skill-name">Node.js</span>
          </div>  <div className="skill">
            <img src={MongoDB} alt="Express" />
            <span className="skill-name">MongoDB</span>
          </div>  <div className="skill">
            <img src={tsIcon} alt="Express" />
            <span className="skill-name">TypeScript</span>
          </div>
        </div>
      </section>



      <section id="work-experience" className="section work-experience">
  <h2 className="section-title">Work Experience</h2>
  
  <div className="sub-section">
    <h3 className="sub-section-title">Professional Experience</h3>
    <div className="job card">
      <h3 className="job-title">Software Developer</h3>
      <p className="company-name">Asansol Astha IT Projects Pvt Ltd</p>
      <p className="job-duration">Sep 2023 - Present</p>
      <p className="job-description">Developed and maintained web applications using Angular, Ionic, React Native, Express.js, and MongoDB.</p>
    </div>

    {/* <div className="job card">
      <h3 className="job-title">Frontend Developer</h3>
      <p className="company-name">ABC Solutions</p>
      <p className="job-duration">June 2021 - Dec 2022</p>
      <p className="job-description">Worked on UI/UX improvements for an e-commerce platform using Angular.</p>
    </div> */}
  </div>

  <div className="sub-section">
    <h3 className="sub-section-title">Internships</h3>
    <div className="job card">
      <h3 className="job-title">Data Annotation</h3>
      <p className="company-name">Macgence</p>
      <p className="job-duration">Jun 2023 - Jul 2023</p>
      <p className="job-description">Annotated and labeled large datasets to improve machine learning model accuracy.
</p>
    </div>
  </div>
</section>


      <section id="projects" className="section projects">
        <h2 className="section-title">Projects</h2>
       
        <div className="sub-section">
          <h3 className="sub-section-title">Official Projects</h3>
          <div className="project card">
            <h3 className="project-title">AITC Mobile App</h3>
            <h3 className="project-subtitle">Role: Fullstack Developer</h3>

            <p className="project-description">AITC is a mobile app built with Ionic, Angular, MongoDB, and Express for Asansol block members of the All India Trinamool Congress. It features NGRX Store for state management and OneSignal for push notifications, allowing members to post, view, like, comment, and manage committees and sub-committees in a hierarchical structure.</p>
       <a   target="_blank" 
   rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.clapetechnologies.aitc&pcampaignid=web_share"><button onClick={()=>{ 
             }} style={{padding:3,borderRadius:10,borderBlockColor:"blue",paddingLeft:5,paddingRight:5,marginRight:10}}>Download</button></a>

          </div>
          <div className="project card">
            <h3 className="project-title">Ebuilder Mobile App</h3>
            <h3 className="project-subtitle">Role: Mobile App Developer</h3>

            <p className="project-description">eBuilder is a React Native construction site management app with Redux, PDF, and image viewer support, streamlining land, material, and site operations.</p>
       <a   target="_blank" 
   rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.asthaitsolutions.ebuilder&pcampaignid=web_share"><button onClick={()=>{ 
             }} style={{padding:3,borderRadius:10,borderBlockColor:"blue",paddingLeft:5,paddingRight:5,marginRight:10}}>Download</button></a>

          </div>
          <div className="project card">
            <h3 className="project-title">MyAastha C-bank Mobile App</h3>
            <h3 className="project-subtitle">Role: Mobile App Developer</h3>

            <p className="project-description">MyAastha is an Ionic-Angular mobile app with Socket and Store, designed for bank officials like admins, managers, and advisers to manage all banking operations efficiently.</p>
       <a   target="_blank" 
   rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=io.asthaitsolutions.cbank&pcampaignid=web_share"><button onClick={()=>{ 
             }} style={{padding:3,borderRadius:10,borderBlockColor:"blue",paddingLeft:5,paddingRight:5,marginRight:10}}>Download</button></a>

          </div>
          <div className="project card">
            <h3 className="project-title">MConnect Mobile App</h3>
            <h3 className="project-subtitle">Role: Mobile App Developer</h3>

            <p className="project-description">MConnect is an Ionic-Angular banking app for MyAastha Bank users, integrating OneSignal and WebSocket for real-time updates, account statements, and maturity calculations.</p>
       <a   target="_blank" 
   rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.clapletechnologies.cbankmemers&pcampaignid=web_share"><button onClick={()=>{ 
             }} style={{padding:3,borderRadius:10,borderBlockColor:"blue",paddingLeft:5,paddingRight:5,marginRight:10}}>Download</button></a>

          </div>
          <div className="project card">
            <h3 className="project-title">PTC Web Application POC</h3>
            <h3 className="project-subtitle">Role: Web Developer</h3>

            <p className="project-description">PTC Website POC is an Angular-based proof of concept developed to showcase Asansol Municipality's property tax collection system as part of a tender proposal.</p>
       <a   target="_blank" 
   rel="noopener noreferrer" href="http://143.110.251.94/ptcweb/#/sign-in?redirectURL=%2Fdashboards%2Fproject"><button onClick={()=>{ 
             }} style={{padding:3,borderRadius:10,borderBlockColor:"blue",paddingLeft:5,paddingRight:5,marginRight:10}}>Visit Site</button></a>

          </div>
   
        </div> <div className="sub-section">
          <h3 className="sub-section-title">Personal Projects</h3>
          <div className="project card">
            <h3 className="project-title">Technify Blog </h3>
            <h3 className="project-subtitle">Tech: React Js, Html, Css etc.</h3>

            <p className="project-description">Technify Blogging Site is a personal project, a React.js-based blog app entirely developed by me to share technical blogs.</p>
       <a   target="_blank" 
   rel="noopener noreferrer" href="https://technifyweb.netlify.app"><button onClick={()=>{ 
             }} style={{padding:3,borderRadius:10,borderBlockColor:"blue",paddingLeft:5,paddingRight:5,marginRight:10}}>Visit Site</button></a>
   <a   target="_blank" 
   rel="noopener noreferrer" href="https://github.com/anirbansadhu/React_blog_technify"><button onClick={()=>{ 
             }} style={{padding:3,borderRadius:10,borderBlockColor:"blue",paddingLeft:5,paddingRight:5,marginRight:10}}>View Codes</button></a>
          </div>
          <div className="project card">
            <h3 className="project-title">Portfolio Site </h3>
            <h3 className="project-subtitle">Tech: React Js, Html, Css etc.</h3>

            <p className="project-description">Portfolio Site is a personal project built with React.js to showcase my skills, projects, and professional journey</p>
       <a   target="_blank" 
   rel="noopener noreferrer" href="/"><button onClick={()=>{ 
             }} style={{padding:3,borderRadius:10,borderBlockColor:"blue",paddingLeft:5,paddingRight:5,marginRight:10}}>Visit Site</button></a>
   <a   target="_blank" 
   rel="noopener noreferrer" href="https://github.com/anirbansadhu"><button onClick={()=>{ 
             }} style={{padding:3,borderRadius:10,borderBlockColor:"blue",paddingLeft:5,paddingRight:5,marginRight:10}}>View Codes</button></a>
          </div>
     
        </div>
      </section>
      <section id="contact" className="section contact">
  <h2 className="section-title">Contact</h2>
  <p className="contact-info">
        <a href="tel:+916294243924" className="contact-link">
          <FaPhone  /> +91 62942 43924
        </a>
      </p>
  <p className="contact-info">
    <FaEnvelope /> 
    <a href="mailto:anirbansadhu56@gmail.com" className="contact-link">
    anirbansadhu56@gmail.com
</a>
  </p>
  <p className="contact-info">
    <FaLinkedin /> 
    <a href="https://in.linkedin.com/in/mca-anirban-sadhu" target="_blank" rel="noopener noreferrer" className="contact-link">
    https://in.linkedin.com/in/mca-anirban-sadhu 
    </a>
  </p>
  <p className="contact-info">
    <FaGithub />
    <a href="https://github.com/anirbansadhu" target="_blank" rel="noopener noreferrer"           className="contact-link"
    >
    https://github.com/anirbansadhu
    </a>
  </p>
</section>
      <footer className="footer">
        <p className="footer-text">&copy; 2025 Anirban Sadhu. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
