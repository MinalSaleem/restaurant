import React from 'react'
import Image from 'next/image'
import { TiTick } from "react-icons/ti";
import { PiHamburgerLight } from "react-icons/pi";
import { MdFastfood } from "react-icons/md";
import { FaWineGlassAlt } from "react-icons/fa";

export default function HomeComp() {
    const images = [
        { src: "/home/choice1.png", alt: "Tacos" },
        { src: "/home/choice2.png", alt: "Burger" },
        { src: "/home/choice3.png", alt: "Nuggets" },
        { src: "/home/choice4.png", alt: "Cheese Burger" },
        { src: "/home/choice5.png", alt: "Fries" },
        { src: "/home/choice6.png", alt: "Pasta" },
      ];
  return (
    
    <div className="bg-black">
    <div className="flex lg:flex-row flex-col w-full lg:w-[1320px] lg:ml-[300px] ml-0 pt-[120px]">
      <div className="flex flex-col justify-between w-full lg:w-[562px]  h-[562px]">
        <h2 className="text-[#FF9F0D] font-normal text-[32px]">
          Why Choose us
        </h2>
        <h2 className="flex flex-row font-bold lg:text-5xl text-2xl">
          <p className="text-[#FF9F0D]">Ex</p>tra ordinary taste And
          Experienced
        </h2>

        <p className="text-base pr-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          diam pellentesque bibendum non dui volutpat fringilla bibendum.
          Urna, elit augue urna, vitae feugiat pretium donec id elementum.
          Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
          eu velit in consequat.
        </p>
        <ul className="text-lg">
          <li className="flex flex-row">
            <TiTick />
            Lacus nisi, et ac dapibus sit eu velit in consequat.
          </li>
          <li className="flex flex-row my-6">
            <TiTick />
            Quisque diam pellentesque bibendum non dui volutpat fringilla
          </li>
          <li className="flex flex-row">
            <TiTick />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </li>
        </ul>
        <button className="bg-[#FF9F0D] w-[190px] h-[60px] rounded-full">
          Read More
        </button>
      </div>

      <div className="flex flex-col lg:w-3/5 space-y-0 lg:space-y-4 lg:my-0 my-1 ">
        <div className="w-[350px] lg:w-[660px] h-[330px] my-1 ">
          <Image
            src="/home/about1.png"
            alt="Food"
            width={660}
            height={200}
          />
        </div>
        <div className="flex lg:flex-row flex-col space-x-0 lg:space-x-4">
          <div className="w-[350px] lg:w-[322px] h-[194px]">
            <Image
              src="/home/about2.png"
              alt="Food"
              width={312}
              height={200}
            />
          </div>
          <div>
            <Image
              src="/home/about3.png"
              alt="Food"
              width={312}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>

    <div className="flex flex-col justify-center items-center w-[350px] lg:w-[1320px] lg:ml-[200px] ml-3 mt-[120px]">
      <div>
        <h2 className="text-[#FF9F0D] font-normal text-[32px]">
          Food Categary
        </h2>
      </div>
      <div className="flex flex-row my-14">
        <p className="text-[#FF9F0D] font-bold text-3xl lg:text-5xl">Ch</p>
        <p className="font-bold text-3xl lg:text-5xl">oose Food Item</p>
      </div>

      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-10 content-around px-5">
        <div className="lg:w-[300px]">
          <Image
            src="/home/food1.png"
            alt="Food"
            width={300}
            height={382}
          />
        </div>
        <div className="lg:w-[300px]">
          <Image
            src="/home/food2.png"
            alt="Food"
            width={300}
            height={382}
          />
        </div>
        <div className="lg:w-[300px]">
          <Image
            src="/home/food3.png"
            alt="Sallers"
            width={300}
            height={382}
          />
        </div>
        <div className="lg:w-[300px]">
          <Image
            src="/home/food4.png"
            alt="Food"
            width={300}
            height={382}
          />
        </div>
      </div>
    </div>

    <div className="flex lg:flex-row flex-col-reverse w-[350px] lg:w-[1320px] lg:ml-[300px] ml-3 mt-[120px] py-[120px]">
      <div className="bg-black py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`rounded overflow-hidden ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col  justify-between w-full lg:w-[562px] h-[562px] lg:space-x-6">
        <h2 className="text-[#FF9F0D] font-normal text-[32px] mt-10 lg:ml-4">
          About us
        </h2>
        <div className="flex  font-bold text-2xl lg:text-5xl">
          <h2 className="text-[#FF9F0D] ">We </h2>
          <h2>Create the best foody product</h2>
        </div>

        <p className="text-base pr-4 lg:py-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          diam pellentesque bibendum non dui volutpat fringilla bibendum.
          Urna, elit augue urna, vitae feugiat pretium donec id elementum.
          Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
          eu velit in consequat.
        </p>

        <div className="flex  flex-row justify-between space-x-0 lg:space-x-0 lg:justify-evenly  lg:py-16 lg:ml-0 ml-0">
          <div className="flex-col justify-center items-center  lg:block  hidden">
            <div className="flex justify-center items-center w-[70px] lg:w-[102px] h-[100px] bg-[#FF9F0D] rounded-md">
              <PiHamburgerLight size={56} />
            </div>
            <div>
              <p className="font-normal text-[18px]">Fast Food</p>
            </div>
          </div>

          <div className=" flex-col justify-center items-center  lg:block  hidden">
            <div className="flex justify-center items-center w-[70px] lg:w-[102px] h-[100px] bg-[#FF9F0D] rounded-md">
              <MdFastfood size={56} />
            </div>
            <div>
              <p className="font-normal text-[18px]">Lunch</p>
            </div>
          </div>

          <div className=" flex-col justify-center items-center lg:block  hidden">
            <div className="flex justify-center items-center w-[70px] lg:w-[102px] h-[100px] bg-[#FF9F0D] rounded-md">
              <FaWineGlassAlt size={56} />
            </div>
            <div>
              <p className="font-normal text-[18px]">Dinner</p>
            </div>
          </div>
        </div>

        <div className="bg-white w-full lg:w-[374px] h-[93px] flex flex-row justify-around py-4 rounded-md">
          <p className="text-[#FF9F0D] text-5xl font-bold">30+</p>
          <p className="text-black">Years of Experienced</p>
        </div>
      </div>
    </div>
  </div>

  )
}
