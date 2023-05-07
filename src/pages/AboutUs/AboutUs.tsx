import './AboutUs.scss';
import { NavBar } from '../../components/layout/navigation/NavBar/NavBar';
import React from 'react';

export const AboutUs = () => {
  return (
    <div className="">
      <NavBar></NavBar>
      <div className="about-us__container">
        <div className="about-us__col">
          <div className="space"></div>
        </div>
        <div className="about-us__col">
          <h1>About as</h1>
          <p> The page about us. </p>
        </div>
      </div>
    </div>
  );
};
