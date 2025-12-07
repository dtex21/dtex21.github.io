import { ReactElement } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { HomeOutlined, BookOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import "./navbar.css"

interface IProps {
    className?: string;
}

interface INavLink {
    title: string;
    icon: ReactElement;
}

const navLinkList: INavLink[] = [{title: 'Home',icon: <HomeOutlined />}, {title: 'CV',icon: <BookOutlined />}]

const generateNavbarLinks = (linkNames: INavLink[], navigate: NavigateFunction) => {
    return linkNames.map((linkName: INavLink) => {
        const lowerCaseLinkName = linkName.title.toLowerCase()
        return (
            <li className="link"
             id={lowerCaseLinkName} 
             key={lowerCaseLinkName} 
             onClick={() => navigate('/'.concat(lowerCaseLinkName))}>
                <Tooltip title={linkName.title} placement="right" arrow={false}>
                    {linkName.icon}
                </Tooltip>
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