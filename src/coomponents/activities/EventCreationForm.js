import React, { useState } from "react";

const EventCreationForm = () => {
  // state variale
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    date: "",
    venue: "",
    facilators: "",
    bannerImageUrl: "",
    requirements: "",
  });

  // handling onChange event
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setEventData({ ...eventData, [name]: value });
  };
  return (
    <div>
      <h4 className="form-header">Create / Register An event Here :</h4>
      <div className="container">
        <form>
          <h5> Title:</h5>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={eventData.title}
            placeholder="Enter your First Name here"
            required
          />

          <h5>Description:</h5>
          <input
            type="text"
            name="description"
            onChange={handleChange}
            value={eventData.description}
            placeholder="Enter your Last Name here"
            required
          />
          <h5>Enter Event Date:</h5>
          <input
            type="text"
            name="Date"
            onChange={handleChange}
            value={eventData.Date}
            placeholder="Enter your Email here"
            required
          />
          <h5>Enter event Venue:</h5>
          <input
            type="text"
            name="venue"
            onChange={handleChange}
            value={eventData.venue}
            placeholder="Enter your mobile Number here"
            required
          />

          <h5>Main Speaker / Facilitator:</h5>
          <input
            type="text"
            name="facilators"
            onChange={handleChange}
            value={eventData.facilators}
            placeholder="Enter your Cluster here"
            required
          />
          <h5>Attach Event Banner :</h5>
          <input
            type="text"
            name="bannerImageUrl"
            onChange={handleChange}
            value={eventData.bannerImageUrl}
            placeholder="Enter your password here"
            required
          />
          <h5>Add few Requirements :</h5>
          <input
            type="text"
            name="requirements"
            onChange={handleChange}
            value={eventData.requirements}
            placeholder="Enter your password here"
            required
          />
          <br />

          <button className="submit-button" type="submit">
            Add Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventCreationForm;
