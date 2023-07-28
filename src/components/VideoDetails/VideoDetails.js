const VideoDetails = ({title, channel, timestamp, views, likes, description}) => {
    
    return (
        <>
            <h1>{title}</h1>
            <p>{channel}</p>
            <p>{timestamp}</p>
            <p>{views}</p>
            <p>{likes}</p>
            <p>{description}</p>
        </>
    )
}

export default VideoDetails;