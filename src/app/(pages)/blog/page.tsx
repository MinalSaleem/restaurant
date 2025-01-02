import Header from "@/components/(pages)/Header";
import BlogSidebar from "@/components/(pages)/BlogSidebar";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "../../../../data/allblogs";

export default function Blog() {
  return (
    <div>
      <Header title="Blog List" route="Blog" />

      <div className="container mx-auto flex flex-col lg:flex-row mt-16">
        <div className="lg:w-3/4 p-4">
          {blogs.map((blog) => (
            <div key={blog.id} className="overflow-hidden mb-[56px]">
              <Image
                src={blog.image}
                alt={blog.title}
                width={500}
                height={300}
                className="w-[990px] h-[300px] lg:h-[520px]"
              />

              <div className="p-4">
                <h3 className="text-[#333333] text-2xl font-bold">
                  {blog.title}
                </h3>
                <p className="text-[#4F4F4F] mt-2 lg:w-[871px] ">
                  {blog.description1}
                </p>
                <Link href={`/blog/${blog.id}`}>
                  <button className="text-[#FF9F0D] bg-white border border-[#FF9F0D] w-[172px] h-[52px] py-[14px] px-[32px] mt-4 rounded">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <BlogSidebar />
      </div>
    </div>
  );
}
