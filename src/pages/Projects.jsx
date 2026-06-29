import {FaGithub, FaLink} from 'react-icons/fa6'

import '../styles/Projects.css'

function Projects(){
 
  return(
    <div id="Projects">
      <div  className="Projects">
        <h2 id="projectName">My Portfolio</h2>
        <ul id="description">
          <li>Designed and developed a personal portfolio website using React.js, showcasing projects, skills, and professional
              background with a clean, responsive UI</li>
          <li>Implemented a feedback/contact form enabling visitors to send messages directly, enhancing user engagement and
              professional accessibility.</li>
          <li>Deployed a fully responsive, component-based web application with reusable React components, demonstrating
              proficiency in modern front-end development practi</li>
        </ul>

        <p >Links : </p>
        <div id="projectLinks">
          <a title="Github Repo" onClick={(e) => window.open("https://github.com/abhinandan029/My-Portfolio", "_blank", "noopener,noreferrer")} ><FaGithub /></a>
          <a title="Deployed web page" onClick={(e) => window.open("https://abhinandan029.github.io/My-Portfolio/", "_blank", "noopener,noreferrer")} ><FaLink /></a>
        </div>
      
      </div>

    </div>
  );

}

export default Projects