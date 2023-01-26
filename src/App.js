//import logo from './logo.svg';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import './index.css';
import NavBar from './coomponents/navbar/NavBar';
import Home from './coomponents/Home';
import AboutUs from './coomponents/aboutus/AboutUs';
import ActivitiesList from './coomponents/activities/ActivitiesList';
import CreateAccount from './coomponents/accounts/CreateAcccount';
import Leadership from './coomponents/aboutus/Leadership'
import AdminDasboard from './coomponents/admin/AdminDasboard';
import SignIn from './coomponents/accounts/SignIn';
import Members from './coomponents/aboutus/Members';
import StudyMaterials from './coomponents/study-materials/StudyMaterials';
import Reviews from './coomponents/reviews/Reviews';
import EventCreationForm from './coomponents/activities/EventCreationForm';

function App() {
  return (
    <div className='app'>
      <NavBar/>
      
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/about-us' element={<AboutUs/>} />
         <Route path='/activities' element={<ActivitiesList/>} />
         <Route path='/materials' element={<StudyMaterials/>} />
         <Route path='/reviews' element={<Reviews/>} />
         <Route path='/admin' element={<AdminDasboard/>} />
         <Route path='/sign-in' element={<SignIn/>} />
         <Route path='/createaccount' element={<CreateAccount/>} />
         <Route path='/members' element={<Members/>} />
         <Route path='/leadership' element={<Leadership/>} />  
         <Route path='/event-creation' element={<EventCreationForm/>} /> 
      </Routes>
    </div>
  );
}

export default App;
