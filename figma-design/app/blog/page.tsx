import React from 'react';
import Image from 'next/image'; // Next.js Image component
import { IoIosArrowForward } from "react-icons/io";
import { FaUser, FaTag, FaTrophy, FaShippingFast } from "react-icons/fa";
import { BsFillCake2Fill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { LuBadgeCheck } from "react-icons/lu";
import { RiCustomerService2Fill } from "react-icons/ri";


import logo from '../../public/logo.png';
import pic1 from '../../public/blog 1.jpg';
import pic2 from '../../public/blog 2.jpg';
import pic3 from '../../public/blog 3.jpg';
import pic4 from '../../public/blog 4.jpg';
import pic5 from '../../public/blog 5.jpg';
import pic6 from '../../public/blog 6.jpg';
import pic7 from '../../public/blog 7.jpg';
import pic8 from '../../public/blog 8.jpg';

export default function BlogShopPage() {
  return (
    <div>
      {/* Section 1: Blog Header */}
      <div className="p-10 bg-cover bg-center h-[500px]" style={{ backgroundImage: `url('/shop 1.jpg')` }}>
        <div className="text-center text-3xl text-black font-bold flex flex-col justify-center items-center h-full">
          {/* <Image src={logo} alt="Logo" width={150} height={150} /> Logo */}
          <h1>Blog</h1>
          <div className="flex items-center mt-5 space-x-2">
            <p>Home</p>
            <IoIosArrowForward />
            <p className="text-gray-400">Blog</p>
          </div>
        </div>
      </div>

      {/* Section 2: Blog Posts */}
      <div className="container mx-auto p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Column */}
        <div className="lg:col-span-2">
          <div className="mb-8">
            {[pic1, pic2, pic3].map((pic, idx) => (
              <div key={idx} className="mb-4">
                <Image src={pic} alt={`Blog Image ${idx + 1}`} className="w-full h-80 object-cover mb-4" />
                <div className="flex space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <FaUser />
                    <p className="ml-2">Admin</p>
                  </div>
                  <div className="flex items-center">
                    <BsFillCake2Fill />
                    <p className="ml-2">14 Oct 2023</p>
                  </div>
                  <div className="flex items-center">
                    <FaTag />
                    <p className="ml-2">Wood</p>
                  </div>
                </div>
                <p className="text-lg mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere
                  sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet.
                </p>
                <h1 className="underline text-black mt-4">Read More</h1>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Content */}
        <div className="bg-gray-100 p-8 rounded-lg">
          {/* Search Bar */}
          <div className="flex items-center mb-8">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 border border-gray-300 rounded-l-md"
            />
            <button className="p-2 bg-black text-white rounded-r-md">
              <CiSearch />
            </button>
          </div>

          {/* Categories */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <ul className="space-y-2">
              {['Crafts', 'Design', 'Handmade', 'Interior', 'Wood'].map((category) => (
                <li key={category} className="flex justify-between">
                  <span>{category}</span><span>2</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
            <div className="space-y-4">
              {[pic4, pic5, pic6, pic7, pic8].map((pic, idx) => (
                <div key={idx} className="flex items-center mb-2">
                  <Image src={pic} alt={`Blog ${idx + 1}`} className="w-16 h-16 object-cover mr-4" />
                  <div>
                    <p>Blog title {idx + 1}</p>
                    <p>03 Aug 2022</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex gap-4 justify-center mt-8">
          {[1, 2, 3, 4].map((page) => (
            <button key={page} className={`py-2 px-4 ${page === 1 ? 'bg-gold text-white' : 'border border-gray-300 rounded'}`}>{page}</button>
          ))}
        </div>
      </div>

      {/* Section 3: Shop Features */}
      <div className="flex flex-col md:flex-row justify-between p-10 rounded-lg bg-[#FAF3EA]">
        {/* High Quality */}
        <div className="flex items-center space-x-4 mb-6 md:mb-0">
          <FaTrophy className="text-4xl text-gold" />
          <div>
            <h4 className="text-xl font-semibold">High Quality</h4>
            <p className="text-sm text-gray-600">Crafted from top material</p>
          </div>
        </div>

        {/* Warranty Protection */}
        <div className="flex items-center space-x-4 mb-6 md:mb-0">
          <LuBadgeCheck className="text-4xl" />
          <div>
            <h4 className="text-xl font-semibold">Warranty Protection</h4>
            <p className="text-sm text-gray-600">Over 2 Years</p>
          </div>
        </div>

        {/* Free Shipping */}
        <div className="flex items-center space-x-4 mb-6 md:mb-0">
          <FaShippingFast className="text-4xl" />
          <div>
            <h4 className="text-xl font-semibold">Free Shipping</h4>
            <p className="text-sm text-gray-600">Order Over $150</p>
          </div>
        </div>

        {/* 24/7 Support */}
        <div className="flex items-center space-x-4">
          <RiCustomerService2Fill className="text-4xl" />
          <div>
            <h4 className="text-xl font-semibold">24/7 Support</h4>
            <p className="text-sm text-gray-600">Dedicated Support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
