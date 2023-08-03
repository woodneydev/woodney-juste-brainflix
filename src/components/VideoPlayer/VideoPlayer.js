import "./VideoPlayer.scss";
import playButton from "../../assets/images/icons/play.svg"

const VideoPlayer = ({currentVideo}) => {
    // console.log("video current", currentVideo)
    return (
        <>
            <video className="video__player" controls src={currentVideo.video} poster={currentVideo.image}>
            </video>
        </>
    )
}

export default VideoPlayer;