import "./Header.scss";
import logo from "../../assets/images/logo/BrainFlix-logo.svg"
import ProfilePic from "../ProfilePic/ProfilePic";
import profile from "../../assets/images/Mohan-muruge.jpg";
import upload from "../../assets/images/icons/upload.svg"
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

const Header = () => {
    //look into dynamic paths for header

    return (
        <>
            <header className="nav">
                <NavLink to="/"><img className="nav__img" src={logo} alt="logo" /></NavLink>
                <form className="nav__form" >
                    <div className="nav__form-search">
                        <input type="search" className="nav__form-search-box" placeholder="Search" />
                        <ProfilePic />
                        <Button text={"UPLOAD"} action={upload} />
                    </div>
                </form>
            </header>
        </>
    )
}


export default Header;