import "./NextVideos.scss"

const NextVideos = ({filteredVideos, handleNextVideo}) => {
    
    const elements = filteredVideos.map(video => {

        return (
            <>
            <hr />
            <div className="next-video" onClick={()=> {handleNextVideo(video)}}>
                <div className="next-video__img">
                    <img className="next-video__img-item" src={video.image} />
                </div>
                <div className="next-video__info">
                    {video.title}
                    {video.channel}
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