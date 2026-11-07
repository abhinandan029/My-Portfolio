
import firstYearImage from "../assets/1styear.jpeg"
import currentImage from "../assets/current.jpeg"
import hackfestImage from "../assets/hackfest.jpeg"
import mmaImage from "../assets/mma.jpeg"
import pucImage from "../assets/puc.jpeg"

export default function Journey(){

  const items = [
    {
      period : "2021 - 2023", 
      label : "Hello world!!!...", 
      description : "Got admission in the Science stream with Computer Science and learned to write code in c++ and completed my +2 with a statisfying result and later attempted JEE and failed to clear the exam.", 
      lesson : "Never forget your roots..",
      img : pucImage
    },
    {
      period : "2023 - 2024", 
      label : "Trying again is not a waste...", 
      description : "Thought too much and again attempted JEE by studying a whole year, But it was a failure again but learned many things and fell in love with mathematics which lead to choose the branch Mathematics and computing.", 
      lesson : "You are destined to go where u nedd to be.",
    },
    {
      period : "2024 - SEP 2025", 
      label : "Lost in chaos", 
      description : "Joined MSRUAS and opted B.tech in Mathematics and Computing, Initially had too much excitement, But got disappointed by the course because I wanted make my career in Quantitative Finance but course was irrelevant.", 
      lesson : "Disappointment are part of life",
      img : firstYearImage
    },
    {
      period : "OCT 2025 - FEB 2026", 
      label : "The lost mind", 
      description : "After disappointment and spending nearly one and a half year got to know about MMA and joined our college club and worked hard and mastered the skills of martial arts, I was very good at Wrestling and Participated in a BJJ tournament and the same thing again faced a failure, I lost the fight.", 
      lesson : "Accept the failures and move on.",
      img : mmaImage
    },
    {
      period : "MAR 2026 - OCT 2026", 
      label : "Realization...", 
      description : "Somewhere in my mind I still wnated to a Quantitative Developer(Quant Dev), So I changed my mind and started focusing on my Career and began to develop my skills. By the end of October i was able to build website, apps and Softwares on my own from scratch.", 
      lesson : "Don't giveup on your dreams",
    },
    {
      period : "OCT 2026 - NOV 2026", 
      label : "Failure returns with a achivement", 
      description : "To put my skills to work I and my team of 5 members registered to SAP Hackfest 2026 in which we qualified the regional round and later participated in grand finale at New Horizon college and failed again.", 
      lesson : "You still need keep your fire burning.",
      img : hackfestImage
    },
    {
      period : "NOV 2026 - And so on", 
      label : "Journey ain't over, Its just beginning.", 
      description : "Still got to work on my skills and prepare for my ultimate goal to become a Quantitative software developer.", 
      lesson : "Keep working hard....",
      img : currentImage
    },

  ]
  
  return (
    <div className="flex flex-col gap-5">

      <p className="text-green-500 text-2xl">My Journey :</p> 
      {
        items.map(i => {
          return (
            <div className="text-white mx-10 border-b-6 border-l-6 border-2 border-black bg-[#1c1c1c] p-2">
              <p className="text-xl">Period : <span className="text-red-500">{i.period}</span></p>
              <p className="text-xl">Title : <span className="text-green-500">{i.label}</span></p>
              <p className="text-orange-500 text-[14px] py-2 border-y border-white">{i.description}</p>
              <p className="text-xl">Lesson : <span className="text-green-500">{i.lesson}</span></p>
              { i.img && <img src={i.img} className="justify-self-center m-2 h-80 border-2 border-b-5 border-l-5 border-black" />}
            </div>
          )
        })
      }

    </div>
  )
}