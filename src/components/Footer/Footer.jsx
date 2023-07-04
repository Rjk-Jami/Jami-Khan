import React from 'react';
import { FaCodepen, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-scroll';
import logo from "../../assets/J.png"

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <div className="grid grid-flow-col gap-4 text-white">
                <Link smooth={true} spy={true} className="cursor-pointer    hover:text-[rgb(0,207,93)] " to='home'>Home</Link>
                <Link smooth={true} spy={true} className="cursor-pointer hover:text-[rgb(0,207,93)]" to='about'>About</Link>
                <Link smooth={true} spy={true} className="cursor-pointer hover:text-[rgb(0,207,93)]" to='skill'>Skills</Link>
                <Link smooth={true} spy={true} className="cursor-pointer hover:text-[rgb(0,207,93)]" to='project'>Project</Link>

            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://github.com/Rjk-Jami"><FaGithub className='text-xl text-[rgb(0,207,93)] '></FaGithub></a>
                    <a target='_blank'
                        rel='noopener noreferrer' href="https://www.linkedin.com/in/raihan-jami-khan-380657188/"><FaLinkedinIn className='text-xl text-[rgb(0,207,93)] '></FaLinkedinIn></a>
                    <a target='_blank'
                        rel='noopener noreferrer' href="https://www.facebook.com/rjk.jami/"><FaFacebookF className='text-xl text-[rgb(0,207,93)] '></FaFacebookF></a>
                    <a target='_blank'
                        rel='noopener noreferrer' href="https://codepen.io/rjk_jami"><FaCodepen className='text-xl text-[rgb(0,207,93)] '></FaCodepen></a>

                </div>
            </div>
            <div>
                <img className="cursor-pointer mask mask-hexagon bg-[rgb(0,207,93)] w-12 p-2" src={logo} />
                <p>Copyright © 2023 - All right reserved by Raihan Jami Khan</p>
            </div>
        </footer>
    );
};

export default Footer;