import "./VideoSection.scss";
import NextVideos from "../NextVideos/NextVideos";
import VideoDetails from "../VideoDetails/VideoDetails";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import Comments from "../Comments/Comments";

const VideoSection = ({currentVideo, filteredVideos, handleNextVideo}) => {
        return (
        <>
            <main className="video">
                    <section className="video__current-playing">
                      <VideoPlayer currentVideo={currentVideo} />  
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
        </>
    )

}

export default VideoSection;