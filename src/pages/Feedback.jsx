import {useState } from 'react'
import emailjs from '@emailjs/browser'

import '../styles/Feedback.css'

function Feedback(){

  const [email,  setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  function sendEmail(e){
    e.preventDefault();
    if(email === "" || name === ""){
      setStatus("data not found");
    }
    else{
      setStatus("sending");

      emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name : name,
          email : email,
          message : message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      ).then(
        () => {
          setStatus("success");
          setEmail("");
          setName("");
          setMessage("");
        } 
      ).catch(
        (error) => {
          console.error(error);
          setStatus("error");
        }
      );
    }
    
  }

  

  return(
    <div id="Feedback">
      <div className="form">
        <h2>Feedback Form</h2>

        <label htmlFor="name" >Enter your name</label>
        <input id="name" placeholder="Enter your name" required  value={name} onChange ={(e) => setName(e.target.value)}/>

        <label htmlFor="email" >Enter your email address</label>
        <input id="email" placeholder="Enter your email address" required  value={email} onChange ={(e) => setEmail(e.target.value)}/>

        <label htmlFor="suggestion">Suggestion</label>
        <textarea id="suggestion" placeholder="Provide your suggestion" rows="5" cols="40"  value={message} onChange ={(e) => setMessage(e.target.value)}></textarea>


        <button onClick={sendEmail}>{status === "sending" ? "Sending..." : "Send"}</button>

        {status === "success" && <p>Message Sent!</p>}
        {status === "error" && <p>Something went Wrong!!</p>}
        {status === "data not found" && <p>Please Enter the Details</p>}

      </div>
    </div>
  );

}

export default Feedback