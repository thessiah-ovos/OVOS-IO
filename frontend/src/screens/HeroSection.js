import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h3 className='branding'>THESSIAN SOUND</h3>
      <div className='hero-btns'>
          <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          CREATE ACCOUNT
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;