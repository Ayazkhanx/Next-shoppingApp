import React from 'react';
import Image from 'next/image'; // Next.js Image component
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { FaTrophy, FaShippingFast } from "react-icons/fa";
import { LuBadgeCheck } from "react-icons/lu";
import { RiCustomerService2Fill } from "react-icons/ri";

// Import images
import logo from '../../public/logo.png';
// import pic1 from '../../public/shop 1.jpg'; 
import pic2 from '../../public/shop 2.png';
import pic3 from '../../public/shop 6.png';

export default function ShopPage() {
  return (
    <div className="space-y-16">

      {/* Product Section 1 */}
      <div className="p-10 blog1">
        {/* Background Image is set in CSS */}
        <div className="text-3xl text-black font-bold mt-5 flex flex-col justify-center items-center h-full">
          <Image src={logo} alt="Logo" width={150} height={150} /> {/* Logo */}
          <h1>Product</h1>

          <div className="flex items-center p-10">
            <p>Home</p>
            <IoIosArrowForward />
            <p className="text-gray-400">Product</p>
          </div>
        </div>
      </div>

      {/* Product Section 2 */}
      <div className="grid grid-cols-12 gap-6 px-10">
        {/* Section to Go to Product Page */}
        <div className="col-span-3">
          <h1 className="text-2xl font-semibold">Go to Product page for more Products</h1>
          <button className="mt-4 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700">
            View More
          </button>
        </div>

        {/* Product 1: Asgard Sofa */}
        <div className="col-span-3 text-center">
          <Image src={pic3} alt="Asgard Sofa" width={300} height={300} className="w-full h-auto object-cover mb-4" />
          <h1 className="text-xl font-semibold">Asgard Sofa</h1>
          <p className="text-lg text-gray-800">Rs. 250,000.00</p>
        </div>

        {/* Product 2: Outdoor Sofa Set */}
        <div className="col-span-3 text-center">
          <Image src={pic2} alt="Outdoor Sofa Set" width={300} height={300} className="w-full h-auto object-cover mb-4" />
          <h1 className="text-xl font-semibold">Outdoor Sofa Set</h1>
          <p className="text-lg text-gray-800">Rs. 240,000.00</p>
        </div>

        {/* Add Product Section */}
        <div className="col-span-3">
          <h1 className="text-2xl font-semibold">Add Product</h1>
          <button className="mt-2 px-6 py-3 bg-[#F9F1E7] text-white font-semibold flex items-center justify-center">
            Choose Product <IoIosArrowDown className="ml-2" />
          </button>
        </div>
      </div>

      {/* Shop Section 3: Features */}
      <div className="flex flex-col md:flex-row justify-between p-10 rounded-lg" style={{ backgroundColor: '#FAF3EA' }}>
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
            <h4 className="text-xl font-semibold">24 / 7 Support</h4>
            <p className="text-sm text-gray-600">Dedicated Support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
