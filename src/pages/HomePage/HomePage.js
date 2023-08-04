import Header from '../../components/Header/Header';
import { useState } from 'react';
import videoDetails from "../../assets/data/video-details.json"; 
import videos from "../../assets/data/videos.json"; 
import VideoSection from '../../components/VideoSection/VideoSection';

function HomePage() {
    const [currentVideo, setCurrentVideo] = useState(videoDetails[0]);

    const handleNextVideo = nextVideo => {
      const foundVideo = videoDetails.find(video => nextVideo.id === video.id)
      setCurrentVideo(foundVideo);
    }

    const filteredVideos = videos.filter(video => video.id !== currentVideo.id);

  return (
    <>
      {/* <Header /> */}
      <VideoSection currentVideo={currentVideo} filteredVideos={filteredVideos} handleNextVideo={handleNextVideo} />
    </>
  );
}

export default HomePage;