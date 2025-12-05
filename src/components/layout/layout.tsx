import React from "react";
import { Logo } from "../logo/logo"
import { Outlet } from 'react-router-dom';
import { Navbar } from "../navbar/navbar"
import './layout.css'

const Layout = () => {
    return (
        <div className="page">
            <Logo/>
            <div className="content"><Outlet/></div>
            <Navbar className="navbar"/>
        </div>
    )
}

export default Layout;