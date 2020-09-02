import React from 'react';
import ActionCall from './CallToAction';
import HomeScreen from './Home';

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