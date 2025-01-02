import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegCopyright } from "react-icons/fa";
import FooterCard from "./FooterCard";

export default function Footer() {
  return (
    <div className="bg-black mx-0 lg:mx-0">
    <div className="text-white">
      <div className="flex flex-col lg:flex-row justify-between lg:px-[140px] px-1 lg:py-[120px] py-20">
        <div className="text-white md:w-[50%] w-[200px]">
          <h2 className="text-[20px] md:text-[32px] font-semibold">
            <span className="text-[#FF9F0D]">St</span>ill Need Our Support?
          </h2>
          <p className="text-[10px] md:text-[16px] font-normal mt-[17px]">
            Don&#39;t wait make a smart & logical quote here. It’s pretty easy.
          </p>
        </div>
  
        <div className="flex flex-row md:mt-0 mt-[20px] w-[200px] lg:w-[459px] h-[55px]">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="bg-[#FF9F0D] text-white py-[5px] px-[10px] md:py-[10px] md:px-[20px] w-3/5 lg:w-[296px]"
          />
          <button className="text-[#FF9F0D] bg-white py-[5px] md:py-[10px] px-[10px] md:px-[20px] w-2/5">
            Subscribe Now
          </button>
        </div>
      </div>
  
      <hr className="my-4 border-[#FF9F0D] mx-[10px] lg:mx-[135px]" />
      <div className="lg:h-[440px] flex flex-col lg:flex-row justify-between lg:justify-evenly py-8 lg:py-[80px] px-[10px] lg:px-0">
        <div className="mb-10 lg:mb-0">
          <h3 className="lg:text-2xl text-lg font-bold pb-5">About Us.</h3>
          <p className="w-full lg:w-80">
            Corporate clients and leisure travelers
            <br /> have been relying on Groundlink
            for dependable, safe, and professional chauffeured car service in major
            cities across the World.
          </p>
          <div className="flex flex-row mt-[34px]">
            <div>
              <Image
                src="/footer/watch.png"
                alt="watch"
                width={76}
                height={76}
                className="flex items-center justify-center w-[80px] h-[80px]"
              />
            </div>
            <div className="flex flex-col font-normal ml-4">
              <h3 className="text-lg">Opening Hours</h3>
              <p>Mon - Sat (8.00 - 6.00)</p>
              <p>Sunday - Closed</p>
            </div>
          </div>
        </div>
  
        <div className="mb-8 lg:mb-0 w-full lg:w-auto">
          <h3 className="lg:text-2xl text-lg font-bold pb-5">Useful Links</h3>
          <ul className="flex flex-col lg:gap-5 gap-1">
            <li>About</li>
            <li>News</li>
            <li>Partners</li>
            <li>Team</li>
            <li>Menu</li>
            <li>Contacts</li>
          </ul>
        </div>
  
        <div className="mb-8 lg:mb-0 w-full lg:w-auto">
          <h3 className="lg:text-2xl text-lg font-bold pb-5">Help?</h3>
          <ul className="flex flex-col lg:gap-5 gap-1">
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>Terms & conditions</li>
            <li>Reporting</li>
            <li>Documentation</li>
            <li>Support Policy</li>
            <li>Privacy</li>
          </ul>
        </div>
  
        <div className="mb-10 lg:mb-0">
          <h3 className="lg:text-2xl text-lg font-bold pb-5">Recent Post</h3>
          <div className="flex flex-col space-y-5">
            <FooterCard
              image="/footer/1.png"
              date="20 Feb 2022"
              detail="Keep Your Business"
            />
            <FooterCard
              image="/footer/2.png"
              date="20 Feb 2022"
              detail="Keep Your Business"
            />
            <FooterCard
              image="/footer/3.png"
              date="20 Feb 2022"
              detail="Keep Your Business"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-row lg:items-center lg:justify-center justify-start text-white bg-[#4F4F4F] h-auto lg:h-[99px] px-[10px]">
      <FaRegCopyright />
      <p>Copyright Rimel 2022. All rights reserved</p>
    </div>
  </div>
  
  );
}
