"use client";

import React from "react";
import Image from "next/image";
import Header from "@/components/(pages)/Header";
import { FaStar } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { LuGitCompareArrows } from "react-icons/lu";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import Link from "next/link";
import { useState } from "react";
import { shop } from "../../../../../data/shop";

export default function ShopDetail({ params }: { params: { id: string } }) {

  const [quantity, setQuantity] = useState(1);

  const shopDetail = shop.find((shop) => shop.id === params.id);
  if (!shopDetail) {
    return <p>Product not found!</p>;
  }

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    console.log("Product added to cart:", {
      name: shopDetail.title,
      price: shopDetail.price,
      quantity,
    });
    alert("Added to Cart!");
  };

  return (
    <div>
      <Header title="Shop Details" route="Shop details" />
      <div className="flex flex-col lg:flex-row mt-[120px]">
        <div className="flex lg:flex-row flex-col-reverse">
          <div className="flex flex-row lg:flex-col lg:space-x-0 space-x-3 lg:space-y-4 justify-between space-y-4 mx-auto lg:ml-[135px]">
            {[...Array(4)].map((_, i) => (
              <Image
                key={i}
                src={shopDetail.image}
                alt={shopDetail.title}
                width={200}
                height={200}
                className="w-[60px] h-[70px] md:w-[80px] md:h-[80px] lg:w-[170px] lg:h-[138px] bg-[#F5F5F5] flex items-center justify-center"
              />
            ))}
          </div>
          <div className="w-[90%] md:w-[350px] lg:w-[600px] h-[300px] md:h-[400px] lg:h-[600px] bg-[#F5F5F5] flex items-center justify-center mx-auto mt-5 lg:mt-0">
            <Image
              src={shopDetail.image}
              alt={shopDetail.title}
              width={700}
              height={700}
              className="w-[300px] md:w-[350px] lg:w-[560px] h-[300px] md:h-[400px] lg:h-[596px]"
            />
          </div>
        </div>
        <div className="w-full lg:w-[500px] h-auto lg:h-[600px] px-4 lg:ml-14 divide-slate-300 divide-y-2">
          <div className="space-y-4 mb-4">
            <h1 className="text-[32px] md:text-[48px] font-bold">{shopDetail.title}</h1>
            <p className="text-[12px] md:text-[14px] text-[#4F4F4F]">{shopDetail.detail}</p>
          </div>
          <div className="space-y-4 pt-4">
            <p className="text-[24px] md:text-[32px] font-bold">{shopDetail.price}$</p>
            <div className="flex flex-row items-center space-x-2">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} color="#FFAD33" size={20} />
              ))}
              <FaStar color="lightgray" size={20} />
              <p className="text-gray-500 text-sm md:text-base">(5.0 Rating) | 22 Reviews</p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 pb-8 border-b-2">
              <div className="flex md:max-w-[181px] h-[50px]">
                <button onClick={handleDecrement} className="w-[60px] border-2 p-2 text-[28px]">
                  &#45;
                </button>
                <div className="w-[60px] border-2 pt-3 p-2 text-center">{quantity}</div>
                <button onClick={handleIncrement} className="w-[60px] border-2 p-2 text-[25px]">
                  &#43;
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex gap-6 w-[191px] h-[50px] rounded-[6px] bg-[#FF9F0D] text-[#ffffff] p-4"
              >
                <IoBagOutline size={20} /> <span>Add to Cart</span>
              </button>
            </div>
            <p className="flex gap-2 pt-4">
              <IoIosHeartEmpty size={20} />
              <span>Add to Wishlist</span>
              <LuGitCompareArrows size={20} />
              <span>Compare</span>
            </p>
            <p className="py-2">
              <span className="font-semibold">Category:</span> Pizza
            </p>
            <p>
              <Link href="/shop">
                <span className="font-semibold">Tag:</span> Our Shop
              </Link>
            </p>
            <p className="flex gap-3 pt-2 pb-4 border-b-2">
              <span className="font-semibold">Share:</span>
              <FaLinkedin size={20} />
              <IoLogoGithub size={20} />
              <FaYoutube size={20} />
              <FaInstagram size={20} />
              <FaFacebook size={20} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
