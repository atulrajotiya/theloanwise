'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FaBuffer } from 'react-icons/fa6'
import { HiMenu, HiX } from 'react-icons/hi' 

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathName = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="w-full py-6 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h2 className='text-2xl flex justify-center items-center'><FaBuffer className='text-financeGreen'/>&nbsp;<span className='font-semibold text-gray-800'>theloanwise</span><span className='text-financeBlue'>.com</span></h2>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {
            links.map((link,index) => (
              <>
                <li><Link href={link.href} key={index} className={`${pathName === link.href ? "text-financeBlue font-bold underline" : "text-gray-800"} hover:underline ease-in-out duration-150`}>{link.label}</Link></li>
              </>
            ))
          }
         
        </ul>

        {/* Hamburger Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 flex justify-end">
          <button onClick={() => setMenuOpen(false)}>
            <HiX size={24} />
          </button>
        </div>
        <ul className="flex flex-col items-start p-6 space-y-6 text-lg">
          <li><Link href="/" onClick={() => setMenuOpen(false)} className="text-gray-800">Home</Link></li>
          <li><Link href="/about" onClick={() => setMenuOpen(false)} className="text-gray-800">About</Link></li>
          <li><Link href="/services" onClick={() => setMenuOpen(false)} className="text-gray-800">Services</Link></li>
          <li><Link href="/contact-us" onClick={() => setMenuOpen(false)} className="text-gray-800">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  )
}
