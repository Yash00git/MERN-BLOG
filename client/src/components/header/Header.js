import React from 'react'
import "./header.css"

function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Blog</span>
                <span className="headerTitleLg">Express</span>

                <img className="headerImage" src="https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Mountain-Landscape-Simple-Nature-Background-Image.jpg" alt=""/>
            </div>
        </div>
    )
}

export default Header
