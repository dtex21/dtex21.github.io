import { Tooltip } from "antd";
import { PhoneOutlined, MailOutlined, GithubOutlined } from "@ant-design/icons";
import './logo.css'

export const Logo = () => {
    return (
        <div className="logo">
            <div className="name-div">
                <b>DIMITRIS TSELAS</b>
                <i>Web Developer</i>
            </div>
            <div className="information">
                <Tooltip title="Telephone" placement="left" arrow={false}>
                    <a href="tel:+306986710185">
                        <PhoneOutlined />
                    </a>
                </Tooltip>
                <Tooltip title="E-mail" placement="left" arrow={false}>
                    <a href="mailto:dtselas@protonmail.com">
                        <MailOutlined />
                    </a>
                </Tooltip>
                <Tooltip title="Github" placement="left" arrow={false}>
                    <a href="https://github.com/dtex21/" target="_blank" rel="noreferrer">
                        <GithubOutlined />
                    </a>
                </Tooltip>
            </div>
        </div>
    )
}