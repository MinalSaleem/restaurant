import Image from "next/image";
import { IoPlayOutline } from "react-icons/io5";
import Header from "@/components/(pages)/Header";
import ClientCard from "@/components/(pages)/ClientCard";
import ChooseCard from "@/components/(pages)/ChooseCard";
import AboutMenu from "@/components/(pages)/AboutMenu";

export default function Aboutus() {
  return (
    <div>
      <Header title="About Us" route="About us" />

      <div className="text-white body-font">
        <div className="container mx-auto flex lg:flex-row flex-col px-5 py-24 ">
          <div className="flex flex-col md:flex-row items-center md:space-x-4 mt-2 ml-2">
            <Image
              className="object-cover object-center w-336px h-536px mt-530px ml-300px radius-6px"
              alt="hero"
              src="/about/1.png"
              width={309}
              height={536}
            />
          </div>

          <div className="flex flex-col space-y-2 space-x-2 mt-2 ml-2">
            <Image
              className="object-cover object-center w-309px h-271px mt-584px ml-660px radius-6px"
              alt="image2"
              src="/about/2.png"
              width={309}
              height={271}
            />

            <Image
              className="object-cover object-center w-309px h-382px mt-882px ml-660px radius-6px"
              alt="image3"
              src="/about/3.png"
              width={309}
              height={382}
            />
          </div>

          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center lg:py-20">
            <h1 className="text-sm mb-4 font-medium text-yellow-400 italic">
              About us _____
            </h1>
            <p className="text-black lg:text-5xl font-bold">
              Food is an important part of a balanced Diet
            </p>
            <p className="mb-8 leading-relaxed mt-8 text-[#333333]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-[#FF9F0D] border-0 py-2 px-3 focus:outline-none rounded text-lg">
                Show More
              </button>
              <button className="ml-4 inline-flex text-black  border-0 py-2 px-3 focus:outline-none rounded text-lg">
                <IoPlayOutline className="mr-2 block bg-[#FF9F0D] text-white" />{" "}
                Watch video
              </button>
            </div>
          </div>
        </div>
      </div>

      <ChooseCard />

      <div className="bg-white py-16 px-4">
        <h2 className="text-center">Testimonials</h2>
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12">
            What our clients are saying
          </h2>
          <ClientCard />
        </div>
      </div>

      <AboutMenu />
    </div>
  );
}
