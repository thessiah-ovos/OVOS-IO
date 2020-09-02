import React from 'react';
import Header from './components/graphicsdir/Header'
import Graphics from './components/graphicsdir/Graphics'
import Playlist from './components/playlistdir/Playlist'
import Actions from './components/playlistdir/Actions'
import Controls from './components/Controls'

import PlayerState from './contexts/PlayerState'


import './main.css'
import './input.css'

function AudioPlayer() {

  return (
    <PlayerState>
      <div className="mains">
        <div className="top">
          <div className="left">
            <Header />
            <Graphics />
          </div>
          <div className="right">
            <Actions />
            <Playlist />
          </div>
        </div>
        <Controls />
      </div>
    </PlayerState>
  );
}

export default AudioPlayer;