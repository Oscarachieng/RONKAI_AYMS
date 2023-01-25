import React from 'react';
import { NavLink, Link } from 'react-router-dom';

// condtitionally style the active Link
const isActiveLink = ({ isActive }) => {
  return {
    fontWeight: isActive ? "bold" : "normal",
    color: isActive ? "Skyblue" : "orangered",
  }
}

function NavBar() {
  return (
    <div className='nav-wrapper'>
      <div className='nav-upper'>
        <div className='logo'><h3>Ronkai Central  AYS Portal, You are welcomed, feel at home</h3></div>
        <div className='login'><a className='nav-sign-in'><NavLink >sign in</NavLink></a> <button className='logout'> Create Account</button></div>
      </div>
      {/* <div className='nav-middle'>Middle Section</div> */}
      <div className='lower-section'>
        <NavLink exact to="/" style={isActiveLink}>
          Home
        </NavLink>
        <NavLink exact to='/about-us' style={isActiveLink}>About-Us</NavLink>
        <NavLink exact to='/activities' style={isActiveLink}>Activities</NavLink>
        <NavLink exact to='/materials' style={isActiveLink}>Study Material</NavLink>
        <NavLink exact to='/reviews' style={isActiveLink}>Reviews</NavLink>
        <NavLink exact to='/admin' style={isActiveLink}>Admin</NavLink>
      </div>
    </div>
  )
}

export default NavBar