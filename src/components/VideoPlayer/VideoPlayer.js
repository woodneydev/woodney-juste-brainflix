import "./VideoPlayer.scss";

const VideoPlayer = ({currentVideo}) => {
    // console.log("video current", currentVideo)
    return (
        <>
            <video className="video__player" src={currentVideo.video} poster={currentVideo.image}>
            </video>
        </>
    )
}

export default VideoPlayer;