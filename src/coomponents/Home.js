import React from 'react'
import backgroundImage from '../images/aaron-burden-GJZXSzjB_AY-unsplash.jpg'

const Home = () => {
  return (
    <div> <h3>Home Page  Content Goes Here! </h3>
    <div className='home-image' style={{ backgroundImage: `url(${backgroundImage})`}}>

      <div className='intro-message-container'>

        <h4 className='welcome'> </h4>

        <button className='logout'></button>

      </div>

    </div>
    </div>
  )
}

export default Home