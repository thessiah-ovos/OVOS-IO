import React from 'react';
import '../App.css';
import Cards from '../components/Cards';
import Footer from '../Footer';
//import Cards from '../Cards';
import HeroSection from './HeroSection';
//import Footer from '../Footer';

function Root() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Root;