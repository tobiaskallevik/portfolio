import React from 'react';
import "./about.css";
import { Player } from '@lottiefiles/react-lottie-player';
import personCoding from '../assets/animations/personCoding1';

export default function About() {
  return (
    <div className="about">
     <div className="about-container">
      <div className="about-animation">
        <Player
          src={personCoding}
          background="transparent"
          speed={0.75}
          autoplay
          loop
          className='person-coding'
        />
      </div>
      <div className="about-content">
        <h1><span className='gradient-text'>About</span> Me</h1>
        <hr /> 
        <p>
          My name is Tobias Kallevik. I am a Computer Science student based in Trondheim, Norway. I have been interested in technology from a young age. This was the reason I wanted to become a computer engineer. Through my studies at UiA and NTNU and my work experience at Utel and Norkart, I have gained experience with object-oriented programming, database technologies, machine learning and AI, cloud technologies, web development, algorithms and data structures, data communication technologies, version control systems, and processes like Agile and Waterfall.
        </p>
      </div>
     </div>
    </div>
  );
}