import React from "react";
import { Outlet } from 'react-router-dom';
import { Navbar } from "../navbar/navbar"
import './layout.css'

const Layout = () => {
    return (
        <div className="page">
            <div className="content"><Outlet/></div>
            <Navbar className="navbar"/>
        </div>
    )
}

export default Layout;