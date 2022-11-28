import React from "react";
import '../CSS/Social.css';

class Social extends React.Component {
    render() {
        return (
            <>
                <div className="social">
                    <p><a className="media" href="https://github.com/otavioadias" target="_blank" rel="noreferrer">GitHub</a><div className="dashHeader"></div></p>
                    |
                    <p><a className="media" href="https://www.linkedin.com/in/otavioazevedo/" target="_blank" rel="noreferrer">LinkedIn</a><div className="dashHeader"></div></p>
                    |
                    <p><a className="media" href="https://www.instagram.com/owltavio/" target="_blank" rel="noreferrer">Instagram</a><div className="dashHeader"></div></p>
                </div>
                <a className="cv_download" href="https://drive.google.com/file/d/1kXGXnv-LlhuO8aZkAe7jW8otggQvcv-1/view?usp=share_link" target="_blank" rel="noreferrer">Download CV</a>
            </>
        )
    }
}

export default Social;