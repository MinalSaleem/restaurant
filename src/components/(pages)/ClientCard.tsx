import React from "react";
import Image from "next/image";

export default function ClientCard() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="lg:w-[800px] w-full bg-gray-100 p-6 rounded-lg shadow-lg text-center">
          <div className="flex justify-center">
            <Image
              className="rounded-full"
              src="/about/5.png"
              alt="Client Image"
              width={96}
              height={96}
            />
          </div>

          <p className="text-xl font-semibold text-[#FF9F0D] mt-4">99</p>
          <div className="flex justify-center mt-2">
            <span className="text-[#FF9F0D] text-lg">&#9733;</span>
            <span className="text-[#FF9F0D] text-lg">&#9733;</span>
            <span className="text-[#FF9F0D] text-lg">&#9733;</span>
            <span className="text-[#FF9F0D] text-lg">&#9733;</span>
            <span className="text-gray-300 text-lg">&#9733;</span>
          </div>

          <p className="text-gray-600 mt-4 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Aenean lacinia neque vel erat varius.
          </p>

          <p className="text-lg font-medium text-gray-800">Alamin Hasan</p>
          <p className="text-sm text-gray-500">Food Specialist</p>

          <div className="flex justify-center mt-6">
            <span className="w-3 h-3 bg-[#FF9F0D] rounded-full mx-2"></span>
            <span className="w-3 h-3 bg-gray-300 rounded-full mx-2"></span>
            <span className="w-3 h-3 bg-gray-300 rounded-full mx-2"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
