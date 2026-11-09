export default function Projects(){

  const projects = [
    {
      name : "NoteMark", 
      description : "It was my project which I made when i first learned about web development. It is a simple tool which helps to write notes in markdown and shows the live preview side by side and also provide the option to export PDF and markdown file. It uses browsers local storage to save the notes and also comes with a dark and light mode.", 
      stack : "React, HTML, CSS, Javascript, libraries used  : remark-gfm, html2pdf.js, MySQL, Deployed in : gihub pages",
      git : "https://github.com/abhinandan029/Notemark.git", 
      live : "https://abhinandan029.github.io/Notemark/",
    },
    {
      name : "ThreadCode", 
      description : "It is my second project, I made when I learned to create a Server(Backend). It is a web app which helps more than two people to write code in a same inbuilt editor in a call(called meeting in my app). It Only supports Javascript for now. It is not perfect but it works. Currently its servers are not on. I am still working on it.", 
      stack : "React, HTML, TailwindCSS, Javascript, NodeJs(express), Websockets, Auth and cookie management, MySQL",
      git : "https://github.com/abhinandan029/ThreadCode.git", 
    },
    {
      name : "PlayVerse", 
      description : "It is the project I made to improve my tech skills, It is a website where u can explore and know more about the all types of video games and can also play some games which my website provide (currently three : snake game, floating block, pac man), It also has the option to whishlist the games and manage your profile.", 
      stack : "React, HTML, TailwindCSS, Javascript, NodeJs(express), OAuth, JWT, EmailJS, MySQL, Deployed in : cloudflare pages and D1 sqlite and Render",
      git : "https://github.com/abhinandan029/PlayVerse.git", 
      live : "https://playverse-5b3.pages.dev/"
    },
    {
      name : "ByteForge-Inclusive-Talent-Navigator", 
      description : "This is the project I made to participate in the SAP Hackfest 2026. It was theme based project which mainly solves the problems of companies to keep track of the employee's performance and promotion cycles using our AI agents.", 
      stack : "React, HTML, TailwindCSS, Javascript, FastAPI, Python, AI agents, MCP-server, SAP HANA Database",
      git : "", 
      live : ""
    }
  ]

  return(
    
    <div className="flex flex-col gap-5">

      <p className="text-green-500 text-2xl">My Projects :</p> 
        {
          projects.map(p => {
            return (
              <div className="text-white mx-10 border-b-6 border-l-6 border-2 border-black bg-[#1c1c1c] p-2">
                <p className="text-xl">Project Name : <span className="text-red-500">{p.name}</span></p>
                <p className="text-orange-500 text-[14px] py-2 border-y border-white">{p.description}</p>
                <p className="text-xl">Tech Stack : <span className="text-green-500">{p.stack}</span></p>
                <p className="text-xl">Github repo : <span className="text-blue-500 underline"><a href={p.git}>{p.name}</a></span></p>
                { p.live && <p className="text-xl">Web App : <span className="text-blue-500 underline"><a href={p.live}>{p.name}</a></span></p> }
              </div>
            )
          })
        }

    </div> 
    
  );

}

