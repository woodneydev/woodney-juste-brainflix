import "./Button.scss";

const Button = ({text, action, handleClick}) => {

    if (handleClick) {
        return (
            <button className="btn" onClick={handleClick} type="submit" ><img className="btn__img" src={action} alt="Action Icon" />{text}</button>
        )
    }

    return (
        <button className="btn" type="submit" ><img className="btn__img" src={action} alt="Action Icon" />{text}</button>
    )
}

export default Button;