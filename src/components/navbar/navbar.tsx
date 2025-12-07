import { NavigateFunction, useNavigate } from "react-router-dom";
import { HomeOutlined, BookOutlined } from "@ant-design/icons";
import { createTooltip, IFunctionalIcon } from "../utils";
import "./navbar.css"


interface IProps {
    className?: string;
}

const navLinkList: IFunctionalIcon[] = [
    {title: 'Home',content: <HomeOutlined />},
    {title: 'CV',content: <BookOutlined />}
]

const generateNavbarLinks = (linkNames: IFunctionalIcon[], navigate: NavigateFunction) => {
    return linkNames.map((linkName: IFunctionalIcon) => {
        const lowerCaseLinkName = linkName.title.toLowerCase()
        return (
            <li className="functional-icon"
             id={lowerCaseLinkName} 
             key={lowerCaseLinkName} 
             onClick={() => navigate('/'.concat(lowerCaseLinkName))}>
                {createTooltip(linkName)}
            </li>
        )}
    ) 
}

export const Navbar = (props: IProps) => {
    const navigate = useNavigate()
    return (
        <nav className={props.className}>
            <div className="right-outline">
                <ul className="links">
                    {generateNavbarLinks(navLinkList, navigate)}
                </ul>
            </div>
        </nav>
    )
}