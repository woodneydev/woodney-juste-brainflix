import "./HomePage.scss";
import { useState, useEffect } from 'react';
import VideoSection from '../../components/VideoSection/VideoSection';
import apiKey from "../../assets/data/apiKey";
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

    useEffect(() => {
      axios.get(baseUrl + apiKey)
        .then(({data}) => {
          setVideos(data);
        })
        .catch(error => {
          alert("An error occured, please try again later");
        })
    }, [])

    const filteredVideos = videos.filter(video => video.id !== displayVideoId);

  return (
    <>
      <VideoSection filteredVideos={filteredVideos} displayVideoId={displayVideoId} videos={videos} apiKey={apiKey} />
    </>
  );
}

export default HomePage;