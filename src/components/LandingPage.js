import { Button } from "./Button"
import { Link } from "react-router-dom"
import '../LandingPage.css'


const LandingPage = () => {
    return (
        <div className="landing-body">
            <div className="landing-header-container">
                <h1 className="landing-page-heading">Clearcoin Is Where The People Manage Their Crypto</h1>
                <p className="landing-page-paragraph">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercit</p>
                <Link to='/home'>
                    <Button btnText='Start Browsing' />
                </Link>
            </div>
            <div className="landing-chart-container">
                <div className="landing-chart-pair">
                    <h2>Browse Popular Cryptocurrencies</h2>
                    <p>We track thousands of cryptocurrencies and provide real-time pricing</p>
                </div>
                <img className="landing-page-chart" src={require('../images/landingpagechart.png')} alt='landing page image 1' />
            </div>
        </div>
    )
}

export default LandingPage