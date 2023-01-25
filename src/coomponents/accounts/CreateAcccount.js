import React, { useState } from 'react'

const CreateAcccount = () => {
  // state variable to hold the registration data
  const [registrationData, setRegistrationData] = useState({ firstName: '', lastName: '', email: "", cellPhoneNumber: "", residence: "", cluster: "" })
  
  // handling onChange event 
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setRegistrationData({ ...registrationData, [name]: value });
  }

  return (
    <div> Create Account :
      <form>
        <h5>First Name:</h5>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          value={registrationData.firstName}
          placeholder="Enter your First Name here"
          required
        />

        <h5>Last Name:</h5>
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          value={registrationData.lastName}
          placeholder="Enter your Last Name here"
          required
        />
        <h5>Email:</h5>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={registrationData.email}
          placeholder="Enter your Email here"
          required
        />
        <h5>CellPhone Number:</h5>
        <input
          type="text"
          name="cellPhoneNumber"
          onChange={handleChange}
          value={registrationData.cellPhoneNumber}
          placeholder="Enter your mobile Number here"
          required
        />
        <h5>Area of Residense:</h5>
        <input
          type="text"
          name="residense"
          onChange={handleChange}
          value={registrationData.residence}
          placeholder="Enter your residence here"
          required
        />
        <h5>Cluster:</h5>
        <input
          type="text"
          name="cluster"
          onChange={handleChange}
          value={registrationData.cluster}
          placeholder="Enter your Cluster here"
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default CreateAcccount