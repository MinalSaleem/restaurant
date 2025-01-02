import React from 'react'
import Link from 'next/link';

export default function AboutMenu() {
      const menuItems = [
        {
          name: "Alder Grilled Chinook Salmon",
          description: "Toasted French bread topped with romano, cheddar",
          price: "32$",
          calories: "560 CAL",
        },
      ];
  return (
    
<div className="w-full max-w-5xl mx-auto py-10 px-4">
  <h1 className="text-center text-3xl font-bold mb-4">Our Food Menu</h1>
  <p className="text-center text-gray-500 mb-6">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra.
  </p>

  <div className="flex flex-wrap lg:justify-center justify-center gap-4 mb-8">
    {["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack"].map(
      (category, index) => (
        <button
          key={index}
          className={`px-4 py-2 text-sm font-medium ${
            index === 0
              ? "text-orange-500 border-b-2 border-[#FF9F0D]"
              : "text-gray-500"
          }`}
        >
          {category}
        </button>
      )
    )}
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
    {Array(6)
      .fill(menuItems[0])
      .map((item, index) => (
        <div
          key={index}
          className="flex justify-between border-b pb-4 last:border-none"
        >
          <div>
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.description}</p>
            <span className="text-xs text-gray-400">{item.calories}</span>
          </div>
          <div className="text-lg font-semibold text-[#FF9F0D]">
            {item.price}
          </div>
        </div>
      ))}
  </div>

  <div className="flex justify-center mt-6">
    <Link href="/menu">
    <button className="px-6 py-2 text-[#FF9F0D] bg-white border border-[#FF9F0D]">
      View menu
    </button>
    </Link>
  </div>
</div>

  )
}
