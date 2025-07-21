import React from 'react';
import { FaGithub, FaLinkedinIn, FaCodepen, FaInstagram, FaFileDownload } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="header">
            <div className="intro">
                <h2>
                    <p>HEY, I’M</p>
                    <span>KSHANTU SYON</span>
                </h2>
                <p>I’m a front-end web developer</p>
            </div>

            <div className="social">
                <span>
                    <a href="https://github.com/syon001" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                </span>
                <span>
                    <a href="https://www.linkedin.com/in/kshantu-syon-528a79184/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn />
                    </a>
                </span>
                <span>
                    <a href="https://codepen.io/your-work" target="_blank" rel="noopener noreferrer">
                        <FaCodepen />
                    </a>
                </span>
                <span>
                    <a href="https://www.instagram.com/syonkshantu/?hl=en" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </span>
                <a href="/Syon_Resume.pdf" className="resume" download="Syon_Resume.pdf">
                    <FaFileDownload />
                    Resume
                </a>
            </div>
        </header>
    );
};

export default Header;