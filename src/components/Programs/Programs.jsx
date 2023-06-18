import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from '../../assets/rightArrow.png'
const Programs = () => {
    return (
        <div className="Programs" id="programs">
            {/* Header */}
            <div className="programs-header">
                <span className="stroke-text">EXPLORE NOSSO</span>
                <span>PROGRAMAS</span>
                <span className="stroke-text">PARA MOLDAR VOCÊ</span>
            </div>

            <div className="program-categories">
                {programsData.map((program) => (
                    <div className="category">
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className="join-now"><span>Entrar</span><img src={RightArrow} alt="" /></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Programs;