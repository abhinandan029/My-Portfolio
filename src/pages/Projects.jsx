import {FaGithub} from 'react-icons/fa6'
import '../styles/Projects.css'

function Projects(){
return(
  <div id="Projects" className="Projects">
    <h2 id="projectName">My Portfolio</h2>
      <ul id="description">
        <li>Designed and developed a fully responsive personal portfolio website using modern web technologies to showcase my skills, projects, and professional profile. </li>
        <li>The website features a clean and user-friendly interface with smooth navigation, responsive layouts, and an attractive design optimized for both desktop and mobile devices.</li>
      </ul>

      <p id="projectLink">Links : <a href=""><FaGithub /></a></p>
    
  </div>
);

}

export default Projects