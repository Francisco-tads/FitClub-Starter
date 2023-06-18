import React, { useRef } from "react";
import "./Join.css";
import emailjs from '@emailjs/browser'
const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pdhzjww', 'template_l51x1rq', form.current,
         '3B9LAeoM7OMY3b5FG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="Join" id="join-us">
            <div className="left-j">
                <hr />
                <div>
                    <span className="stroke-text">PRONTO PARA</span>
                    <span>SUBIR DE NÍVEL</span>
                </div>
                <div>
                    <span>SEU CORPO</span>
                    <span className="stroke-text"> CONOSCO?</span>
                </div>
            </div>
            <div className="right-j">

                <form ref={form} className="email-container" onSubmit={sendEmail}>
                    <input type="email" name="user_email"
                        placeholder="Insira o seu endereço
                         de e-mail aqui..." />
                    <button className="btn btn-j">Entrar</button>
                </form>
            </div>
        </div>
    );
};

export default Join;