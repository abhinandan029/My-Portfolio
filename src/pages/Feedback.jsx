import {useState } from 'react'
import emailjs from '@emailjs/browser'

import '../index.css'

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
    <div >
    
    </div>
  );

}

export default Feedback