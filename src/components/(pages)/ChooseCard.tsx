import React from 'react'
import Image from 'next/image'
import { PiStudent } from "react-icons/pi";
import { SlCup } from "react-icons/sl";
import { GiHumanTarget } from "react-icons/gi";

export default function ChooseCard() {
  return (
    <div>
  <div className="text-white body-font">
    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col lg:w-full w-full">
      <h1 className="text-black lg:text-[48px] text-[28px] font-bold mt-3 text-center">
        Why Choose Us
      </h1>
      <p className="text-black text-center mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
        pellentesque bibendum non dui volutpat fringilla bibendum.
      </p>
      <Image
        className="mb-10 object-cover object-center w-full lg:w-[1320px] h-auto mt-10"
        alt="hero"
        src="/about/4.png"
        width={1320}
        height={386}
      />
    </div>
  </div>

  <div className="text-white body-font">
    <div className="container px-5 mx-auto">
      <div className="flex flex-wrap -m-4">
        <div className="p-4 md:w-1/3 w-full">
          <div className="h-full flex justify-center items-center flex-col border-2 rounded-lg">
            <PiStudent />
            <div className="p-6">
              <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
                BEST CHEF
              </h1>
              <p className="leading-relaxed mb-3 text-center text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3 w-full">
          <div className="h-full border-2 flex justify-center items-center flex-col rounded-lg overflow-hidden">
            <SlCup />
            <div className="p-6">
              <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
                120 Item food
              </h1>
              <p className="leading-relaxed mb-3 text-center text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3 w-full">
          <div className="h-full border-2 flex justify-center items-center flex-col rounded-lg overflow-hidden">
            <GiHumanTarget />
            <div className="p-6">
              <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
                Clean Environment
              </h1>
              <p className="leading-relaxed mb-3 text-center text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
