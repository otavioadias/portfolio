import React from "react";
import "../CSS/About.css";
import { motion } from "framer-motion";
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.NEF";
import image4 from "../assets/4.png";
import image5 from "../assets/5.jpg";
import image6 from "../assets/6.jpg";
import image7 from "../assets/7.jpg";
import image9 from "../assets/9.jpg";
import image10 from "../assets/10.jpg";
import { useRef, useState } from "react";
import { useEffect } from "react";

const images = [image1, image2, image3, image4, image5, image6, image7, image9, image10];
function About() {
  const carrossel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)
  }, [])

  return (
    <div id="about" className="mainAbout">
      <div className="containerText">
        <h3>About me</h3>
        <h2>Otávio Azevedo Dias</h2>
        <p>
          Desenvolvedor Full-Stack e Estudante de Desenvolvimento Web Full-Stack
          na Trybe.
        </p>
        <p>Graduado em Engenharia Química - UNILESTE.</p>
        <p>Apaixonado por tecnologia, fotografia e viagens.</p>
      </div>
      <div className="photos">
        <motion.div ref={carrossel} className="carrossel" whileTap={{ cursor: "grabbing" }}>
          <motion.div 
            className="inner" 
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {images.map((image) => (
              <motion.div className="image" key={image}>
                <img src={image} alt="Otávio" width="200" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
