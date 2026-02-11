import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <footer className="bg-cyan-800 text-white py-6 mt-10">
            <div className="max-w-8xl mx-auto flex flex-col items-center gap-4">
                <nav className="flex gap-6 text-sm">
                    <NavLink to="/" className="hover:text-cyan-200 transition aria-[Current=page]:text-cyan-500 aria-[current=page]:underline">Home</NavLink>
                    <NavLink to="/products" className="hover:text-cyan-200 transition aria-[Current=page]:text-cyan-500 aria-[current=page]:underline">Products</NavLink>
                    <NavLink to="/contact" className="hover:text-cyan-200 transition aria-[Current=page]:text-cyan-500 aria-[current=page]:underline">Contact</NavLink>
                    <NavLink to="/about" className="hover:text-cyan-200 transition aria-[Current=page]:text-cyan-500 aria-[current=page]:underline">About</NavLink>
                </nav>
                <div className="text-xs opacity-80">
                    &copy; {new Date().getFullYear()} My E-commerce Store. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer