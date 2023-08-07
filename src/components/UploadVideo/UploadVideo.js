import Button from "../Button/Button";
import publish from "../../assets/images/icons/publish.svg";
import { useNavigate } from "react-router-dom";
import uploadImg from "../../assets/images/Upload-video-preview.jpg"
import "./UploadVideo.scss";

const UploadVideo = () => { 
    const navigate = useNavigate();

    const handleButtonClick = () => {
        alert("Upload Successful")
        navigate("/");
    }

    return (
        <div className="upload">
            <h1 className="upload__title">Upload Video</h1>
            <form className="upload__form">
                <div className="upload__form-img">
                    <img className="upload__form-img-item" src={uploadImg} />

                </div>
                <div className="inputs">
                    <label className="inputs__label">
                        TITLE YOUR VIDEO
                        <input className="inputs__label-input inputs__label-input--title-box" placeholder="Add a title to your video" />   
                    </label>
                    
                    <label className="inputs__label">
                        ADD A VIDEO DESCRIPTION
                        <textarea className="inputs__label-input inputs__label-input--textarea" placeholder="Add a description to your video"></textarea>
                    </label>
                </div>
                <div className="btn-wrapper">
                    <Button action={publish} text={"PUBLISH"} handleButtonClick={handleButtonClick} />
                    <button className="cancel-btn">CANCEL</button>
                </div>
            </form>
        </div>
    )
}

export default UploadVideo;