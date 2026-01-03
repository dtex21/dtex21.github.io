import { useContext } from "react";
import { LanguageContext, translate } from "../../translation/helper";

const Home = () => {
    const context = useContext(LanguageContext)
    return (
        <p>{translate('home.description', context.language)}</p>
    )
}

export default Home;