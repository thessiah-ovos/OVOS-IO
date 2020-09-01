import React from 'react';
import ActionCall from './CallToAction';
import HomeScreen from './Home';
import cir from '../rotator/green-foreground.svg';
import cir2 from '../rotator/blue-background.svg';
import cir3 from '../rotator/red-foreground.svg';
import cir4 from '../rotator/red-background.svg';
import cir5 from '../rotator/yellow-foreground.svg';
import cir6 from '../rotator/yellow-background.svg';
import cir7 from '../rotator/green-background.svg';
import cir8 from '../rotator/white-foreground.svg';
import cir9 from '../rotator/white-background.svg';
import SecCir from '../rotator/blue-foreground.svg';
import AllServices from './AllServices';
import Download from './Download';

function Welcome(){
    return (
        <div className="welcome">
      <ActionCall />
      <div id="desc">
        The best in online Audio Production
      </div> 
      <HomeScreen />
      <AllServices /> 
      <Download />       

  </div>
    )
}

export default Welcome;