import "./VideoPlayer.scss";

const VideoPlayer = ({currentVideo, apiKey}) => {
    const url = "?api_key="
    return (
        <>
            <video className="video__player" controls src={currentVideo.video + url + apiKey} poster={currentVideo.image}>
            </video>
        </>
    )
}

export default VideoPlayer;