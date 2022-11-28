import React from "react";
import frontend from "../assets/Icons/front/frontend.jsx"
import backend from "../assets/Icons/back/backend.jsx"
import stacks from "../assets/Icons/stacks/stacks.jsx"
import '../CSS/Skills.css';

class Skills extends React.Component {
    render() {
        return (
            <div id="skills" className="containerSkills">
                <h3 className="titleSkill">Skills</h3>
                <section className="skills">
                    <div className="frontend">
                        <h3 className="titleSkill">Frontend</h3>
                        <section className="front">
                            {frontend.map((i) => (
                                <img className="skill" alt="logo" src={i} width="70px"/>
                            ))}
                        </section>
                    </div>
                    <div className="backend">
                        <h3 className="titleSkill">Backend</h3>
                        <section className="back">
                            {backend.map((i) => (
                                <img className="skill" alt="logo" src={i} width="70"/>
                            ))}
                        </section>
                    </div>
                    <div className="stacks">
                        <h3 className="titleSkill">Stacks</h3>
                        <section className="stack">
                            {stacks.map((i) => (
                                <img className="skill" alt="logo" src={i} width="70"/>
                            ))}
                        </section>
                    </div>
                </section>
            </div>
        )
    }
}

export default Skills;