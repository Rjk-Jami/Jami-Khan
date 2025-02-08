import React from 'react';
import { FaFigma, FaNodeJs, FaReact, FaStripe } from 'react-icons/fa';
import { SiBootstrap, SiCss3, SiFirebase, SiJavascript, SiMongodb, SiMongoose, SiMui, SiMysql, SiNextdotjs, SiPython, SiRedux, SiTailwindcss, SiVercel } from "react-icons/si";
import { BsFillExplicitFill } from "react-icons/bs";
import { BiLogoGit, BiLogoHtml5, BiLogoNetlify } from "react-icons/bi";
import { TbBrandVscode } from "react-icons/tb";
const Skill = () => {
    return (
        <div className='mt-10 container mx-auto'>
            <div className="lg:me-10 flex lg:flex-row flex-col lg:items-center">
                <h2 className='text-2xl text-center font-bold text-white  lf:transform lg:-rotate-90 my-12 lg:my-0'>My Skills</h2>
                
                <div className=" grow grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 gap-4">
                    <div className="flex flex-col items-center hover:text-[rgb(0,207,93)]">
                        <FaReact className='text-3xl'></FaReact>
                        <p className='text-lg'>React</p>
                    </div>
                    <div className="flex flex-col items-center hover:text-[rgb(0,207,93)]">
                        <SiNextdotjs className='text-3xl'></SiNextdotjs>
                        <p className='text-lg'>Next.Js</p>
                    </div>
                    <div className="flex flex-col items-center hover:text-[rgb(0,207,93)]">
                        <FaNodeJs className='text-3xl'></FaNodeJs>
                        <p className='text-lg'>Node.Js</p>
                    </div>
                    <div className="flex flex-col items-center hover:text-[rgb(0,207,93)]">
                        <BsFillExplicitFill className='text-3xl'></BsFillExplicitFill>
                        <p className='text-lg'>Express.Js</p>
                    </div>
                    <div className="flex flex-col items-center hover:text-[rgb(0,207,93)]">
                        <SiRedux  className='text-3xl'></SiRedux >
                        <p className='text-lg'>Redux</p>
                    </div>
                    <div className="flex flex-col items-center hover:text-[rgb(0,207,93)]">
                        <SiMongodb className='text-3xl'></SiMongodb>
                        <p className='text-lg'>MongoDB</p>
                    </div>
                    <div className="flex flex-col items-center hover:text-[rgb(0,207,93)]">
                        <SiMongoose  className='text-3xl'></SiMongoose >
                        <p className='text-lg'>Mongoose</p>
                    </div>
                    <div className="flex flex-col items-center hover:text-[rgb(0,207,93)]">
                        <SiMysql  className='text-3xl'></SiMysql >
                        <p className='text-lg'>Mysql</p>
                    </div>
                    <div className="flex flex-col items-center hover:text-[rgb(0,207,93)]">
                        <SiFirebase className='text-3xl'></SiFirebase>
                        <p className='text-lg'>Firebase</p>
                    </div>
                    <div className="flex flex-col items-center hover:text-[rgb(0,207,93)]">
                        <FaStripe  className='text-3xl'></FaStripe >
                        <p className='text-lg'>Stripe</p>
                    </div>
                    <div className="flex flex-col items-center hover:text-[rgb(0,207,93)]">
                        <SiJavascript className='text-3xl'></SiJavascript>
                        <p className='text-lg'>JavaScript</p>
                    </div>
                    <div className="flex flex-col items-center hover:text-[rgb(0,207,93)]">
                        <SiPython className='text-3xl'></SiPython>
                        <p className='text-lg'>Python</p>
                    </div>
                    <div className="flex flex-col items-center hover:text-[rgb(0,207,93)]">
                        <BiLogoGit className='text-3xl'></BiLogoGit>
                        <p className='text-lg'>Git</p>
                    </div>
                    <div className="flex flex-col items-center hover:text-[rgb(0,207,93)]">
                        <SiVercel className='text-3xl'></SiVercel>
                        <p className='text-lg'>Vercel</p>
                    </div>
                    <div className="flex flex-col items-center hover:text-[rgb(0,207,93)]">
                        <BiLogoNetlify className='text-3xl'></BiLogoNetlify>
                        <p className='text-lg'>Netlify</p>
                    </div>
                    <div className="flex flex-col items-center hover:text-[rgb(0,207,93)]">
                        <BiLogoHtml5 className='text-3xl'></BiLogoHtml5>
                        <p className='text-lg'>HTML 5</p>
                    </div>
                    <div className="flex flex-col items-center hover:text-[rgb(0,207,93)]">
                        <SiCss3 className='text-3xl'></SiCss3>
                        <p className='text-lg'>CSS 3</p>
                    </div>
                    <div className="flex flex-col items-center hover:text-[rgb(0,207,93)]">
                        <SiBootstrap className='text-3xl'></SiBootstrap>
                        <p className='text-lg'>Bootstrap</p>
                    </div>
                    <div className="flex flex-col items-center hover:text-[rgb(0,207,93)]">
                        <SiTailwindcss className='text-3xl'></SiTailwindcss>
                        <p className='text-lg'>Tailwind</p>
                    </div>
                    <div className="flex flex-col items-center hover:text-[rgb(0,207,93)]">
                        <SiMui className='text-3xl'></SiMui>
                        <p className='text-lg'>Material UI</p>
                    </div>
                    
                    <div className="flex flex-col items-center hover:text-[rgb(0,207,93)]">
                        <TbBrandVscode className='text-3xl'></TbBrandVscode>
                        <p className='text-lg'>Vs Code</p>
                    </div>
                    <div className="flex flex-col items-center hover:text-[rgb(0,207,93)]">
                        <FaFigma className='text-3xl'></FaFigma>
                        <p className='text-lg'>Figma</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Skill;