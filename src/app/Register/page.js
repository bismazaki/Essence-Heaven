import React from 'react'
import Link from 'next/link'

const page = () => {
    return (
        <div className="font-[sans-serif] flex flex-col lg:m-32 md:h-auto">
            <div className="flex flex-grow items-center justify-center py-6 px-4">
                <div className="max-w-lg w-full">


                    <div className="p-4 lg:h-[550] lg:w-[600] rounded-s-3xl bg-customGreen shadow">
                        <h2 className="text-white text-center text-4xl font-serif font-bold">Sign Up</h2>
                        <form className="mt-8 space-y-4">
                            <div>
                                <label className="text-white text-md mb-2 block">Name</label>
                                <div className="relative flex items-center">
                                    <input
                                        name="name"
                                        type="text"
                                        required
                                        className="w-full text-lime-800 text-sm border border-lime-300 px-4 py-3 rounded-md outline-lime-600"
                                        placeholder="Enter Your Name"
                                    />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="#bbb"
                                        stroke="#bbb"
                                        className="w-4 h-4 absolute right-4"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                                        <path
                                            d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                                            data-original="#000000"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <label className="text-white text-md mb-2 block">Email</label>
                                <div className="relative flex items-center">
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        className="w-full text-lime-800 text-sm border border-lime-300 px-4 py-3 rounded-md outline-lime-600"
                                        placeholder="Enter Your Email"
                                    />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="#bbb"
                                        stroke="#bbb"
                                        className="w-4 h-4 absolute right-4"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2-8 5-8-5h16zm-8 7L4 8v10h16V8l-8 5z" />
                                    </svg>
                                </div>
                            </div>

                            <div>
                                <label className="text-white text-md mb-2 block">Password</label>
                                <div className="relative flex items-center">
                                    <input
                                        name="password"
                                        type="password"
                                        required
                                        className="w-full text-lime-800 text-sm border border-lime-300 px-4 py-3 rounded-md outline-lime-600"
                                        placeholder="Enter password"
                                    />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="#bbb"
                                        stroke="#bbb"
                                        className="w-4 h-4 absolute right-4 cursor-pointer"
                                        viewBox="0 0 128 128"
                                    >
                                        <path
                                            d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                                            data-original="#000000"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="mt-8">
                                <button
                                    type="button"
                                    className="w-full py-3 px-4 text-2xl font-serif tracking-wide rounded-lg text-white bg-emerald-950 hover:bg-emerald-800 focus:outline-none"
                                >
                                    Sign Up
                                </button>
                            </div>
                            <p className="text-white text-md mt-8 text-center">
                                Have an account?{' '}
                                <Link
                                    href="/Login"
                                    className="text-emerald-700 hover:underline ml-1 whitespace-nowrap font-semibold"
                                >
                                    Login
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page