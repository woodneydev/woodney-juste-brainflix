import NextVideos from "../NextVideos/NextVideos";
import VideoDetails from "../VideoDetails/VideoDetails";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const VideoSection = ({currentVideo, filteredVideos, handleNextVideo}) => {

    //{title, channel, timestamp, views, likes, description}
    return (
        <>
            <main className="video">
                <VideoPlayer currentVideo={currentVideo} />
                <VideoDetails title={currentVideo.title} channel={currentVideo.channel} timestamp={currentVideo.timestamp} views={currentVideo.views} likes={currentVideo.likes} description={currentVideo.description} />
                <NextVideos filteredVideos={filteredVideos} handleNextVideo={handleNextVideo} />
            </main>
        </>
    )

}

export default VideoSection;