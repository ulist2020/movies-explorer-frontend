import './ButtonRegister.css';
import { Link } from "react-router-dom";

function ButtonRegister({className, disabled, buttonText, text, link, buttonLink}) {
  return (
    <div className={className}>
        <button className="but__profile" disabled={disabled} tape="submit" aria-label={buttonText}>{buttonText}</button>
          <p className="but__register">{text}
              <Link to={link} className="but__register-auth">{buttonLink} </Link>
          </p>
    </div>
  )
}
export default ButtonRegister;