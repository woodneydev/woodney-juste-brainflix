import "./Button.scss";

const Button = ({text, action, handleButtonClick}) => {

    if (handleButtonClick) {
        return (
            <button className="btn" onClick={handleButtonClick} type="submit" ><img className="btn__img" src={action} alt="Action Icon" />{text}</button>
        )
    }

    return (
        <button className="btn" type="submit" ><img className="btn__img" src={action} alt="Action Icon" />{text}</button>
    )
}

export default Button;