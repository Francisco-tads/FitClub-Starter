import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkdIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";
const Footer = () => {
    return (
        <div className="Footer-container">
            <hr />
            <div className="footer">
                <div className="social-links">
                    <a href="https://github.com/Francisco-tads" target="_blank" rel="noopener noreferrer">
                        <img src={Github} alt="GitHub" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={Instagram} alt="Instagram" />
                    </a>
                    <a href="https://www.linkedin.com/in/francisco-vieiratads/" target="_blank" rel="noopener noreferrer">
                        <img src={LinkdIn} alt="LinkedIn" />
                    </a>
                    <a href="https://wa.me/5511991298839" target="_blank" rel="noopener noreferrer">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 0C7.164 0 0 7.164 0 16C0 18.996 0.852 21.78 2.34 24.114L0 32L8.124 29.736C10.356 31.044 13.044 31.8 16 31.8C24.836 31.8 32 24.636 32 15.8C32 7.164 24.836 0 16 0ZM25.308 22.596C24.924 23.628 23.364 24.444 22.308 24.66C21.54 24.804 20.556 24.912 16.788 23.004C12.084 20.676 9.204 15.444 8.988 15.156C8.772 14.868 7.2 12.708 7.2 10.476C7.2 8.244 8.364 7.164 8.82 6.708C9.204 6.324 9.732 6.18 10.236 6.18C10.38 6.18 10.512 6.18 10.632 6.192C11.088 6.204 11.316 6.228 11.604 6.9C11.988 7.788 12.924 10.02 13.032 10.236C13.14 10.452 13.248 10.74 13.068 11.028C12.888 11.316 12.78 11.46 12.564 11.712C12.348 11.964 12.12 12.252 11.928 12.468C11.712 12.708 11.484 12.972 11.736 13.404C11.988 13.836 12.912 15.348 14.268 16.56C16.02 18.156 17.448 18.684 17.952 18.9C18.384 19.08 18.708 19.044 18.96 18.756C19.212 18.468 20.124 17.424 20.412 16.992C20.7 16.56 20.988 16.632 21.384 16.812C21.78 16.992 24.012 18.084 24.444 18.3C24.876 18.516 25.164 18.624 25.272 18.804C25.38 18.984 25.38 19.656 25.308 22.596Z" fill="white"/>
                        </svg>
                    </a>
                </div>
                <div className="logo-f">
                    <img src={Logo} alt="" />
                </div>
            </div>

            <div className="blur blur-f-1"></div>
            <div className="blur blur-f-2"></div>
        </div>
    );
};

export default Footer;