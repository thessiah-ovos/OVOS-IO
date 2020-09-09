import React from 'react';
import {Link } from 'react-router-dom';

function AllServices() {
    return (  
      <div className="all-services">  
      <div class="beatStore">
        <div class="beats"></div>
        <h2 id="beat-store">Beat Store</h2>
        <div>
        <p id="beat-info">The OVOS beat store features an array of 
        high quality, professional beats for all contemporary genres. 
        Our licenses provide clearance for film, radio, personal and all other commercial uses.

        Get any of our beats to be used in your musical projects today!</p>
        <div id="go-to-store">
        <Link to="/beatstore">Visit Beatstore</Link>
        <div></div>
        <Link to="/audioplayer">Sample Beats</Link>
        </div>
        </div>
        </div> 
        <br></br>
        

        <div class="account-library">
        <div class="account"></div>
        <h2 id="personal-account">Personal Account</h2>
        <div>
        <p id="account-info">We make it really easy for you to interact with our engineers and for you to know the current status of your projects from the moment you submit your songs and give us the go-ahead to start working.

        You will have your personalized account whereby you’ll be able to access all your beats, and upload all your files for mixing and mastering along with production notes if applicable. </p>

        <Link to="/signin">Sign Up/In</Link>

        </div>
        </div>

        <section class="summary">
          <div class="overview">
            <h2 id="everything-needed">Everything You Need</h2>
            </div>
            <div class="BeatsSum">
            <div class="topics">
              <h4>High Quality Beats</h4>
              <p class="summary-desc">No need to search the vast internet scavenging for the perfect beat. At Thessian Sound you’ll find exactly what you’re looking for. We have beats for every genre, mood and style. </p>
            </div>
            </div>

        </section>
        </div>

    )
}

export default AllServices;