import React from 'react';
import img from "../../assets/about.jpg"
import { Link } from 'react-scroll';
import handleDownload from '../hooks/useDownload';
const About = () => {
    return (
        <div className='my-10 pt-10  container mx-auto'>
            <div className="grid lg:grid-cols-3 gap-10 mx-10 justify-center">
                <div className="col-span-2">
                    <h2 className='text-2xl font-bold text-white mb-2'>About me</h2>
                    <p className='text-lg text-justify'>Hello! I&apos;m Raihan Jami Khan, Proficient in React.js, Next.js, Tailwind CSS, Bootstrap, Redux, Redux Toolkit and TanStack Query with expertise in building responsive and dynamic web applications. Skilled in Node.js, Express.js, and MongoDB, with experience in Mongoose, authentication (Firebase, JWT), API handling (Axios), Stripe payment integration and little knowledge in MySQL with Docker. Strong problem-solving and debugging skills, with a focus on clean, maintainable code. Experienced in Git/GitHub for version control and familiar with design tools like Photoshop and Figma. Bachelor&apos;s degree in CSE from Daffodil International University, Bangladesh.</p>
                    <div className=" flex gap-4 mt-5">
                            <div className="">
                                <a href="#" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-[rgb(0,207,93)]  absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                    <span onClick={handleDownload} className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Get Resume</span>
                                </a>
                            </div>
                            <div className="">
                            <Link to="skill"  smooth={true} spy={true} href="#_" className="px-5 py-2.5 relative rounded group overflow-hidden font-medium border-2  border-[rgb(0,207,93)] text-[rgb(0,207,93)]  inline-block">
                                    <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[rgb(0,207,93)]  group-hover:h-full opacity-90"></span>
                                    <span className="relative group-hover:text-white">My Skills</span>
                                </Link>
                            </div>
                        </div>
                </div>
                <div className="col-span-2 lg:col-span-1">
                    <img className='mx-auto lg:w-3/4' src={img} alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default About;