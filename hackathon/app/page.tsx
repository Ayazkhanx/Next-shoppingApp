import Image from 'next/image'; // Next.js Image component
import { IoIosArrowForward } from "react-icons/io"; // For button icon
// import { RiListSettingsFill } from "react-icons/ri"; // For icons in section 2 & 4
// import { HiMiniSquares2X2 } from "react-icons/hi2"; // For icons in section 2 & 4

// Example Images for product and sections
import pic from '../public/home 1.jpg';
import pic1 from '../public/home 8.png';
// import pic2 from '../public/home 2.png';
// import pic3 from '../public/ome 5.png';

// Products Data
const products = [
  {
    id: 1,
    name: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    oldPrice: 'Rp 3.500.000',
    image: '/home 10.png',
  },
  {
    id: 2,
    name: 'Laviosa',
    description: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    oldPrice: '',
    image: '/home 11.png',
  },
  {
    id: 3,
    name: 'Lolito',
    description: 'Stylish Sofa',
    price: 'Rp 700.000',
    oldPrice: 'Rp 14.000.000',
    image: '/home 12.png',
  },
  {
    id: 4,
    name: 'Respira',
    description: 'Outdoor Bar tool and table',
    price: 'Rp 500.000',
    oldPrice: '',
    image: '/shop.jpg',
  },
];

export default function Home() {
  return (
    <div>

      {/* Section 3: New Arrivals */}
      <div className="relative p-10">
        <div className="absolute inset-0 -z-10">
          <Image
            src={pic}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-start text-white">
          <div className="bg-[#F9F1E7] p-8 rounded-lg shadow-lg w-full md:w-1/2 mx-auto">
            <h1 className="font-bold text-black mb-4">New Arrivals</h1>
            <h2 className="text-3xl font-semibold text-[#F9F1E7] mb-4">Discover Our New Collection</h2>
            <p className="text-lg text-gray-400 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
            </p>
            <button className="bg-[#3A3A3A] text-[#F9F1E7] font-bold py-2 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-[#D8C4A3] transition duration-300 transform translate-x-2">
              BUY NOW
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>

      
      {/* Section 1: Browse the Range */}
      <div className="container mx-auto p-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Browse The Range</h1>
          <p className="text-lg text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="flex justify-center gap-10">
          <div className="text-center">
            <img src='home 8.png' alt="Diving" className="w-48 h-auto mb-4" />
            <h2 className="text-xl font-semibold">Diving</h2>
          </div>
          <div className="text-center">
            <img src='home 2.png' alt="Living" className="w-48 h-auto mb-4" />
            <h2 className="text-xl font-semibold">Living</h2>
          </div>
          <div className="text-center">
            <img src='ome 5.png' alt="Bedroom" className="w-48 h-auto mb-4" />
            <h2 className="text-xl font-semibold">Bedroom</h2>
          </div>
        </div>
      </div>

      {/* Section 2: Products Grid */}
      <div className="p-10">
        <h2 className="flex justify-center text-4xl font-bold mb-4">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="border p-4">
              <img src={product.image} alt={product.name} className="w-full h-56 object-cover mb-4" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p>{product.description}</p>
              <div className="mt-2">
                <h1 className="text-xl font-bold">{product.price}</h1>
                {product.oldPrice && (
                  <p className="line-through text-gray-500">{product.oldPrice}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      

      {/* Section 4: Additional Products */}
      <div className="p-10">
        <h2 className="text-4xl font-bold mb-4">More Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="border p-4">
              <img src={product.image} alt={product.name} className="w-full h-56 object-cover mb-4" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p>{product.description}</p>
              <div className="mt-2">
                <h1 className="text-xl font-bold">{product.price}</h1>
                {product.oldPrice && (
                  <p className="line-through text-gray-500">{product.oldPrice}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-center text-[#F9F1E7]'>
          <button>Show More</button>
        </div>
      </div>

      {/* Section 5: Room Inspirations */}
      <div className="bg-[#F9F1E7] py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="text-center md:text-left px-4">
            <h1 className="text-3xl font-bold mb-4">50+ Beautiful Rooms Inspiration</h1>
            <p className="text-lg mb-6">
              Our designer already made a lot of beautiful prototypes of rooms that inspire you.
            </p>
            <button className="bg-[#3A3A3A] text-white px-6 py-3 rounded-lg hover:bg-[#D8C4A3] transition duration-300">
              Explore New
            </button>
          </div>
          <div className="relative">
            <img src='/home 18.png' alt="Beautiful Room 1" className="w-full h-[500px] object-cover rounded-lg shadow-lg" />
          </div>
          <div className="relative">
            <img src='/home 17.png' alt="Beautiful Room 2" className="w-full h-[300px] object-cover rounded-lg shadow-lg" />
          </div>
        </div>
      </div>

      {/* Section 6: User Shared Images */}
      <div className="py-10 px-4 bg-[#F9F1E7]">
        <div className="text-center mb-10">
          <p className="text-lg text-gray-600">Share your setup with</p>
          <h2 className="text-4xl font-bold text-[#3A3A3A]">#FuniroFurniture</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
            <img src="home 11.png" alt="Furniture setup 1" className="w-full h-full object-cover rounded-lg shadow-md" />
          </div>
          <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]">
            <img src="home 12.png" alt="Furniture setup 2" className="w-full h-full object-cover rounded-lg shadow-md" />
          </div>
          <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
            <img src="home 15.png" alt="Furniture setup 3" className="w-full h-full object-cover rounded-lg shadow-md" />
          </div>
          <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
            <img src="home 4.png" alt="Furniture setup 4" className="w-full h-full object-cover rounded-lg shadow-md" />
          </div>
          <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
            <img src="home 19.png" alt="Furniture setup 5" className="w-full h-full object-cover rounded-lg shadow-md" />
          </div>
          <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]">
            <img src="home 20.png" alt="Furniture setup 6" className="w-full h-full object-cover rounded-lg shadow-md" />
          </div>
          <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
            <img src="home 7.png" alt="Furniture setup 7" className="w-full h-full object-cover rounded-lg shadow-md" />
          </div>
          <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]">
            <img src="home 4.png" alt="Furniture setup 8" className="w-full h-full object-cover rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </div>
  );
}
