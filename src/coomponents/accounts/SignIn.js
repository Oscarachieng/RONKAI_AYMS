import React, { useState } from "react";

const SignIn = () => {
  // State variable
  const [userDate, setUserData] = useState({ email: "", password: "" });

  // handling onChange event
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserData({ ...userDate, [name]: value });
  };

  return (
    <div>
      <h4 className="form-header">Login Here.</h4>
      <div className="container">
        <form>
          <h5>Email:</h5>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={userDate.email}
            placeholder="Enter your Email here"
            required
          />
          <h5>password:</h5>
          <input
            type="text"
            name="cellPhoneNumber"
            onChange={handleChange}
            value={userDate.password}
            placeholder="Enter your mobile Number here"
            required
          />
          <br />

          <button className="submit-button" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
