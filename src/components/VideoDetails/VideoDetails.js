import "./VideoDetails.scss";
import viewsIcon from "../../assets/images/icons/views.svg";
import heartIcon from "../../assets/images/icons/likes.svg";

const VideoDetails = ({title, channel, timestamp, views, likes, description}) => {
    
    return (
        <div className="video__details">
            <h1 className="video__details-title">{title}</h1>
            <div className="video-stats">
                <p className="video-stats__channel">By {channel}</p>
                <div className="video-stats__views">
                    <img className="video-stats__views-img" src={viewsIcon} alt="Eye icon" />
                    <p className="video-stats__views-amount">{views}</p>
                </div>
                <p className="video-stats__time">{timestamp}</p>
                <div className="video-stats__likes">
                    <img className="video-stats__likes-img" src={heartIcon} alt="Heart icon" />
                    <p className="video-stats__likes-amount">{likes}</p>
                </div>
            </div>
            <p className="video__details-description">{description}</p>
        </div>
    )
}

export default VideoDetails;