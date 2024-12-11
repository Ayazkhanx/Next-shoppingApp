"use client"
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import { CiHeart } from 'react-icons/ci';
import { FiShoppingCart } from 'react-icons/fi';
import { CiUser } from 'react-icons/ci';
import logo from '../public/logo.png'; // assuming logo is in the public directory

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Navbar for larger screens */}
      <div className="navbar-container hidden md:flex justify-between items-center p-6">
        <div className="flex items-center gap-1">
          {/* Logo with controlled height */}
          <img src='logo.png' alt="Exclusive brand logo" className="h-8" />
          <h1 className="text-xl font-semibold">Exclusive</h1>
        </div>

        {/* Navbar links */}
        <ul className="flex space-x-8">
          <li><a href="home.tsx" className="text-lg hover:text-indigo-600">Home</a></li>
          <li><a href="/shop.tsx" className="text-lg hover:text-indigo-600">Shop</a></li>
          <li><a href="/blog.tsx" className="text-lg hover:text-indigo-600">Blog</a></li>
          <li><a href="/contact.tsx" className="text-lg hover:text-indigo-600">Contact</a></li>
        </ul>

        {/* Icons section */}
        <div className="flex gap-4">
          <CiUser className="cursor-pointer text-xl" />
          <FaSearch className="cursor-pointer text-xl" />
          <CiHeart className="cursor-pointer text-xl" />
          <FiShoppingCart className="cursor-pointer text-xl" />
        </div>
      </div>

      {/* Navbar for small screens (Mobile version) */}
      <div className="md:hidden flex justify-between items-center p-6">
        {/* Mobile logo */}
        <div className="flex items-center gap-1">
          <img src='logo.png' alt="Exclusive brand logo" className="h-8" />
          <h1 className="text-xl font-semibold">Exclusive</h1>
        </div>

        {/* Mobile menu toggle button */}
        <button
          className="text-xl cursor-pointer"
          onClick={toggleMobileMenu}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu items */}
      {isMobileMenuOpen && (
        <div className="md:hidden p-4 bg-white shadow-md">
          <ul className="space-y-4">
            <li><Link href={'/home'}>Home</Link></li>
            <li><Link href={'/shop'}>Shop</Link></li>
            <li><Link href={'/contact'}>Contact</Link></li>
            <li><Link href={'/blog'}>Blog</Link></li>
          </ul>
        </div>
      )}

      {/* Icons section for small screens */}
      <div className="md:hidden flex justify-between p-4 bg-white shadow-md">
        <div className="flex gap-4">
          <CiUser className="cursor-pointer text-xl" />
          <FaSearch className="cursor-pointer text-xl" />
          <CiHeart className="cursor-pointer text-xl" />
          <FiShoppingCart className="cursor-pointer text-xl" />
        </div>
      </div>

      <hr />
    </>
  );
}
