import React from 'react';
import {FiThumbsUp} from "react-icons/fi";
import {FiThumbsDown} from "react-icons/fi";
import {BsReply} from "react-icons/bs";
import {GrSave} from "react-icons/gr";
import {FiMoreHorizontal} from "react-icons/fi";
import Downrow from './Downrow';
import './VideoInfo.css';
import Avatar from 'react-avatar';

function VideoInfo({ title, description, publishedDate, channelTitle, channelImage, viewCount, likeCount, dislikeCount, subs }) {
    return (
        <div className='videoinfo'>
            <div className='videoinfo__headline'>
                <h1>{title}</h1>
            </div>
            <div className='videoinfo__stats'>
                <p>{viewCount} views • {publishedDate}</p>
                <div className="videoinfo__likes">
                    <Downrow Icon={FiThumbsUp} title={likeCount} />
                    <Downrow Icon={FiThumbsDown} title={dislikeCount} />
                    <Downrow Icon={BsReply} title='SHARE' />
                    <Downrow Icon={GrSave} title='SAVE' />
                    <Downrow Icon={FiMoreHorizontal} title='' />
                </div>
            </div>
            <hr />
            <div className="videoinfo__channel">
                <div>
                    <Avatar
                        className='videoinfo__avatar'
                        alt={channelTitle}
                        src={channelImage}
                    />
                    <div className='videoinfo__channelinfo'>
                        <h3 className='videoinfo__channeltitle'>{channelTitle}</h3>
                        <p className='videoinfo__channelsubs'>{subs} subscribers</p>
                    </div>

                </div>
                <div className='videoinfo__subscribe'>
                    <button color='secondary' >SUBSCRIBE</button>
                </div>
            </div>
            <div className='videoinfo__channeldesc'>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default VideoInfo;