import "./Header.scss";
import logo from "../../assets/images/logo/BrainFlix-logo.svg"
import profile from "../../assets/images/Mohan-muruge.jpg"

const Header = () => {
    return (
        <>
            <header className="nav">
                <img className="nav__img" src={logo} alt="logo" />
                <form className="nav__form" >
                    <div className="nav__form-search">
                        <input type="search" className="nav__form-search-box" placeholder="Search" />
                        <div className="nav__form-search-profile"></div>
                        <button className="nav__form-button btn" type="submit" >UPLOAD</button>
                    </div>
                    
                </form>
            </header>
        </>
    )
}


export default Header;