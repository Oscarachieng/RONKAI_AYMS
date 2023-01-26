import React, { useState } from 'react'

const ActivityRegistration = () => {

    // state variable
  const [activityRegistrationData, setActivityRegistrationData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    venue: "",
    activityTitle: "",
  });

   // select activities input options
   const [listOfActivities, setListOfActivities] = useState([]);

  // handling onChange event
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setActivityRegistrationData({ ...activityRegistrationData, [name]: value });
  };

  return (
    <div>
      <h4 className="form-header">Create / Register An event Here :</h4>
      <div className="container">
        <form>
          <h5> Full Name:</h5>
          <input
            type="text"
            name="fullName"
            onChange={handleChange}
            value={activityRegistrationData.fullName}
            placeholder="Enter your First Name here"
            required
          />

          <h5>Email address:</h5>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={activityRegistrationData.email}
            placeholder="Enter your Last Name here"
            required
          />
          <h5>Enter mobile Number:</h5>
          <input
            type="text"
            name="phoneNumber"
            onChange={handleChange}
            value={activityRegistrationData.phoneNumber}
            placeholder="Enter your Email here"
            required
          />
          <h5>Select Activity:</h5>

          < select
            onChange={handleChange}
            name="activityTitle"
            value={activityRegistrationData.activityTitle}
            required
            >
            {
                listOfActivities.map((activity) => <option key={activity.id} value={activity.title}>{activity.title} 
                   </option>)
            }
        </select >
          <h5>Attach Event Banner :</h5>
          <input
            type="text"
            name="bannerImageUrl"
            onChange={handleChange}
            value={activityRegistrationData.bannerImageUrl}
            placeholder="Enter your password here"
            required
          />
          <br />

          <button className="submit-button" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default ActivityRegistration