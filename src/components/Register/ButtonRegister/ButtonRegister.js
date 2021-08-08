import './ButtonRegister.css';
import { Link } from "react-router-dom";

function ButtonRegister(props) {
  return (
    <div className={props.className}>
        <button className="but__profile" tape="submit" aria-label={props.buttonText}>{props.buttonText}</button>
          <p className="but__register">{props.text}
              <Link to={props.link} className="but__register-auth">{props.buttonLink} </Link>
          </p>
    </div>
  )
}
export default ButtonRegister;