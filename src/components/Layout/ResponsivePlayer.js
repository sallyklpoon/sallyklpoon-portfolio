import React from 'react';
import ReactPlayer from 'react-player';

import './styles/responsive-player.css'

const ResponsivePlayer = ( {video_url} ) => {
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url={video_url}
            width='100%'
            height='100%'
            controls={true}
          />
        </div>
      )
    }

export default ResponsivePlayer;