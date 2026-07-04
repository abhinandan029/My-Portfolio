import {FaGithub, FaLink} from 'react-icons/fa6'
import {useState, useEffect} from 'react'

import '../index.css'


const profileURL = `https://api.github.com/users/abhinandan029`;

const reposURL = `https://api.github.com/users/abhinandan029/repos?sort=updated&per_page=100`;


function Projects(){

  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(
    () => {
      async function fetchData(){
        try{
          setLoading(true);
          const [profileRes, reposRes] = await Promise.all([
            fetch(profileURL),
            fetch(reposURL)
          ]);

          if (!profileRes.ok || !reposRes.ok) throw new Error("failed to fetch the data");

          const profileData = await profileRes.json();
          const reposData = await reposRes.json();

          setProfile(profileData);
          setRepos(reposData);
        } 
        catch(error){
          setError(error.message);
        } 
        finally {
          setLoading(false);
        }
      }

      fetchData();
    }, []
  );

  if (loading) return <div id="loading">Loading....</div>
  if (error) return <div>Error : {error}</div> 


  return(
    
    <div id="Profile">
      <div id="box"> 
        <div id="profile_info">
          <img id="profile_pic" src={profile.avatar_url}/>
          <p id="username">{profile.name}</p>
          <p id="bio">{profile.bio}</p>
        </div>
        

        <div id="repos">

          <h2>Repositries</h2>
            
          {repos.map( (repo) => {
            return (
              <div key={repo.id} id="repo_info">
                <div id="repo" >
                  <p id="repo_name">
                    <a  
                      title="github link"  
                      onClick={(e) => window.open(repo.html_url, "_blank", "noopener,noreferrer")}>
                    {repo.name}</a>
                  </p >
                  <p id="visibility">{repo.private ? "private" : "public"}</p>
                </div>

                <div id="tech_info">
                  <div id="language">{repo.language}</div>
                  <div id="stars">{`${repo.stargazers_count}⭐`}</div>
                  
                  <a 
                    id="web_link" 
                    title="deployed page" 
                    onClick={(e) => window.open(`https://abhinandan029.github.io/${repo.name}/`, "_black", "noopener,noreferrer")}>
                      <FaLink />
                  </a>
                </div> 
              </div>
            );
          })}

        </div>
      </div>
    </div> 
    
  );

}

export default Projects