import '../styles/Feedback.css'

function Feedback(){

  return(
    <div className="form" id="Feedback">
      <h2>Feedback Form</h2>
      <label for="name">Enter your name</label>
      <input id="name" placeholder="Enter your name"></input>
      <label for="suggestion">Suggestion</label>
      <textarea id="suggestion" placeholder="Provide your suggestion" rows="5" cols="40"></textarea>
      <div id="rating">

      </div>
      <button>Submit</button>
    </div>
  );

}

export default Feedback