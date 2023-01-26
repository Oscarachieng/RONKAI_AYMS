import React, { useState } from "react";

const CreateAcccount = () => {
  // state variable to hold the registration data
  const [registrationData, setRegistrationData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cellPhoneNumber: "",
    
    cluster: "",
    password: "",
    confrimPassword: ""
  });

  // handling onChange event
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setRegistrationData({ ...registrationData, [name]: value });
  };

  return (
    <div>
      <h4 className="form-header">Create Account :</h4>
      <div className="container">
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
          
          <h5>Cluster:</h5>
          <input
            type="text"
            name="cluster"
            onChange={handleChange}
            value={registrationData.cluster}
            placeholder="Enter your Cluster here"
            required
          />
          <h5>Enter Password:</h5>
          <input
            type="text"
            name="password"
            onChange={handleChange}
            value={registrationData.password}
            placeholder="Enter your password here"
            required
          />
          <h5>Confirm Password:</h5>
          <input
            type="text"
            name="confirmPassword"
            onChange={handleChange}
            value={registrationData.confrimPassword}
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
  );
};

export default CreateAcccount;
