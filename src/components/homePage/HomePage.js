import React from 'react';
import RooseveltForest from '../../assets/RooseveltForest.jpg';
import '../../App.css'; // Import the App.css file

export const HomePage = () => {
  return (
    <>
      <div className="homeBack">
        <img src={RooseveltForest} alt="Roosevelt Forest" className="backgroundImage" />
      </div>
      <div className='CanAmLabel'>
        <img src=''></img>
      </div>
        <div className="greySquare"></div>
    </>
  );
};

