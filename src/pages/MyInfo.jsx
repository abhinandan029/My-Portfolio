import MyImage from '../assets/me.jpeg'

import '../styles/MyInfo.css'

function MyInfo(){

  return(
    <>
      <div id="MyInfo" className="MyInfo">
        <img src={MyImage} id="myimage"></img>
        <div id="details">
          <p >
            My name is Abhinandan Manakapure. I am currently pursuing my Bachelor of Engineering (B.E.) in Computer Science. I am passionate about technology, especially web development and continuously learning new programming skills. I enjoy building projects using HTML, CSS, JavaScript, and React, and I am always looking for opportunities to improve my technical knowledge.
          </p>
          
          <p>
            Apart from academics, I have a keen interest in the stock market and enjoy learning about different trading strategies and financial markets. I also like exploring ways to earn through digital platforms and expanding my practical knowledge.
          </p>
            
          <p>
            I consider myself a hardworking, disciplined, and quick learner. I enjoy solving problems, working in teams, and taking on new challenges that help me grow both personally and professionally.
          </p>

          <p>
            My goal is to become a skilled software engineer and contribute to innovative projects while continuously enhancing my knowledge and skills.
          </p>

          <p>
            Thank you.
          </p>
        </div>
      </div>
      <div className="extra">
        <h2>Education</h2>
        <p id="college">
          M S Ramaiah University Of Apllied Sciences - Bengaluru
        </p>
        <p id="course">
          B.Tech in Mathematics and Computing
        </p>
        <p id="duration">
          2024 - 2028
        </p>
      </div>
    </>
  );

}

export default MyInfo