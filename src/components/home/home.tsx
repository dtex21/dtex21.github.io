import { useContext } from "react";
import { LanguageContext, translate } from "../../translation/helper";
import "./home.css"

const Home = () => {
    const context = useContext(LanguageContext)
    return (
        <div className="home-div">
            <div className="home-image-container">
                <img src="code_home.png" className="home-image"/>
                <div className="home-image-text-container">
                    <p className="home-image-text">
                        {translate('home.imageDescription', context.language)}
                    </p>
                </div>
            </div>
            <div className="home-text">
                <p className="home-welcome">
                    {translate('home.welcome', context.language)}
                </p>
                <p className="home-description">
                    {translate('home.description', context.language)}
                </p>
                <p className="home-description">
                    {translate('home.forwardToCv', context.language)}
                </p>
            </div>
        </div>
    )
}

export default Home;