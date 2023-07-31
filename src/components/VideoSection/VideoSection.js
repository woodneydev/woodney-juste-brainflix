import NextVideos from "../NextVideos/NextVideos";
import VideoDetails from "../VideoDetails/VideoDetails";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import Comments from "../Comments/Comments";

const VideoSection = ({currentVideo, filteredVideos, handleNextVideo}) => {
        return (
        <>
            <main className="video">
                <article>
                    <VideoPlayer currentVideo={currentVideo} />
                    <section>
                        <VideoDetails title={currentVideo.title} channel={currentVideo.channel} timestamp={currentVideo.timestamp} views={currentVideo.views} likes={currentVideo.likes} description={currentVideo.description} />
                    </section>
                    <Comments comments={currentVideo.comments} />
                </article>
                    <section>
                        <NextVideos filteredVideos={filteredVideos} handleNextVideo={handleNextVideo} />
                    </section>
            </main>
        </>
    )

}

export default VideoSection;