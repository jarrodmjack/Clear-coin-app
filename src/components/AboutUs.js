import { Link } from "react-router-dom"
import Header from "./Header"
import background from '../images/cryptoimg.jpg'

const AboutUs = () => {
    return (
        <div className="about-body">
            <h1>About</h1>
            <h1>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</h1>

            <Link to='/'>
                <button className="button">Go back to home</button>
                {/* <img className="about-img" src={require('../images/cryptoimg.jpg')} alt='crypto'/> */}
            </Link>
        </div>
    )
}

export default AboutUs