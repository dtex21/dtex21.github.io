import { useState } from "react"
import { Logo } from "../logo/logo"
import { Outlet } from 'react-router-dom'
import { Navbar } from "../navbar/navbar"
import './layout.css'
import { DEFAULT_LANGUAGE, LanguageContext } from "../../translation/helper"

const Layout = () => {   
    const [language, setLanguage] = useState<string>(DEFAULT_LANGUAGE)
     
    return (
        <LanguageContext.Provider value={{language, setLanguage}}>
            <div className="page">
                <Logo/>
                <div className="content"><Outlet/></div>
                <Navbar/>
            </div>
        </LanguageContext.Provider>
    )
}

export default Layout;