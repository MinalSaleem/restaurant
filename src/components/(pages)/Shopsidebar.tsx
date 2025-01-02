import React from "react";
import Image from "next/image";

export default function Shopsidebar() {
    return (
      <aside className="w-full lg:w-[250px] bg-white border border-gray-300 p-6">
        
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-4">Category</h3>
          <ul className="space-y-2">
            <li className="flex flex-row">
              <input type="checkbox" />
              <label htmlFor="burger" className="ml-2 text-gray-600">Sandeiches</label>
            </li>
            <li  className="flex flex-row">
              <input type="checkbox" />
              <label htmlFor="pizza" className="ml-2 text-gray-600">Chicken Chup</label>
            </li>
            <li  className="flex flex-row">
              <input type="checkbox" />
              <label htmlFor="drinks" className="ml-2 text-gray-600">Drinks</label>
            </li>
            <li className="flex flex-row">
              <input type="checkbox" />
              <label htmlFor="burger" className="ml-2 text-gray-600">Burgers</label>
            </li>
            <li className="flex flex-row">
              <input type="checkbox" />
              <label htmlFor="burger" className="ml-2 text-gray-600">Burgers</label>
            </li>
            
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold  mb-4">Filter by Price</h3>
        </div>
  
        <div>
          <h3 className="font-semibold text-lg mb-4">Latest Products</h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <Image
                src="/shoplist/latest.png"
                alt="Latest Product"
                width={300}
                height={300}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="ml-4">
                <p className="text-sm text-gray-600">New Pizza</p>
                <p className="text-sm text-gray-500">$15.99</p>
              </div>
            </li>
          
          </ul>

          <ul className="space-y-4">
            <li className="flex items-center">
              <Image
                src="/shoplist/latest.png"
                alt="Latest Product"
                width={300}
                height={300}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="ml-4">
                <p className="text-sm text-gray-600">New Pizza</p>
                <p className="text-sm text-gray-500">$15.99</p>
              </div>
            </li>
          
          </ul>

          <ul className="space-y-4">
            <li className="flex items-center">
              <Image
                src="/shoplist/latest.png"
                alt="Latest Product"
                width={300}
                height={300}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="ml-4">
                <p className="text-sm text-gray-600">New Pizza</p>
                <p className="text-sm text-gray-500">$15.99</p>
              </div>
            </li>
          
          </ul>


          <ul className="space-y-4">
            <li className="flex items-center">
              <Image
                src="/shoplist/latest.png"
                alt="Latest Product"
                width={300}
                height={300}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="ml-4">
                <p className="text-sm text-gray-600">New Pizza</p>
                <p className="text-sm text-gray-500">$15.99</p>
              </div>
            </li>
          
          </ul>
        </div>
      </aside>
    );
  }
  