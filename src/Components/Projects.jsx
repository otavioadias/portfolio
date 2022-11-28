import React from "react";
import '../CSS/Project.css'

class Projects extends React.Component {
    render() {
        return (
            <main>
                <h3 id="projects">Projects</h3>
                <section>
                    <div className="project">
                        <img src="https://cdn.discordapp.com/attachments/938669134890278937/1046768828060799067/20221128_093354_0000-removebg-preview.png" alt="TrybeTunes" width="250"/>
                        <div className="project-link">
                            <a href="https://github.com/otavioadias/trybetunes" target="_blank" className="btn-repo" rel="noreferrer">Repositório</a>
                            <a href="https://trybetunes-theta.vercel.app/" target="_blank" className="btn-deploy" rel="noreferrer">Deploy</a>
                        </div>
                    </div>
                    <div className="project">
                        <img src="https://media.discordapp.net/attachments/938669134890278937/1046818378033147984/20221128_130155_0000-removebg-preview.png" alt="TrybeWallet" width="250"/>
                        <div className="project-link">
                            <a href="https://github.com/otavioadias/trybewallet" target="_blank" className="btn-repo" rel="noreferrer">Repositório</a>
                            <a href="https://trybewallet-three.vercel.app" target="_blank" className="btn-deploy" rel="noreferrer">Deploy</a>
                        </div>
                    </div>
                    <div className="project">
                        <img src="https://cdn.discordapp.com/attachments/938669134890278937/1046819879715606559/20221128_130649_0000-removebg-preview.png" alt="StarWars Planets" width="250"/>
                        <div className="project-link">
                            <a href="https://github.com/otavioadias/starwars-planets-search" target="_blank" className="btn-repo" rel="noreferrer">Repositório</a>
                            <a href="https://starwars-planets-search-beige.vercel.app/" target="_blank" className="btn-deploy" rel="noreferrer">Deploy</a>
                        </div>
                    </div>
                    <div className="project">
                        <img src="https://cdn.discordapp.com/attachments/938669134890278937/1046822386806296616/20221128_131641_0000-removebg-preview.png" alt="TFC" width="250"/>
                        <div className="project-link">
                            <a href="https://github.com/otavioadias/trybe-futebol-clube" target="_blank" className="btn-repo" rel="noreferrer">Repositório</a>
                        </div>
                    </div>
                    <div className="project">
                        <img src="https://cdn.discordapp.com/attachments/938669134890278937/1046823433905917982/20221128_132133_0000-removebg-preview.png" alt="Blogs API" width="250"/>
                        <div className="project-link">
                            <a href="https://github.com/otavioadias/blogs-api" target="_blank" className="btn-repo" rel="noreferrer">Repositório</a>
                        </div>
                    </div>
                    <div className="project">
                        <img src="https://cdn.discordapp.com/attachments/938669134890278937/1046824590229377194/20221128_132600_0000-removebg-preview.png" alt="TrybeSmith" width="250"/>
                        <div className="project-link">
                            <a href="https://github.com/otavioadias/trybesmith" target="_blank" className="btn-repo" rel="noreferrer">Repositório</a>
                        </div>
                    </div>
                </section>
            </main>
            
        )
    }
}

export default Projects;