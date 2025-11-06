import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">About</h3>
          <p className="text-sm leading-6">
            We provide trusted financial solutions including loans, credit
            cards, and more to help you achieve your goals.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:text-white">Home</Link></li>
            <li><Link href="#" className="hover:text-white">About Us</Link></li>
            <li><Link href="#" className="hover:text-white">Contact</Link></li>
            <li><Link href="#" className="hover:text-white">Support</Link></li>
          </ul>
        </div>

        {/* Loan Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Loan Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:text-white">Credit Card</Link></li>
            <li><Link href="#" className="hover:text-white">Personal Loan</Link></li>
            <li><Link href="#" className="hover:text-white">Home Loan</Link></li>
            <li><Link href="#" className="hover:text-white">Car Loan</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="border-t border-gray-700 py-4">
        <p className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} All Rights Reserved. loanvit
        </p>
      </div>
    </footer>
  )
}

export default Footer