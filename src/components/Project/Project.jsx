import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import bg1 from "../../assets/tasnia-yms.web.app.png";
import bg2 from "../../assets/go-logo-cc190.web.app_.png";
import bg3 from "../../assets/eats-extra-rjk.web.app_chefs.png";

const Project = () => {
  const [expandedProjects, setExpandedProjects] = useState([]);

  const projects = [
    {
      name: "Nimble Wear(e-commerce)",
      details:
        '"Nimble Wear" is a online store with stylish features. It offers secure payments, personalized accounts, smooth navigation, easy filtering, product comparison, Stripe checkout, order tracking, and a wishlist. Tech stack: Next.js, React.js, Tailwind CSS, Redux Toolkit, Node.js, MongoDB, Stripe, JWT.',
      link: "https://nimble-wear.vercel.app",
      github: "https://github.com/Rjk-Jami/Nimble-Clothing-Next.js",
      image: "https://res.cloudinary.com/dpphpbkkz/image/upload/v1739050865/nimble_wear_qzzztk.png",
      tag: (
        <>
          <p>Next.js</p>
          <p>React.js</p>
          <p>Node.js</p>
        </>
      ),
    },
    {
      name: "Go Lego",
      details:
        'This website name "Go Lego" is a lego set online shop. Users can easily login and create an account. The UI is user-friendly and easy to navigate. Some of the features include: adding toys to the cart, logged-in users can add their own toys to sell with details, and private routes to protect unauthorized access. It also utilizes libraries like React Helmet, React Countdown, and React AOS.',
      link: "https://go-logo-cc190.web.app/",
      github: "https://github.com/Rjk-Jami/go-lego-client",
      image: bg2,
      tag: (
        <>
          <p>React</p>
          <p>React Router</p>
          <p>Express.js</p>
        </>
      ),
    },
    {
      name: "Tasnia TWS",
      details:
        'This website named "Tasnia Yoga and Meditation School (Tasnia TWS)" is dedicated to promoting physical, mental, and spiritual well-being through the practice of yoga and meditation. Students can easily login and create an account. The UI is designed to be user-friendly and intuitive. Logged-in students can be promoted by the admin to become instructors. It also utilizes features like React Router DOM, Tailwind CSS, Daisy UI, React Awesome Carousel, and more.',
      link: "https://tasnia-yms.web.app/",
      github: "https://github.com/Rjk-Jami/tasnia-TWS-client",
      image: bg1,
      tag: (
        <>
          <p>React</p>
          <p>React Router</p>
          <p>Express.js</p>
        </>
      ),
    },
    {
      name: "EatsExtra",
      details:
        'This website named "EatsExtra" provides information about chefs and popular recipes. Users can easily login and create an account. The UI is designed to be user-friendly and intuitive. Logged-in users can add favorite recipes and view recipe details. It also features a private routing system to protect against unauthorized user access. It utilizes libraries like React Router DOM, Tailwind CSS, Daisy UI, and more.',
      link: "https://eats-extra-rjk.web.app",
      github: "https://github.com/Rjk-Jami/eats-extra-client",
      image: bg3,
      tag: (
        <>
          <p>React.js</p>
          <p>Node.js</p>
          <p>Express.js</p>
        </>
      ),
    },
  ];

  const toggleProject = (index) => {
    const expandedIndex = expandedProjects.indexOf(index);
    if (expandedIndex === -1) {
      setExpandedProjects([...expandedProjects, index]);
    } else {
      setExpandedProjects([
        ...expandedProjects.slice(0, expandedIndex),
        ...expandedProjects.slice(expandedIndex + 1),
      ]);
    }
  };

  return (
    <>
      <div className="mb-10  container mx-auto">
        <div className="mx-10">
          <div className="">
            <h2 className="text-2xl font-bold text-white mb-5">My Projects</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
              {projects.map((project, index) => (
                <div key={index} className="flip">
                  <div className="flip-content">
                    <div className="">
                      <div key={index} className="">
                        <div className="rounded-xl overflow-hidden shadow-lg bg-lime-400 bg-opacity-5">
                          <div
                            className="m-6 rounded-xl ease-in h-64 bg-cover bg-top hover:bg-bottom"
                            style={{
                              backgroundImage: `url(${project.image})`,
                              transitionDuration: "5s",
                            }}
                          />
                          <div className="px-6 py-4">
                            <div className="font-bold text-2xl mb-2 text-white">
                              {project.name}
                            </div>
                            <p className="text-slate-200 text-base text-justify">
                              {expandedProjects.includes(index)
                                ? project.details
                                : `${project.details.slice(0, 100)}...`}
                              <span
                                className="text-[rgb(0,207,93)] cursor-pointer"
                                onClick={() => toggleProject(index)}
                              >
                                {expandedProjects.includes(index)
                                  ? "Read less"
                                  : "Read more"}
                              </span>
                            </p>
                          </div>
                          <div className="flex gap-3 px-6 pb-4">
                            <div className="">
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={project.link}
                              >
                                <FaExternalLinkAlt className="text-2xl text-white hover:text-[rgb(0,207,93)]" />
                              </a>
                            </div>
                            <div className="">
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={project.github}
                              >
                                <FaGithub className="text-2xl text-white hover:text-[rgb(0,207,93)]" />
                              </a>
                            </div>
                          </div>
                          <div className="px-6 pb-4 flex gap-3">
                            {project.tag}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
