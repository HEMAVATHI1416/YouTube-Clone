import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { DateTime } from 'luxon';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FiAlertCircle } from "react-icons/fi";
import './RecommendedVideos.css';
import HomeVideoCard from './HomeVideoCard';

function RecommendedVideos() {
    const [videoCards, setVideoCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const cachedData = localStorage.getItem('cachedVideoData');
        if (cachedData) {
            setVideoCards(JSON.parse(cachedData));
            setIsLoading(false);
        } else {
            axios
                .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=12&regionCode=IN&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
                .then(response => {
                    console.log(response.data.items);
                    createVideoCards(response.data.items);
                    localStorage.setItem('cachedVideoData', JSON.stringify(response.data.items));
                })
                .catch(error => {
                    console.log(error);
                    setIsError(true);
                });
        }
    }, []);

    async function createVideoCards(videoItems) {
        let newVideoCards = [];
        for (const video of videoItems) {
            const videoId = video.id;
            const snippet = video.snippet;
            const channelId = snippet.channelId;
            const response = await axios
                .get(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
            const channelImage = response.data.items[0].snippet.thumbnails.medium.url;

            const title = snippet.title;
            const image = snippet.thumbnails.medium.url;
            const views = video.statistics.viewCount;
            const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
            const channel = snippet.channelTitle;

            newVideoCards.push({
                videoId,
                image,
                title,
                channel,
                views,
                timestamp,
                channelImage
            });
        };
        setVideoCards(newVideoCards);
        setIsLoading(false);
    }

    if (isError) {
        return <FiAlertCircle className='loading'>No Results found!</FiAlertCircle>;
    }
    return (
        <div className='recommendedvideos'>
            {isLoading ? <AiOutlineLoading3Quarters className='loading' color='secondary' /> : null}
            <div className="recommendedvideos__videos">
                {
                    videoCards.map(item => (
                        <Link key={item.videoId} to={`/video/${item.videoId}`}>
                                <HomeVideoCard key={item.videoId}
                                    title={item.title}
                                    image={item.image}
                                    views={item.views}
                                    timestamp={item.timestamp}
                                    channel={item.channel}
                                    channelImage={item.channelImage}
                                />
                            </Link>
                    ))
                }
            </div>
        </div>
    );
}

export default RecommendedVideos;
