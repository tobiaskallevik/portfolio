import React from 'react';
import { ReactTyped } from "react-typed";
import { Player } from '@lottiefiles/react-lottie-player';
import laptop from '../assets/animations/laptop';
import { Row, Col, Divider } from 'antd';
import './home.css';
import LinkGrid from './linkGrid';

export default function Home() {

  return (
    <div className='home'>
    
          <div className='home-content-container'>
            <div className='home-content'>
              <h1>
                <span className='gradient-text'>Tobias</span> Kallevik
              </h1>
              <hr />         
              <p>I am a passionate&nbsp;

                <ReactTyped
                  strings={[
                    "student",
                    "developer",
                    "learner",
                  ]}
                  typeSpeed={60}
                  backSpeed={70}
                  backDelay={2000}
                  showCursor={false}
                  style={{ fontWeight: 'bolder' }}
                  loop
                >
                </ReactTyped>
              </p>
              <LinkGrid />
            </div>
          </div>

          <div className='home-animation'>
            <Player
                src={laptop}
                background="transparent"
                loop
                autoplay
                length={1}
                className='laptop-animation'
              />
          </div>
    

      
    </div>
  ) 
}

