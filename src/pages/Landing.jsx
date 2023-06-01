import React from 'react';
import video from '../assets/cinematic.mp4';
import Logo from '../assets/logoWithoutBorder.png';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="absolute inset-0 ">
      <video className="w-full h-full object-cover brightness-25" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 xl:w-7/12 ">
        <Link to="/HomePage">
          <img src={Logo} alt="LogoLanding" className='transition duration-300 ease-in-out hover:scale-110 cursor-pointer' />
        </Link>
      </div>
    </div>
  );
};

export default Landing;
