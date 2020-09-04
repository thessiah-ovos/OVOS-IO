import React from 'react';
import ActionCall from './CallToAction';
import HomeScreen from './Home';

import AllServices from './AllServices';
import Download from './Download';

function Welcome(){
    return (
        <div className="welcome">
      <div id="desc">
      THESSIAN SOUND LLC | OVOS 
      <br></br>
      <br></br>
      <br></br>
      <div id="minidesc">
      The best in online Audio Production </div>
      </div> 
      <section className="allservices">
      <AllServices /> </section>
    </div>
    )
}

export default Welcome;