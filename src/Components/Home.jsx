import React from "react";
import '../CSS/Home.css';
import Social from "./Social";


class Home extends React.Component {
    onButtonClick = () => {
        
    }
    render() {
        return (
            <div id= "home" className="home">
                <main className="containerHome">
                    <div className="containerName">
                            <h1 className="name">
                            Otávio
                            <br/> 
                            Azevedo <span className="dot">.</span>
                            </h1>
                            <p>Full-Stack Developer</p>
                            <div className="dashed"></div>
                            <Social />
                    </div>
                </main>
             </div>
        )
    }
}

export default Home;

