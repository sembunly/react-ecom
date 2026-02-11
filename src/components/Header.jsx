import { useState } from "react";
import React from 'react'
import { NavLink } from "react-router-dom";
function Header() {
  const [isActiveNavbar, setIsActiveNavbar] = useState(false);

  return (
    <>
      <header className="flex bg-cyan-800 justify-between items-center px-4 lg:px-40">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsActiveNavbar(true)}
            className="inline-block lg:hidden text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M2 3.75A.75.75 0 0 1 2.75 3h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75Zm0 4.167a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 4.166a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 4.167a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <h1 className="text-3xl font-jetbrains text-white font-bold"><NavLink to="/">Seven-8</NavLink></h1>
        </div>

        <ul className="hidden lg:flex items-center gap-4 font-jetbrains text-white">
          <li><NavLink to="/" className="hover:text-cyan-500 aria-[Current=page]:text-cyan-500 aria-[current=page]:underline">Home</NavLink></li>
          <li><NavLink to="/products" className="hover:text-cyan-500 aria-[Current=page]:text-cyan-500 aria-[current=page]:underline">Products</NavLink></li>
          <li><NavLink to="/contact" className="hover:text-cyan-500 aria-[Current=page]:text-cyan-500 aria-[current=page]:underline">Contact</NavLink></li>
          <li><NavLink to="/about" className="hover:text-cyan-500 aria-[Current=page]:text-cyan-500 aria-[current=page]:underline">About</NavLink></li>
        </ul>

        <div className="flex items-center gap-4 text-white">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 hover:text-cyan-500">
              <path d="m9.653 16.915-.005-.003-.019-.01a20.759 20.759 0 0 1-1.162-.682 22.045 22.045 0 0 1-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 0 1 8-2.828A4.5 4.5 0 0 1 18 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 0 1-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 0 1-.69.001l-.002-.001Z" />
            </svg>
          </button>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 hover:text-cyan-500">
              <path fillRule="evenodd" d="M6 5v1H4.667a1.75 1.75 0 0 0-1.743 1.598l-.826 9.5A1.75 1.75 0 0 0 3.84 19H16.16a1.75 1.75 0 0 0 1.743-1.902l-.826-9.5A1.75 1.75 0 0 0 15.333 6H14V5a4 4 0 0 0-8 0Zm4-2.5A2.5 2.5 0 0 0 7.5 5v1h5V5A2.5 2.5 0 0 0 10 2.5ZM7.5 10a2.5 2.5 0 0 0 5 0V8.75a.75.75 0 0 1 1.5 0V10a4 4 0 0 1-8 0V8.75a.75.75 0 0 1 1.5 0V10Z" clipRule="evenodd" />
            </svg>
          </button>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 hover:text-cyan-500">
              <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-5.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 12a5.99 5.99 0 0 0-4.793 2.39A6.483 6.483 0 0 0 10 16.5a6.483 6.483 0 0 0 4.793-2.11A5.99 5.99 0 0 0 10 12Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </header>

      <header className={`${isActiveNavbar ? "left-0" : "-left-full"} fixed top-0 z-999 w-65 bg-black text-white min-h-screen p-4 pt-8 lg:hidden transition-all ease-in-out duration-300`}>
        <div className="flex justify-end">
          <button
            onClick={() => setIsActiveNavbar(false)}
            className="w-10 h-10 border border-amber-50 p-2 rounded-full hover:bg-cyan-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
              <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
            </svg>

          </button>
        </div>

        <div className="flex flex-col mt-8 font-jetbrains">
          <a href="/" className="block mb-2 p-3 rounded-lg transition-all hover:bg-gray-800 hover:text-cyan-500">Home</a>
          <a href="/products" className="block mb-2 p-3 rounded-lg transition-all hover:bg-gray-800 hover:text-cyan-500">Products</a>
          <a href="/contact" className="block mb-2 p-3 rounded-lg transition-all hover:bg-gray-800 hover:text-cyan-500">Contact</a>
          <a href="/about" className="block mb-2 p-3 rounded-lg transition-all hover:bg-gray-800 hover:text-cyan-500">About</a>
        </div>
      </header>
    </>
  );
}

export default Header;
