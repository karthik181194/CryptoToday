import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    // grab everything we need

    // add our event listener for the click
    // document.querySelector(".mobile-menu-button").addEventListener("click", () => {
    //     document.querySelector(".sidebar").classList.toggle("-translate-x-full");
    // });

    return (
        <div className="nav-container flex">
            <div class="relative min-h-screen md:flex">

                <div class="bg-gray-800 text-gray-100 flex justify-between md:hidden">
                <Link to='/'>
                    <div class="block p-4 text-white font-bold">Crypto Today</div>
</Link>
                    <button class="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                <div class="sidebar bg-gray-800 text-gray-50 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
                <Link to='/'>
                    <div class="text-white flex items-center space-x-2 px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span class="text-2xl font-extrabold">Crypto Today</span>
                    </div>
</Link>

                    <nav>
                        <Link to='/'>
                            <div class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
                                Home
                            </div>
                        </Link>
                        <Link to='/cryptocurrencies'>
                        <div class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
                            Crypto Currencies
                        </div>
                        </Link>
                        <Link to='/exchanges'>
                        <div class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
                            Exchanges
                        </div>
                        </Link>
                        <Link to='/news'>
                        <div class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
                            News
                        </div>
                        </Link>
                    </nav>
                </div>



            </div>
        </div>
    );

}
export default Navbar;