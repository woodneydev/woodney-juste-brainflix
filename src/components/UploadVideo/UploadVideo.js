import Button from "../Button/Button";
import upload from "../../assets/images/icons/upload.svg";

const UploadVideo = () => { 

    return (
        <div>
            <h1>Upload Video</h1>
            <img />
            <form>
                <label>
                    TITLE YOUR VIDEO
                    <input placeholder="Add a title to your video" />   
                </label>
                
                <label>
                    ADD A VIDEO DESCRIPTION
                    <textarea placeholder="add a description to your video"></textarea>
                </label>
                
                <Button action={upload} src="" />
            </form>
        </div>
    )
}

export default UploadVideo;