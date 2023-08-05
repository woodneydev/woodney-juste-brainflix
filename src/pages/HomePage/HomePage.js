import "./HomePage.scss";
import Header from '../../components/Header/Header';
import { useState, useEffect } from 'react';
import videoDetails from "../../assets/data/video-details.json"; 
import videos from "../../assets/data/videos.json"; 
import VideoSection from '../../components/VideoSection/VideoSection';
import apikey from "../../assets/data/apiKey";
import axios from "axios";
import {useParams} from "react-router-dom";

function HomePage() {
    const baseUrl = "https://project-2-api.herokuapp.com/videos?api_key=";

    let { videoId } = useParams();
    const [currentVideo, setCurrentVideo] = useState(videoDetails[0]);
    
    if (!videoId) {
      videoId = "test"
    } 

    useEffect(() => {
      axios.get(baseUrl + apikey)
    }, [])

    const handleNextVideo = nextVideo => {
      const foundVideo = videoDetails.find(video => nextVideo.id === video.id)
      setCurrentVideo(foundVideo);
    }

    const filteredVideos = videos.filter(video => video.id !== currentVideo.id);

  return (
    <>
      <VideoSection currentVideo={currentVideo} filteredVideos={filteredVideos} handleNextVideo={handleNextVideo} />
    </>
  );
}

export default HomePage;