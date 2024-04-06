import React from 'react'
import Avatar from 'react-avatar';
import  './ChannelRow.css'

function ChannelRow({ image, channel, subs, noOfVideos, description }) {
  return (
    <div className='channelrow'>
    <Avatar 
    className='channelrow__logo' 
    alt={channel} 
    src={image} />
    <div className='channelrow__text'>
        <h4>{channel}</h4>
        <p>{subs} subscribers &bull; {noOfVideos} videos</p>
        <p>{description}</p>
    </div>
    </div>
  )
}

export default ChannelRow