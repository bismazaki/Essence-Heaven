"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaCartArrowDown } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { BsFillHandbagFill } from "react-icons/bs";
import { RiAccountCircleFill } from "react-icons/ri";

const Navbar = () => {
    const [isCartOpen, setCartOpen] = useState(false);

    const toggleCart = () => {
        setCartOpen(!isCartOpen);
    };

    return (
        <>
            <header className="sticky top-0 text-gray-600 body-font shadow-md p-2 relative z-50 bg-white">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    {/* Logo */}
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <Image src="/Emeraldlogo.png" alt="image" width={100} height={100} />
                           <Link href='/' className='ml-4 mt-2 text-4xl font-serif text-customGreen'>Essence Heaven</Link>
                        </div>
                        {/* Cart Icon for Mobile */}
                       <Link href={'/Login'}><RiAccountCircleFill
                            className="md:hidden mx-1 text-gray-900 cursor-pointer"
                            size={40}
                        /></Link> 
                        <FaCartArrowDown
                            onClick={toggleCart}
                            className="md:hidden text-gray-900 cursor-pointer"
                            size={40}
                        />
                    </div>

                    {/* Navigation */}
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="/About" className="mr-5 hover:text-gray-900 text-xl">
                            About Us
                        </Link>
                        <Link href="/Men" className="mr-5 hover:text-gray-900 text-xl">Perfumes For Men</Link>
                        <Link href="/Women" className="mr-5 hover:text-gray-900 text-xl">Perfumes For Women</Link>
                        <Link href="/Contact" className="mr-5 hover:text-gray-900 text-xl">Contact Us</Link>
                    </nav>

                    {/* Cart Icon for Desktop */}
                    <div className="hidden md:flex md:space-x-4 md:ml-auto">
                        <Link href={'/Login'}>
                        <RiAccountCircleFill
                            className="text-gray-900 cursor-pointer"
                            size={40}
                        />
                        </Link>
                        <FaCartArrowDown
                            onClick={toggleCart}
                            className="text-gray-900 cursor-pointer"
                            size={40}
                        />
                    </div>
                </div>

                {/* Cart Sidebar */}
                <div
                    className={`sidecart fixed top-0 right-0 bg-green-200 w-80 h-auto shadow-lg p-10 transform ${isCartOpen ? 'translate-x-0' : 'translate-x-full'
                        } transition-transform duration-300 z-50`}
                >
                    {/* Close Icon */}
                    <IoClose
                        className="text-gray-900 cursor-pointer mb-4"
                        size={40}
                        onClick={toggleCart}
                    />
                    <h2 className="text-center text-3xl font-bold mb-4 font-serif">Your Cart</h2>
                    <ul className="list-decimal pl-5">
                        <li className="mb-2"> Perfume A</li>
                        <li className="mb-2"> Perfume B</li>
                        <li className="mb-2"> Perfume C</li>
                        <li className="mb-2"> Perfume D</li>
                        <li className="mb-2"> Perfume A</li>
                        <li className="mb-2"> Perfume B</li>
                        <li className="mb-2"> Perfume C</li>
                        <li className="mb-2"> Perfume D</li>
                        <li className="mb-2"> Perfume B</li>
                        <li className="mb-2"> Perfume C</li>
                        <li className="mb-2"> Perfume D</li>
                        <li className="mb-2"> Perfume B</li>
                        <li className="mb-2"> Perfume C</li>
                        <li className="mb-2"> Perfume D</li>
                    </ul>
                    <div className="flex items-center space-x-4 mt-4">
                        <button className="bg-green-700 text-white px-4 py-3 rounded flex items-center space-x-2">
                            <BsFillHandbagFill className="text-lg" />
                            <span>Checkout</span>
                        </button>
                        <button className="bg-green-700 text-white px-3 py-2 rounded">
                            Clear Cart
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
