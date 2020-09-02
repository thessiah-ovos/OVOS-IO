import React from 'react';
import SigninScreen from './SigninScreen';


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
        <button>VISIT</button>
        </div>
        </div>
        </div> 


        <div class="services">
        <div class="mix-master"></div>
        <h2 id="mixing-mastering">Mixing & Mastering</h2>
        <div>
        <p id="mix-master-info">Our experienced engineers are here to help you get that desired commercial sound. All we ask for in return is a decently recorded session of your project, we will do the rest! 

          Thessian Sound has made high quality mixing and mastering more affordable and our clients retains total creative control. We offer different packages to fit your intended production budget. Ranging from small projects like a single demo to a full blown 15+ track album.</p>
          
        <button id="visit-services">VISIT</button>

        </div>
        </div> 

        <div class="account-library">
        <div class="account"></div>
        <h2 id="personal-account">Personal Account</h2>
        <div>
        <p id="account-info">We make it really easy for you to interact with our engineers and for you to know the current status of your projects from the moment you submit your songs and give us the go-ahead to start working.

        You will have your personalized account whereby you’ll be able to access all your beats, and upload all your files for mixing and mastering along with production notes if applicable. </p>

        <button id="sign-up" onClick={<SigninScreen/>}>
          SIGN UP</button>

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

            <div class="MixSum">
            <div class="topics">
              <h4>Pristine Mix</h4>
              <p class="summary-desc">Punchy low-end, clean vocals, very well-balanced instrumentation is just one of the many directions where-which we can take your song. </p>
              </div>
              </div>

            <div class="MasterSum">
            <div class="topics">
              <h4>Clean Master</h4>
              <p class="summary-desc">Balanced low-end, mid-range and high-end nicely limited to create a loud enough mix that does not cause ear fatigue but is still highly competitive. </p>
              </div>
              </div>

           <div class="PitchSum">
            <div class="topics">
              <h4>Pitch Correction</h4>
              <p class="summary-desc">Not all vocalists require tuning, but the one’s that do need not worry, we will have you sounding very elegant and in the key of the song. </p>
               </div>
            </div>

            <div class="EditSum">
            <div class="topics">
              <h4>Editing</h4>
              <p class="summary-desc">Editing a song while mixing is a key element to creating interest in the creative process. We will analyze the song and make the necessary edits to spark interest with your listener. </p>
              </div>
            </div>

            <div class="RevisionSum">
            <div class="topics">
              <h4>Revisions</h4>
              <p class="summary-desc">All our clients are entitled to 5 reviews within the first 30 days upon receiving the final mixed and mastered audio file. </p>
              </div>
              </div>

        </section>
        </div>

    )
}

export default AllServices;