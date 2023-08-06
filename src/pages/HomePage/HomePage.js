import "./HomePage.scss";
import Header from '../../components/Header/Header';
import { useState, useEffect } from 'react';
import videoDetails from "../../assets/data/video-details.json"; 
// import videos from "../../assets/data/videos.json"; 
import VideoSection from '../../components/VideoSection/VideoSection';
import apikey from "../../assets/data/apiKey";
import axios from "axios";
import {useParams} from "react-router-dom";

function HomePage() {
    const baseUrl = "https://project-2-api.herokuapp.com/videos?api_key=";

    let { videoId } = useParams();
    const [videos, setVideos] = useState([]);
    const [displayVideoId, setDisplayVideoId] = useState(null);

    useEffect(() => {
      if (videos.length > 0 && videoId) {
        setDisplayVideoId(videoId)
        return
      }

      if (videos.length > 0 && !videoId) {
        setDisplayVideoId(videos[0].id)
        return
      }
    }, [videos, videoId])

    // let displayId = null;

    
    // if(videos.length > 0) {
    //   displayId = videos[0].id;
    // }
    
    // const displayVideoId = videoId !== undefined ? videoId : displayId

    useEffect(() => {
      axios.get(baseUrl + apikey)
        .then(({data}) => {
          setVideos(data);
        })
        .catch(error => {
          console.log(error);
        })
    }, [])

    const filteredVideos = videos.filter(video => video.id !== displayVideoId);

  return (
    <>
      <VideoSection filteredVideos={filteredVideos} displayVideoId={displayVideoId} videos={videos} apikey={apikey} />
    </>
  );
}

export default HomePage;