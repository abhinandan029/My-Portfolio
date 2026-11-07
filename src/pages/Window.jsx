import {useState} from "react"

import Profile from "./Profile"
import Journey from "./Journey"

export default function WindowDiv(){

  const menu = [
    {id : "profile", name : "Profile"}, 
    {id : "myjourney", name : "My Journey"},
    {id : "projects", name : "Projects"},
    {id : "feedback", name : "Feedback"},
    {id : "social", name : "Social"},
  ]

  const [active, setActive] = useState("profile")

  return (
    <div 
    className="relative h-150 w-200 bg-white m-auto justify-self-center border border-black border-b-15 border-l-15 border-t-5 border-r-5">

      <div className="flex flex-row h-[5%] bg-white"  >
        {
          menu.map((i) => {
            return (
              <button 
              key={i.id} 
              className={`${active === i.id ?  "text-white bg-black/95" : "text-black bg-white"} text-[16px] border-r-2 border-black px-2 cursor-pointer`}
              onClick={() => setActive(i.id)}>

                {i.name}
              
              </button>
            )
          })
        }

      </div>

      {
        active === "profile" && 
        <div className="h-[95%] p-3 text-black bg-black/85 overflow-y-scroll">
          <Profile />
        </div>
      }

      {
        active === "myjourney" && 
        <div className="h-[95%] p-3 bg-black/85 overflow-y-scroll">
          <Journey />
        </div>
      }

      
    </div>
  )
}