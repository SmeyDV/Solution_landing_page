import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">Solution Group is a leading provider of innovative solutions for healthcare system.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm">
              <li className="mb-2"><Link href="/" className="hover:text-gray-400">Home</Link></li>
              <li className="mb-2"><Link href="/services" className="hover:text-gray-400">Services</Link></li>
              <li className="mb-2"><Link href="/about" className="hover:text-gray-400">About</Link></li>
              <li className="mb-2"><Link href="/contact" className="hover:text-gray-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm mb-2">123 Business Street</p>
            <p className="text-sm mb-2">City, State 12345</p>
            <p className="text-sm mb-2">Phone: (123) 456-7890</p>
            <p className="text-sm">Email: info@solutiongroup.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-gray-300"><Facebook size={24} /></Link>
              <Link href="#" className="hover:text-gray-300"><Twitter size={24} /></Link>
              <Link href="#" className="hover:text-gray-300"><Instagram size={24} /></Link>
              <Link href="#" className="hover:text-gray-300"><Linkedin size={24} /></Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {currentYear} Solution Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
