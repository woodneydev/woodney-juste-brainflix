import "./NextVideos.scss"

const NextVideos = ({filteredVideos, handleNextVideo}) => {
    
    const elements = filteredVideos.map(video => {
        return (
            <>
            <h2></h2>
            <div className="next-video" onClick={()=> {handleNextVideo(video)}}>
                <div className="next-video__img">
                    <img className="next-video__img-item" src={video.image} />
                </div>
                <div className="next-video__info">
                    <p className="next-video__info-title">{video.title.length > 40 ? video.title.split(" ").slice(0, 7).join(" ") + "..." : video.title}</p>
                    <p className="next-video__info-channel">{video.channel}</p>
                </div>
            </div>
            </>
        )
    })
    
    return (
        <>
            {elements}
        </>
    )
}

export default NextVideos;