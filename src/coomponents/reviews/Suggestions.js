import React, { useState } from 'react'

const Suggestions = () => {

    // state variable to hundle state chnages
  const [suggestionData, setSuggestionData] = useState({
    agendum: "",
    message: "",
  });

  // handling onChange event
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setSuggestionData({ ...suggestionData, [name]: value });
  };

  return (
    <div>
      <h4 className="form-header">Add a Book or an Aritcle :</h4>
      <div className="container">
        <form>
          <h5> Enter The agendum:</h5>

          <input
            type="text"
            name="agendum"
            onChange={handleChange}
            value={suggestionData.agendum}
            placeholder="Enter the Agendum here"
            required
          />

          <h5> Type Your Message:</h5>
          <textarea
            type="text"
            name="message"
            onChange={handleChange}
            value={suggestionData.message}
            placeholder="Type your message here"
            required
          />

         
          <br />

          <button className="submit-button" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Suggestions