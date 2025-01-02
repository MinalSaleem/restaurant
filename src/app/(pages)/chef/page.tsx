import React from "react";
import Header from "@/components/(pages)/Header";
import Image from "next/image";

const chefs = [
  { titles: "Tahmina Rumi", work: "Chef", pic: "/chef/1.png" },
  { titles: "Jorina Begum", work: "Chef", pic: "/chef/2.png" },
  { titles: "M. Mohammad", work: "Chef", pic: "/chef/3.png" },
  { titles: "Munna Kathy", work: "Chef", pic: "/chef/4.png" },
  { titles: "Tahmina Rumi", work: "Cook", pic: "/chef/5.png" },
  { titles: "Bisnu Devgon", work: "Chef", pic: "/chef/6.png" },
  { titles: "Motin Molladst", work: "Chef", pic: "/chef/7.png" },
  { titles: "William Rumi", work: "Chef", pic: "/chef/8.png" },
  { titles: "Kets William Roy", work: "Chef", pic: "/chef/9.png" },
  { titles: "Mahmud Kholil", work: "Chef", pic: "/chef/10.png" },
  { titles: "Ataur Rahman", work: "Chef", pic: "/chef/11.png" },
  { titles: "Monalisa Holly", work: "Chef", pic: "/chef/12.png" },
];

export default function Chef() {
  return (
    <div>
      <Header title="Our Chef" route="Chef"/>

      <div className="my-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-24">
      
        {chefs.map((chef, index) => (
          <div key={index} className="overflow-hidden bg-white flesx flex-col">
            <div className="flex">
              <Image
                src={chef.pic}
                alt={chef.titles}
                width={300}
                height={300}
                className="w-full h-full object-cover"/>
            </div>

            <div className="p-4 text-center">
              <h3 className="text-gray-800 font-bold text-lg">{chef.titles}</h3>
              <p className="text-gray-600">{chef.work}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};
