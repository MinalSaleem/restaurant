import React from "react";
import Image from "next/image";
import Header from "@/components/(pages)/Header";
import BlogSidebar from "@/components/(pages)/BlogSidebar";
import { blogs } from "../../../../../data/allblogs";

export default function BlogDetail({ params }: { params: { id: string } }) {
  
  const blogDetail = blogs.find((blog) => blog.id === params.id);

  if (!blogDetail) {
    return <p>Product not found!</p>;
  }
  return (
    <div><Header title="Blog List" route="Blog Details" />
    <div className="container mx-auto flex flex-col lg:flex-row mt-16">
      <div className=" overflow-hidden mb-[56px] mr-0 lg:mr-14">
        <Image
          src={blogDetail.image}
          alt={blogDetail.title}
          width={500}
          height={300}
          className="lg:w-[990px] h-[350px] lg:h-[520px]"
        />
        <div className="p-4 space-y-4">
          <h3 className="text-[#333333] text-2xl font-bold">
            {blogDetail.title}
          </h3>
          <p className="text-[#4F4F4F] lg:w-[871px] ">
            {blogDetail.description1}
          </p>
          <p className="text-[#4F4F4F] lg:w-[871px] ">
            {blogDetail.description1}
          </p>
        </div>
        <div className="p-4 bg-[#FF9F0D] font-bold text-2xl">
          <p className="text-white mt-2 lg:w-[871px] ">
            {blogDetail.description1}
          </p>
        </div>
        <div className="p-4 space-y-4">
          <p className="text-[#4F4F4F] lg:w-[871px] ">
            {blogDetail.description1}
          </p>
          <p className="text-[#4F4F4F] lg:w-[871px] ">
            {blogDetail.description1}
          </p>
        </div>
      </div>
      <BlogSidebar />
    </div>
    </div>
  );
}
