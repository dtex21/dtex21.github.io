import { createTooltip, IFunctionalIcon } from "../utils";
import { PhoneOutlined, MailOutlined, GithubOutlined } from "@ant-design/icons";
import './logo.css'
import '../utils.css'
import { Switch } from "antd";
import { useRef, useState } from "react";
//TODO: add language support

const informationIconsArray: IFunctionalIcon[] = [
    {
        title: "Telephone",
        content: <a className="functional-icon" href="tel:+306986710185"><PhoneOutlined /></a>
    }, 
    {
        title: "Mail",
        content: <a className="functional-icon" href="mailto:dtselas@protonmail.com"><MailOutlined/></a>
    },
    {
        title: "Github",
        content: <a className="functional-icon" href="https://github.com/dtex21/" target="_blank" rel="noreferer"><GithubOutlined/></a>
    }
]

const defaultLanguage = 'GR'

export const Logo = () => {
    const language = useRef<string>(defaultLanguage)
    const [languageSwitch, setLanguageSwitch] = useState<boolean>(language.current === defaultLanguage)

    const handleSwitchStyle = () => {
        const switchElement = document.getElementById('languageSwitch')
        switchElement?.setAttribute('style', `background-color: ${languageSwitch ? 'crimson' : 'black'}`)
    }

    const handleLanguageChange = (switchValue: boolean) => {
        debugger
        const activeLanguage = switchValue ? 'GR' : 'EN'
        language.current = activeLanguage
        handleSwitchStyle()
        setLanguageSwitch(language.current === defaultLanguage)
    }

    return (
        <div className="logo">
            <div className="name-div">
                <b>DIMITRIS TSELAS</b>
                <i>Software Engineer</i>
            </div>
            <div className="information">
                {informationIconsArray.map((element) => createTooltip(element, "left"))}
            </div>
            <div className="languages-div">
                <Switch id="languageSwitch"
                    checked={languageSwitch}
                    onChange={(switchValue) => handleLanguageChange(switchValue)}
                    unCheckedChildren="EN"
                    checkedChildren="GR"
                    style={{backgroundColor: "black"}}
                />
            </div>
        </div>
    )
}