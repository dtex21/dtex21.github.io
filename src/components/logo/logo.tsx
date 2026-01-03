import { createTooltip, IFunctionalIcon } from "../utils";
import { PhoneOutlined, MailOutlined, GithubOutlined } from "@ant-design/icons";
import './logo.css'
import '../utils.css'
import { Switch } from "antd";
import { useContext, useMemo } from "react";
import { LanguageContext, translate } from "../../translation/helper";

export const Logo = () => {
    const context = useContext(LanguageContext)
    const languageSwitch = context.language === 'gr'

    const informationIconsArray: IFunctionalIcon[] = useMemo(() => [
        {
            id: "telephone",
            title: translate('logo.telephone', context.language),
            content: <a className="functional-icon" href="tel:+306986710185"><PhoneOutlined /></a>
        }, 
        {
            id: "mail",
            title: translate('logo.mail', context.language),
            content: <a className="functional-icon" href="mailto:dtselas@protonmail.com"><MailOutlined/></a>
        },
        {
            id: "github",
            title: translate('logo.github', context.language),
            content: <a className="functional-icon" href="https://github.com/dtex21/" target="_blank" rel="noreferrer"><GithubOutlined/></a>
        }
    ], [context.language])

    const handleSwitchStyle = () => {
        const switchElement = document.getElementById('languageSwitch')
        switchElement?.setAttribute('style', `background-color: ${languageSwitch ? 'crimson' : 'black'}`)
    }

    const handleLanguageChange = (switchValue: boolean) => {
        const activeLanguage = switchValue ? 'gr' : 'en'
        handleSwitchStyle()
        context.setLanguage(activeLanguage)
    }

    return (
        <div className="logo">
            <div className="name-div">
                <b>{translate('logo.name', context.language)}</b>
                <i>{translate('logo.jobTitle', context.language)}</i>
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