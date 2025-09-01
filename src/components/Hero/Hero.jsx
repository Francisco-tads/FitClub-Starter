import React from "react";
import { useState } from "react";
import Header from "../Header/Header";
import "./Hero.css";
import ContactForm from "../ContactForm/ContactForm";
import hero_image from "../../assets/hero_image1.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import NumberCounter from "number-counter"
import { motion } from "framer-motion";
const Hero = () => {
    const transition = { type: "spring", duration: 3 };
    const mobile = window.innerWidth <= 768 ? true : false;
    const [showContactForm, setShowContactForm] = useState(false);

    const handleEntrarClick = () => {
        setShowContactForm(true);
    };

    return (
        <>
            <div className="hero" id="home">
            <ddiv className="blur hero-blur"></ddiv>
            <div className="left-h">
                <Header />

                {/* The best ad */}
                <div className="the-best-ad">
                    <motion.div
                        initial={{ left: mobile ? "165px" : '238px' }}
                        whileInView={{ left: "8px" }}
                        transition={{ ...transition, type: "tween" }}
                    ></motion.div>
                    <span>O MELHOR CLUBE FITNESS DA CIDADE</span>
                </div>

                {/* Cabeçalho do Herói */}
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>DÊ FORMA </span>
                        <span>AO SEU</span>
                    </div>
                    <div>
                        <span>CORPO IDEAL</span>
                    </div>
                    <div>
                        <span>
                            Aqui, vamos ajudá-lo a moldar e construir seu corpo ideal e viver sua vida ao máximo.
                        </span>
                    </div>
                </div>

                {/* Figuras */}

                <div className="figures">
                    <div>
                        <span>
                         <NumberCounter end={140} start={100} delay='4' preFix="+"/> 
                        </span>
                        <span>TREINADORES ESPECIALIZADOS</span>
                    </div>
                    <div>
                        <span>
                        <NumberCounter end={978} start={800} delay='4' preFix="+"/> 
                        </span>
                        <span>MEMBROS SE JUNTARAM</span>
                    </div>
                    <div>
                        <span>
                        <NumberCounter end={50} start={0} delay='4' preFix="+"/> 
                        </span>
                        <span>MEMBROS SE JUNTARAM</span>
                    </div>
                </div>

                {/*  */}
                <div className="hero-buttons">
                    <buttons className="btn">Iniciar</buttons>
                    <buttons className="btn">Saber mais</buttons>
                </div>
            </div>
            <div className="right-h">
                <button className='btn' onClick={handleEntrarClick}>Entrar</button>

                < motion.div
                    initial={{ right: "-1rem" }}
                    whileInView={{ right: "4rem" }}
                    transition={transition}
                    className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Frequência cardíaca</span>
                    <span>116 bpm</span>
                </motion.div>

                {/* hero image */}
                <img src={hero_image} alt="" className="hero-image" />
                <motion.img
                    initial={{ right: '11rem' }}
                    whileInView={{ right: '20rem' }}
                    transition={transition}
                    src={hero_image_back} alt="" className="hero-image-back" />

                {/* calorias */}
                <motion.div
                    initial={{ right: "37rem" }}
                    whileInView={{ right: "28rem" }}
                    transition={transition}
                    className="calories"
                >
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calorias queimadas</span>
                        <span>220 Kcal</span>
                    </div>
                </motion.div>

            </div>
            </div>
            <ContactForm 
                isOpen={showContactForm} 
                onClose={() => setShowContactForm(false)} 
            />
        </>
    );
};

export default Hero;