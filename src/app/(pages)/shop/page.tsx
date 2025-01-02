// import ProductCard from "@/components/(pages)/ProductCard";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "@/components/(pages)/Shopsidebar";
import Header from "@/components/(pages)/Header";
import { shop } from "../../../../data/shop";

export default function Shop() {
  return (
    <div>
      <Header title="Our Shop" route="Shop" />
      <div className="container mx-auto p-4 mt-[120px]">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {shop.map((shops) => (
                <div
                  key={shops.id}
                  className="bg-white w-[312px] h-[330px]  overflow-hidden"
                >
                  <Image
                    src={shops.image}
                    alt={shops.title}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 flex flex-row justify-between">
                    <span>
                      <h3 className="text-lg font-semibold">{shops.title}</h3>
                      <p className="text-gray-500">${shops.price}</p>
                    </span>
                    <span className="text-gray-500">
                      <Link href={`/shop/${shops.id}`}>
                        <button className="bg-[#FF9F0D] text-white hover:text-[#FF9F0D] hover:bg-transparent hover:border-[#FF9F0D] hover:border px-4 py-2 my-2 rounded-md">
                          View Details
                        </button>
                      </Link>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6 lg:mb-0 lg:block hidden">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
