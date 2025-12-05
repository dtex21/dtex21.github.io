import { NavigateFunction, useNavigate } from "react-router-dom";
import "./navbar.css"

interface IProps {
    className?: string;
}

const linkNameList: string[] = ['Home', 'CV', 'Projects']

const generateNavbarLinks = (linkNames: string[], navigate: NavigateFunction) => {
    return linkNames.map((linkName: string) => {
        const lowerCaseLinkName = linkName.toLowerCase()
        return (
            <li className="link"
             id={lowerCaseLinkName} 
             key={lowerCaseLinkName} 
             onClick={() => navigate('/'.concat(lowerCaseLinkName))}>
                {linkName}
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
                    {generateNavbarLinks(linkNameList, navigate)}
                </ul>
            </div>
        </nav>
    )
}