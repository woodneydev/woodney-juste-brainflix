import "./NextVideos.scss"
import { NavLink } from "react-router-dom";

const NextVideos = ({filteredVideos, handleNextVideo}) => {
    
    const elements = filteredVideos.map(video => {
        return (
                <NavLink to={`/video/${video.id}`} key={video.id} className="next-video">
                    <div></div>
                    <div className="next-video__img">
                        <img className="next-video__img-item" alt={video.title} src={video.image} />
                    </div>
                    <div className="next-video__info">
                        <p className="next-video__info-title">{video.title.length > 40 ? video.title.split(" ").slice(0, 7).join(" ") + "..." : video.title}</p>
                        <p className="next-video__info-channel">{video.channel}</p>
                    </div>
                </NavLink>
        )
    })
    
    return (
        <>
            {elements}
        </>
    )
}

export default NextVideos;