import React from 'react';
import RooseveltForest from '../../assets/RooseveltForest.jpg';
import CanAmMissingLogo from '../../assets/CanAmMissingLogo.png';
import Img411 from '../../assets/Img411.jpg' ;
import '../../App.css'; // Import the App.css file

export const HomePage = () => {
  return (
    <>
      <div className="homeBack">
        <img src={RooseveltForest} alt="Roosevelt Forest" className="backgroundImage" />
      </div>
      <div className='PeopleHeader'>
        <img src={Img411} alt="BrownHeader" className="BrnHeader"></img>
      </div>
      {/* TI think i need to edit this image in photoshop, blur edges export as png */}
      <div className='CanAmLabel'>
        <img src={CanAmMissingLogo} alt="CanAmLogo" className="bckrndLogo"></img>
      </div>
        <div className="greySquare"></div>
        <div className="whiteSquare"></div>
        <div className='MainTextContainer'>
          <p>
          The first website dedicated to understanding the complexity and issues of searching, rescuing, and investigating people missing in the wilds throughout the world.
          </p>
        </div>
    </>
  );
};

