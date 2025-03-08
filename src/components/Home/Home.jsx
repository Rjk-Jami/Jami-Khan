import React from 'react';
import img from '../../assets/IMG_0653~3.png'
import { Link } from 'react-scroll';
import { FaCodepen, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import handleDownload from '../hooks/useDownload';
const Home = () => {
    return (

        <>
            {/* <div className="pt-16"></div> */}
            <div className=" hero min-h-screen " style={{ backgroundImage: `url(https://res.cloudinary.com/dpphpbkkz/image/upload/v1739048399/IMG_0653_3-min_dojsxy.png)` }}>
                <div className="hero-overlay bg-gray-700  bg-opacity-70"></div>
                <div className="hero-content text-left text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className="mb-1 text-lg text-[rgb(0,207,93)]  font-semibold ">Hello! I am</h1>
                        <h1 className="mb-5 text-3xl md:text-6xl text-white font-bold">Raihan Jami Khan</h1>
                        <p className="mb-0 text-[rgb(0,207,100)] text-xl md:text-2xl font-bold">MERN Stack Developer</p>
                        <div className="flex gap-3">
                        <p className='text-white mt-2 md:mt-0 mb-5 text-sm md:text-lg font-semibold'>Web Developer</p>
                        <p className='text-white mt-2 md:mt-0 mb-5 text-sm md:text-lg font-semibold'>&#x2022; Programmer</p>
                        {/* korte hobe */}
                        <p className='text-white mt-2 md:mt-0 mb-5 text-sm md:text-lg font-semibold'>&#x2022; Software Engineer</p>
                        </div>
                        <div className=" flex gap-4">
                            <div className="">
                                <a href="#" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-[rgb(0,207,93)]  absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                    <span onClick={handleDownload} className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Get Resume</span>
                                </a>
                            </div>
                            <div className="">
                            <Link to="about"  smooth={true} spy={true} href="#_" className="px-5 py-2.5 relative rounded group overflow-hidden font-medium border-2  border-[rgb(0,207,93)] text-[rgb(0,207,93)]  inline-block">
                                    <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[rgb(0,207,93)]  group-hover:h-full opacity-90"></span>
                                    <span className="relative group-hover:text-white">About Me</span>
                                </Link>
                            </div>
                        </div>
                       

                    </div>
                    <div className=" absolute bottom-0 right-0 flex flex-col gap-3 mx-3 my-3 justify-center items-center">
               
                        <p><a target='_blank'
                                rel='noopener noreferrer' href="https://github.com/Rjk-Jami"><FaGithub className='text-xl text-[rgb(0,207,93)] '></FaGithub></a></p>
                        <a target='_blank'
                                rel='noopener noreferrer' href="https://www.linkedin.com/in/raihan-jami-khan-380657188/"><FaLinkedinIn className='text-xl text-[rgb(0,207,93)] '></FaLinkedinIn></a>
                        <a target='_blank'
                                rel='noopener noreferrer' href="https://www.facebook.com/rjk.jami/"><FaFacebookF className='text-xl text-[rgb(0,207,93)] '></FaFacebookF></a>
                        
                        
                        
                    </div>
                </div>
            </div>
        </>

    );
};

export default Home;