import "./Header.scss";
import logo from "../../assets/images/logo/BrainFlix-logo.svg"
import ProfilePic from "../ProfilePic/ProfilePic";
import upload from "../../assets/images/icons/upload.svg"
import Button from "../Button/Button";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/upload")
    }

    return (
        <>
            <header className="nav">
                <NavLink className="nav__img" to="/"><img className="nav__img-item" src={logo} alt="website logo" /></NavLink>
                <form className="nav__form" >
                    <div className="nav__form-search">
                        <input type="search" className="nav__form-search-box" placeholder="Search" />
                        <ProfilePic />
                        <Button handleButtonClick={handleButtonClick} text={"UPLOAD"} action={upload} />
                    </div>
                </form>
            </header>
        </>
    )
}


export default Header;