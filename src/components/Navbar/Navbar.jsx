import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./navbar.css";
import { Link } from 'react-scroll';
import logo from "../../assets/J.png"
import handleDownload from '../hooks/useDownload';
AOS.init();

const Navbar = () => {
    const [active, setActive] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const homeSection = document.getElementById("home");
            const blogSection = document.getElementById("blog");
            const contactSection = document.getElementById("contact");

            const currentPosition = window.pageYOffset;

            if (
                currentPosition >= homeSection.offsetTop &&
                currentPosition < blogSection.offsetTop
            ) {
                setActive("home");
            } else if (
                currentPosition >= blogSection.offsetTop &&
                currentPosition < contactSection.offsetTop
            ) {
                setActive("blog");
            } else if (currentPosition >= contactSection.offsetTop) {
                setActive("contact");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navClass = "nav-link cursor-pointer text-xl  text-white font-thin"

    const nav = (
        <>
            {/* <div> */}
            <Link to="about" className={`${navClass}  `} smooth={true} spy={true}
                activeClass='active' >About</Link>
            <Link to="skill" className={`${navClass}`} smooth={true} spy={true}
                activeClass='active' >Skill</Link>
            <Link to="project" className={`${navClass}`} smooth={true} spy={true}
                activeClass='active' >Project</Link>
            <Link to="contact" className={`${navClass}`} smooth={true} spy={true}
                activeClass='active' >Contact</Link>

        </>
    );
    

    return (
        <div className="navbar  bg-gray-700  bg-opacity-20 z-20  fixed">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">{nav}</ul>
                </div>
                <Link to='home' smooth={true} spy={true} ><img className="cursor-pointer mask mask-hexagon bg-[rgb(0,207,93)] w-12 p-2" src={logo} /></Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5">{nav}</ul>
            </div>
            <div className="navbar-end">
                <a href="#_" className="rounded-md px-3.5 py-1 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[rgb(0,207,93)] text-[rgb(0,207,93)] ">
                    <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[rgb(0,207,93)] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <span onClick={handleDownload} className="relative text-[rgb(0,207,93)] transition duration-300 group-hover:text-white ease">Resume</span>
                </a>

            </div>
        </div>
    );
};

export default Navbar;
