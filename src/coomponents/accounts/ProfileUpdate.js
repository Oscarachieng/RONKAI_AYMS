import React, { useState } from 'react'

const ProfileUpdate = () => {
  const [profileData, setProfileData] = useState({
    profilePhoto: "",
    introduction: "",
    countryOfOrigin: "",
    gender: "",
    address: "",
  });

  // handling onChange event
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setProfileData({ ...profileData, [name]: value });
  };
  return (
    <div>
      <h4 className="form-header">Update Your Profile :</h4>
      <div className="container">
        <form>
          <h5> Attach An Photo:</h5>
          
          <input
            type="file"
            name="profilePhoto"
            onChange={handleChange}
            value={profileData.profilePhoto}
            placeholder="Enter your First Name here"
            required
          />

          <h5>Short Introduction:</h5>
          <textarea
            type="text"
            name="introduction"
            onChange={handleChange}
            value={profileData.introduction}
            placeholder="Enter your Last Name here"
            required
          />
          
          <h5>Enter event Venue:</h5>
          <input
            type="text"
            name="gender"
            onChange={handleChange}
            value={profileData.gender}
            placeholder="Enter your mobile Number here"
            required
          />

          <h5>Home Address:</h5>
          <input
            type="text"
            name="address"
            onChange={handleChange}
            value={profileData.address}
            placeholder="Enter your adddress here"
            required
          />
        
          <h5>Country Of Origin :</h5>
          <input
            type="text"
            name="countryOfOrigin"
            onChange={handleChange}
            value={profileData.countryOfOrigin}
            placeholder="Enter your country here"
            required
          />
          <br />

          <button className="submit-button" type="submit">
            Add Event
          </button>
        </form>
      </div>
    </div>
  )
}

export default ProfileUpdate