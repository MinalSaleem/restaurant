import React from 'react'
import { TiTick } from "react-icons/ti";
import Image from 'next/image';
import { PiHamburgerLight } from "react-icons/pi";
import { MdFastfood } from "react-icons/md";
import { FaWineGlassAlt } from "react-icons/fa";

export default function HomeComps() {
    const images = [
        { src: "/home/choice1.png", alt: "Tacos" },
        { src: "/home/choice2.png", alt: "Burger" },
        { src: "/home/choice3.png", alt: "Nuggets" },
        { src: "/home/choice4.png", alt: "Cheese Burger" },
        { src: "/home/choice5.png", alt: "Fries" },
        { src: "/home/choice6.png", alt: "Pasta" },
      ];
  return (
    <div className="bg-black mx-0">
      
    <div className="flex lg:flex-row flex-col w-full ml-0 pt-14 lg:pt-[120px] px-0 lg:px-12">
      <div className="flex flex-col justify-between w-full lg:w-[562px]  lg:h-[562px] ml-0 lg:ml-6">
        <h2 className="text-[#FF9F0D] font-normal text-[32px]">
          Why Choose us
        </h2>
        <h2 className="flex flex-row font-bold lg:text-5xl text-2xl">
          <p className="text-[#FF9F0D]">Ex</p>tra ordinary taste And
          Experienced
        </h2>

        <p className="text-base pr-0 lg:pr-4">
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
        <button className="bg-[#FF9F0D] w-[140px] lg:w-[190px] h-[40px] lg:h-[60px] rounded-full">
          Read More
        </button>
      </div>

      <div className="flex flex-col lg:w-3/5 space-y-0 lg:space-y-4 lg:my-0 my-0 justify-center items-center">
        <div className="w-[250px] lg:w-[660px] h-[200px] lg:h-[330px]">
          <Image
            src="/home/about1.png"
            alt="Food"
            width={660}
            height={200}
          />
        </div>
        <div className="flex lg:flex-row flex-col space-x-0 lg:space-x-4">
          <div className="w-[250px] lg:w-[322px] h-[194px]">
            <Image
              src="/home/about2.png"
              alt="Food"
              width={312}
              height={200}
            />
          </div>
          <div className="w-[250px] lg:w-[322px] h-[194px]">
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








      
      <div className="flex justify-center">
        <div className="flex flex-col justify-center items-center text-center ml-0 mt-6 lg:mt-[120px] py-3">
          <div>
            <h2 className="text-[#FF9F0D] font-normal text-[32px]">
              Food Category
            </h2>
          </div>
          <div className="flex flex-row my-4 lg:my-14">
            <p className="text-[#FF9F0D] font-bold text-3xl lg:text-5xl">Ch</p>
            <p className="font-bold text-3xl lg:text-5xl">oose Food Item</p>
          </div>

          <div className="mx-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-0">
            <div className="lg:w-full w-[200px]">
              <Image
                src="/home/food1.png"
                alt="Food"
                width={300}
                height={382}
                layout="responsive"
              />
            </div>
            <div className="w-full max-w-[300px]">
              <Image
                src="/home/food2.png"
                alt="Food"
                width={300}
                height={382}
                layout="responsive"
              />
            </div>
            <div className="w-full max-w-[300px]">
              <Image
                src="/home/food3.png"
                alt="Sallers"
                width={300}
                height={382}
                layout="responsive"
              />
            </div>
            <div className="w-full max-w-[300px]">
              <Image
                src="/home/food4.png"
                alt="Food"
                width={300}
                height={382}
                layout="responsive"
              />            </div>
          </div>
        </div>
      </div>
 





      <div className="flex lg:flex-row flex-col-reverse w-full lg:ml-0 ml-0 mt-[120px] lg:py-0">
        <div className="py-5 lg:px-1 px-0 bg-red-80">
          <div className="w-2/4 mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4">
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

        <div className="flex flex-col  justify-evenly w-full lg:w-2/4 h-[562px]">
          <h2 className="text-[#FF9F0D] font-normal text-[32px] mt-2 lg:ml-0">
            About us
          </h2>
          <div className="flex  font-bold text-2xl lg:text-5xl my-0">
            <h2 className="text-[#FF9F0D] ">We </h2>
            <h2>Create the best foody product</h2>
          </div>

          <p className="text-base pr-4 py-1 lg:py-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>

          <div className="flex  flex-row justify-between space-x-0 lg:space-x-0 lg:justify-evenly lg:py-6 py-0 lg:ml-0 ml-0 ">
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

          <div className="bg-white w-full lg:w-[374px] h-[93px] flex flex-row justify-around py-4 rounded-md ">
            <p className="text-[#FF9F0D] text-5xl font-bold">30+</p>
            <p className="text-black text-center">Years of Experienced</p>
          </div>
        </div>
      </div>


    </div>
  );
}
