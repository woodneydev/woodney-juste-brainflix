import "./VideoSection.scss";
import NextVideos from "../NextVideos/NextVideos";
import VideoDetails from "../VideoDetails/VideoDetails";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import Comments from "../Comments/Comments";
import { useState, useEffect } from "react";
import axios from "axios";

const VideoSection = ({filteredVideos, displayVideoId, handleNextVideo, apiKey, videos}) => {
        const baseUrl = `https://project-2-api.herokuapp.com/videos/${displayVideoId}?api_key=`;

        const [currentVideo, setCurrentVideo] = useState(null);

        useEffect(() => {

            if (displayVideoId === null) return;
            axios.get(baseUrl + apiKey)
                .then(({data}) => {
                    setCurrentVideo(data)
                })
                .catch(error => {
                    alert("An error occured, please try again later");
                })
        }, [displayVideoId])

        if (!currentVideo) {
            return <h1>Loading</h1>
        }

        return (
            <main className="video">
                    <section className="video__current-playing">
                      <VideoPlayer currentVideo={currentVideo} apiKey={apiKey} /> 
                    </section>   

                <article className="video__current">
                    <section className="video__current-details">
                        <VideoDetails title={currentVideo.title} channel={currentVideo.channel} timestamp={currentVideo.timestamp} views={currentVideo.views} likes={currentVideo.likes} description={currentVideo.description} />
                        <Comments comments={currentVideo.comments} />  
                    </section>
                    <section className="video__next-videos">
                        <NextVideos filteredVideos={filteredVideos} handleNextVideo={handleNextVideo} />
                    </section>
                </article>
            </main>
    )

}

export default VideoSection;