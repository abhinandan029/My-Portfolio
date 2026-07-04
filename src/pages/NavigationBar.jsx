import {FaGithub, FaLinkedin} from 'react-icons/fa6'

import '../index.css'


function NavigationBar(){

  return(
    <div className="NavigationBar">
      <button id="myinfo" ><a href="#MyInfo" id="links">About Me</a></button>
      <button id="projects" ><a href="#Profile" id="links">Repositries</a></button>
      <button id="feedback" ><a href="#Feedback" id="links">Feedback</a></button>
      <div className="links" >
        <a id="git" onClick={(e) => window.open("https://github.com/Abhinandan029", "_blank", "noopener,noreferrer")} title="GitHub profile">
          <FaGithub/>
        </a>
        <a id="linkedin" onClick={(e) => window.open("https://www.linkedin.com/in/abhinandan-manankapure-6b030b348/", "noopener,noreferrer")} title="LinkedIn profile">
          <FaLinkedin  />
        </a>
      </div>
      
    </div>
  );

}

export default NavigationBar