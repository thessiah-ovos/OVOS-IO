import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Everything You Need!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='icons-utilities/premium-icon.png'
              text='High quality, professional beats for all contemporary genres.'
              label='Beat Store'
              path='/beatstore'
            />
            <CardItem
              src='icons-utilities/profile-icon-1.png'
              text='You will have your personalized account whereby you’ll be able to access all your beats!'
              label='Personal Account'
              path='/register'
            />
            <CardItem
              src='icons-utilities/Ex-exclusive-pro-unlimited.jpg'
              text='Our licenses provide clearance for film, radio, personal and all other commercial uses.'
              label='Licenses'
              path='/pricing'
            />
             
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;