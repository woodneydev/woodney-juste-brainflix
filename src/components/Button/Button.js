import "./Button.scss";

const Button = ({text, action}) => {

    return (
        <button className="btn" type="submit" ><img className="btn__img" src={action} alt="Action Icon" />{text}</button>
    )
}

export default Button;