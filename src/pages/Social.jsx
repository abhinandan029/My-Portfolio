export default function Social(){

  const media = [
    {name : "LinkedIn", link : "https://www.linkedin.com/in/abhinandan-manankapure-6b030b348",},
    {name : "GitHub", link : "https://github.com/abhinandan029",},
    {name : "Instagram", link : "https://www.instagram.com/_abhi_2903_/",},
  ]
  return (
    <div className="m-5 flex flex-col items-center gap-5">
      {
        media.map(m => {
          return (
            <div key={m.name} className="flex flex-col gap-2 items-center justify-center px-10 py-4 border border-l-5 border-b-5 border-white">
              <p className="text-xl text-red-500 font-bold">{m.name}</p>
              <a href={m.link} className="text-green-500 border border-l-3 border-b-3 border-white px-2 py-1" target="_blank">Visit</a>
            </div>
          )
        })
      }

    </div>
  )
}