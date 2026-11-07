import MyImage from '../assets/me.jpeg'
import GithubActivity from "./GithubActivity";


function Profile(){

  return(
    <div className="flex flex-col gap-5">

      <div className="flex gap-5">
        
        <img src={MyImage} className="h-70 border-b-6 border-l-6 border-2 border-black rounded-xl mr-5" />
        
        <div className="flex flex-col gap-5">
          <p className="text-lg text-green-500 underline">My name is Abhinandan Jitendra Manakapure</p>
          <p className="text-lg text-green-500">I am a 21 year old engineering student studying B.tech in Mathematics and computing and looking forward to make career in quantitative finance and I like mathematics and compute science a lot. </p>
          <p className="text-lg text-green-500">I promise myself to work had and achive the goals and make my parents proud.</p>
        </div>
        

      </div>

      <div className="text-xl text-green-500">
        <p className="mb-2">My Current Skills</p>
        <p className="ml-10"><span className="text-red-500">Technical Languages</span> : Python, Javascript, c++</p>
        <p className="ml-10"><span className="text-red-500">Frontend</span> : HTML, CSS, React, Redux</p>
        <p className="ml-10"><span className="text-red-500">Backend</span> : Node js, FastAPI, MySQL, RestAPI</p>
        
        <p className="ml-10 mt-5"><span className="text-red-500">Mathematics</span> : Linear Algebra, Probability Theory, Calculus</p>
      </div>


      <div className="text-xl text-green-500">
        <p className="mb-2">My Activity on GitHub</p>
        <GithubActivity username="abhinandan029" startYear={2025} />
      </div>
      

    </div>
  );

}

export default Profile