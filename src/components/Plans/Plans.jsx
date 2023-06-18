import React from "react";
import { plansData } from './../../data/plansData';
import whiteTick from '../../assets/whiteTick.png'
import "./Plans.css";
const Plans = () => {
    return (
        <div className="plans-container">
             <div className="blur plans-blur-1"></div>
             <div className="blur plans-blur-2"></div>
            <div className="programs-header" style={{ gap: '2rem' }}>
                <span className="stroke-text">PRONTO PARA COMEÇAR</span>
                <span>SUA JORNADA</span>
                <span className="stroke-text">AGORA CONOSCO</span>
            </div>

            {/* cartão de planos */}
            <div className="plans">
                {plansData.map((plan, i) => (
                    <div className="plan" key={1}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>

                        <div className="features">
                            {plan.features.map((feature, i) => (
                                <div className="feature">
                                    <img src={whiteTick} alt="" />
                                    <span key={1}>{feature}</span>
                                </div>
                            ))}
                        </div>

                       <div>
                        <span>Veja mais vantagens -></span>
                        </div>
                        <button className="btn">Entrar</button> 
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Plans;