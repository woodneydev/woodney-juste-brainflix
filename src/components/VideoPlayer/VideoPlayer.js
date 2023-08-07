import "./VideoPlayer.scss";

const VideoPlayer = ({currentVideo, apiKey}) => {
    const url = "?api_key="
    return (
        <div className="current-video">
            <video className="current-video__player" controls src={currentVideo.video + url + apiKey} poster={currentVideo.image}>
            </video>
        </div>
    )
}

export default VideoPlayer;