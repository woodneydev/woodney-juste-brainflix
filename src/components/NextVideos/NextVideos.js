const NextVideos = ({filteredVideos, handleNextVideo}) => {
    
    const elements = filteredVideos.map(video => {
        return <div onClick={()=> {handleNextVideo(video)}}>{video.title}</div>
    })
    
    return (
        <>
            {elements}
        </>
    )
}

export default NextVideos;