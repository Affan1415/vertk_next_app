"use client"
import React from 'react';
import { AcmeLogo } from "./Logo";
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="https://flowbite.com/" className="flex items-center">
                            <AcmeLogo />
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Follow us
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://facebook.com/your_facebook_page"
                                        className="hover:underline"
                                    >
                                        <FaFacebook className="w-5 h-5 inline mr-2 text-gray-500 dark:text-gray-400" />
                                        Facebook
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        href="https://linkedin.com/your_linkedin_page"
                                        className="hover:underline"
                                    >
                                        <FaLinkedin className="w-5 h-5 inline mr-2 text-gray-500 dark:text-gray-400" />
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://instagram.com/your_instagram_page"
                                        className="hover:underline"
                                    >
                                        <FaInstagram className="w-5 h-5 inline mr-2 text-gray-500 dark:text-gray-400" />
                                        Instagram
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Contact us
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="mailto:contact@vertk.co"
                                        className="hover:underline"
                                    >
                                        <AiOutlineMail className="w-5 h-5 inline mr-2 text-gray-500 dark:text-gray-400" />
                                        contact@vertk.co
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="tel:+923054662036"
                                        className="hover:underline"
                                    >
                                        <AiOutlinePhone className="w-5 h-5 inline mr-2 text-gray-500 dark:text-gray-400" />
                                        +92 305 4662036
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2024{' '}
                        <a href="https://vertk.co/" className="hover:underline">
                            Vertk™
                        </a>
                        . All Rights Reserved.
                    </span>
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;

