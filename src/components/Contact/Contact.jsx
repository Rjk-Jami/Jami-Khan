import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { MdOutlineLocationOn, MdOutlineMailOutline, MdOutlinePhoneAndroid } from "react-icons/md";
const FORM_ENDPOINT = "https://rainhan-jami-khan-server.vercel.app/send-email";
const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const inputs = e.target.elements;
        const data = {};
        console.log(data)
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].name) {
                data[inputs[i].name] = inputs[i].value;
            }
        }

        fetch(FORM_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (response.ok) {
                    e.target.reset();
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Send email Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',

                    })
                }

            })
            .catch((err) => {
                console.error("Error sending email:", err);
                // Handle error or display a message to the user
            });
    };

    return (
            <div id='contact' className='mb-10  container mx-auto'>
        <div className='mx-10'>
            <h2 className='text-2xl font-bold text-white mb-5'>Contact Me</h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 justify-center  gap-10 ">
                <div className="text-white flex flex-col gap-5 ">
                    <div className="flex gap-3 items-center">
                        <MdOutlinePhoneAndroid className='text-4xl text-[rgb(0,207,93)]'></MdOutlinePhoneAndroid><div className="">
                        <p className='text-md' >+880-17860-76080</p>
                        
                        </div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <MdOutlineLocationOn className='text-4xl text-[rgb(0,207,93)]'></MdOutlineLocationOn><p className='text-md'>Sukrabad, Dhaka, Bangladesh</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <MdOutlineMailOutline className='text-4xl text-[rgb(0,207,93)]'></MdOutlineMailOutline><p className='text-md'>raihanjamikhan@gmail.com</p>
                    </div>
                </div>
                <div className=" md:col-span-3  ">
                    <h2 className='text-2xl font-bold text-white mb-5'>How Can I Help You?</h2>
                    <form className='col-span-3'
                        action={FORM_ENDPOINT}
                        onSubmit={handleSubmit}
                        method="POST"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className=" flex flex-col gap-1">
                                <div className="mb-3 pt-0">
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        name="name"
                                        className="px-3 py-3 placeholder-gray-400 text-gray-600 relative  bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                                        required
                                    />
                                </div>
                                <div className="mb-3 pt-0">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        className="px-3 py-3 placeholder-gray-400 text-gray-600 relative  bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                                        required
                                    />
                                </div>
                                <div className=" pb-0">
                                    <input
                                        type="text"
                                        placeholder="Your subject"
                                        name="subject"
                                        className="px-3 py-3 placeholder-gray-400 text-gray-600 relative  bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                                        required
                                    />
                                </div>
                            </div>
                            <div className=" pt-1">
                                <textarea
                                    placeholder="Your message"
                                    name="message"
                                    className="px-3 py-3 h-40 placeholder-gray-400 text-gray-600 relative  bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                                    required
                                />
                            </div>
                        </div>
                        <div className="my-3 pt-2 text-center">
                           
                            <button  type="submit" className="px-24 py-2 relative rounded group overflow-hidden font-medium border-2  border-[rgb(0,207,93)] text-[rgb(0,207,93)]  inline-block">
                                    <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[rgb(0,207,93)]  group-hover:h-full opacity-90"></span>
                                    <span className="relative group-hover:text-white">Send</span>
                                </button>
                                
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Contact;