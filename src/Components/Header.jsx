import React from "react";
import '../CSS/Header.css';

class Header extends React.Component {
    render() {
        return (
            <header>
                <p><a smooth href="#home">Home</a><div className="dashHeader"></div></p>
                <p><a smooth href="#about">About</a><div className="dashHeader"></div></p>
                <p><a smooth href="#skills">Skills</a><div className="dashHeader"></div></p>
                <p><a smooth href="#projects">Projects</a><div className="dashHeader"></div></p>
            </header>
        )
    }
}

export default Header;
