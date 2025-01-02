import React from 'react';
import { PiChefHatBold } from 'react-icons/pi';
import { MdFastfood } from 'react-icons/md';
import { LuPizza } from 'react-icons/lu';
import { ImSpoonKnife } from 'react-icons/im';
 

export default function MenuComp() {
  return (
    <div className="relative  w-full h-[410px] pt-[120px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            
            backgroundImage: "url('/home/background2.png')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70">
            <section className="px-3 md:px-[80px] lg:px-[135px] flex flex-col justify-between lg:justify-evenly md:flex-row md:items-center py-[50px]">
              <div className="text-white w-full md:w-[50%] lg:my-7 my-9">
                <div className="flex flex-row justify-between ">
                  <div className="flex flex-col justify-center items-center text-center">
                    <div className="flex justify-center items-center w-[70px] lg:w-[102px] h-[100px] rounded-md">
                      <PiChefHatBold color="yellow" size={100} />
                    </div>
                    <div>
                      <p className="font-semibold text-[14px] lg:font-bold lg:text-[24px]">
                        Professional Chefs
                      </p>
                      <p className="font-semibold text-[14px] lg:font-bold lg:text-[24px]">
                        420
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-center text-center">
                    <div className="flex justify-center items-center w-[70px] lg:w-[102px] h-[100px] rounded-md">
                      <MdFastfood color="yellow" size={100} />
                    </div>
                    <div>
                      <p className="font-semibold text-[14px] lg:font-bold lg:text-[24px]">
                        Items Of Food
                      </p>
                      <p className="font-semibold text-[14px] lg:font-bold lg:text-[24px]">
                        320
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-center text-center">
                    <div className="flex justify-center items-center w-[70px] lg:w-[102px] h-[100px] rounded-md">
                      <ImSpoonKnife color="yellow" size={100} />
                    </div>
                    <div>
                      <p className="font-semibold text-[14px] lg:font-bold lg:text-[24px]">
                        Years Of Experienced
                      </p>
                      <p className="font-semibold text-[14px] lg:font-bold lg:text-[24px]">
                        30+
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:flex flex-col justify-center items-center text-center">
                    <div className="flex justify-center items-center w-[70px] lg:w-[102px] h-[100px] rounded-md">
                      <LuPizza color="yellow" size={100} />
                    </div>
                    <div>
                      <p className="font-semibold text-[14px] lg:font-bold lg:text-[24px]">
                        Happy Customers
                      </p>
                      <p className="font-semibold text-[14px] lg:font-bold lg:text-[24px]">
                        220
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
  )
}
