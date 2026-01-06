import { NavLink } from "react-router-dom";
import { HomeOutlined, BookOutlined } from "@ant-design/icons";
import { createTooltip, IFunctionalIcon } from "../utils";
import "./navbar.css"
import { LanguageContext, translate } from "../../translation/helper";
import { useContext, useMemo } from "react";

const generateNavbarLinks = (linkNames: IFunctionalIcon[]) => {
    return linkNames.map((linkName: IFunctionalIcon) => {
        const linkNameId = linkName.id
        return (
            <NavLink to={`/${linkNameId === 'home' ? '' : linkNameId}`} 
                key={linkNameId}
                className={({isActive}) => isActive ? "active-functional-icon" : "functional-icon"}
                style={{marginBottom: '3vh'}}>
                    {createTooltip(linkName)}
            </NavLink>
        )}
    ) 
}

export const Navbar = () => {
    const language = useContext(LanguageContext).language

    const navLinkList: IFunctionalIcon[] = useMemo(() => [
        {id: 'home', title: translate('navbar.home', language), content: <HomeOutlined />},
        {id: 'cv', title: translate('navbar.cv', language),content: <BookOutlined />}
    ], [language])

    return (
        <nav className={"navbar"}>
            <div className="right-outline">
                <div className="links">
                    {generateNavbarLinks(navLinkList)}
                </div>
            </div>
        </nav>
    )
}