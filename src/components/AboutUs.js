import { Link } from "react-router-dom"
import Header from "./Header"

const AboutUs = () => {
    return (


        <div>
            <h1>About Us</h1>
            <Link to='/'>
                <button className="button">Go back to home</button>
            </Link>
        </div>
    )
}

export default AboutUs