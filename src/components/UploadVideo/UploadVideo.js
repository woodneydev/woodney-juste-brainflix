import Button from "../Button/Button";
import publish from "../../assets/images/icons/publish.svg";
import { useNavigate } from "react-router-dom";
import uploadImg from "../../assets/images/Upload-video-preview.jpg"
import { useState } from "react";
import "./UploadVideo.scss";
import axios from "axios";

const UploadVideo = () => { 

    const initialFormState = {
        title: "",
        description: ""
    }

    const [formData, setFormData] = useState({...initialFormState})

    const handleFormChange = event => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const navigate = useNavigate();

    const handleFormSubmit = (event) => {
        event.preventDefault()
        const {title} = formData
        const {description} = formData

        const image = "http://localhost:8080/0.jpg"
        const postObj = {data: {title, description, image}}

        axios.post("http://localhost:8080/videos", postObj)
        .then(response => {
            alert("Upload was a success");
            navigate("/");
        })
        .catch(error => {
            alert('There was an error, please try again later')
        })
    }

    return (
        <> 
            <hr className="seperate" />
            <main className="upload">
               
                <h1 className="upload__title">Upload Video</h1>
                <form onSubmit={handleFormSubmit} className="upload__form">
                    <div className="upload__form-img">
                        <p className="upload__form-img-description">VIDEO THUMBNAIL</p>
                        <img className="upload__form-img-item" alt="Bike ride through town" src={uploadImg} />

                    </div>
                    <div className="inputs">
                        <label className="inputs__label">
                            TITLE YOUR VIDEO
                            <input onChange={handleFormChange} value={formData.title} name="title" className="inputs__label-input inputs__label-input--title-box" placeholder="Add a title to your video" />   
                        </label>
                        
                        <label className="inputs__label">
                            ADD A VIDEO DESCRIPTION
                            <textarea onChange={handleFormChange} value={formData.description} name="description" className="inputs__label-input inputs__label-input--textarea" placeholder="Add a description to your video"></textarea>
                        </label>
                    </div>
                    <div className="btn-wrapper">
                        <Button action={publish} text={"PUBLISH"} />
                        <button className="cancel-btn">CANCEL</button>
                    </div>
                </form>
            </main>
        </>
    )
}

export default UploadVideo;