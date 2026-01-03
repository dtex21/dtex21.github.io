import { NavigateFunction, useNavigate } from "react-router-dom";
import { HomeOutlined, BookOutlined } from "@ant-design/icons";
import { createTooltip, IFunctionalIcon } from "../utils";
import "./navbar.css"
import { LanguageContext, translate } from "../../translation/helper";
import { useContext, useMemo } from "react";

const generateNavbarLinks = (linkNames: IFunctionalIcon[], navigate: NavigateFunction) => {
    return linkNames.map((linkName: IFunctionalIcon) => {
        const linkNameId = linkName.id
        return (
            <li className="functional-icon"
             id={linkNameId} 
             key={linkNameId} 
             onClick={() => navigate('/'.concat(linkNameId))}>
                {createTooltip(linkName)}
            </li>
        )}
    ) 
}

export const Navbar = () => {
    const navigate = useNavigate()
    const context = useContext(LanguageContext)

    const navLinkList: IFunctionalIcon[] = useMemo(() => [
        {id: 'home', title: translate('navbar.home', context.language), content: <HomeOutlined />},
        {id: 'cv', title: translate('navbar.cv', context.language),content: <BookOutlined />}
    ], [context.language])

    return (
        <nav className={"navbar"}>
            <div className="right-outline">
                <ul className="links">
                    {generateNavbarLinks(navLinkList, navigate)}
                </ul>
            </div>
        </nav>
    )
}