import Image from "next/image";
import ClientCard from "@/components/(pages)/ClientCard";
import MenuComp from "@/components/(pages)/MenuComp";
import HomeComps from "@/components/(pages)/HomeComps";

export default function Homepage() {
  return (
    <div className=" text-white">
      <div className="relative w-full h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/home/background1.png')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70 ">
            <section className="px-3 md:px-[80px] lg:px-[135px] flex flex-col justify-evenly md:flex-row md:items-center py-[50px] lg:mt-[120px]">
              <div className="text-white w-full md:w-[50%] ">
                <h1 className="text-[20px] md:text-[28px] lg:text-[32px] font-normal text-[#FF9F0D] whitespace-nowrap text-center md:text-left">
                  Its Quick & Amusing!
                </h1>

                <h1 className="text-[24px] md:text-[40px] lg:text-[50px] font-bold whitespace-normal mt-3 text-center md:text-left">
                  <span className="text-[#FF9F0D]">Th</span>e Art of Speed Food
                  Quality
                </h1>

                <p className="text-[12px] md:text-[14px] lg:text-[16px] font-normal mt-4 text-center md:text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Varius sed pharetra dictum neque massa congue.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mt-6">
                  <button className="bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[160px] md:h-[50px] lg:w-[190px] lg:h-[60px] rounded-[40px] hover:bg-yellow-800">
                    See More
                  </button>
                </div>
              </div>

              <div className="mt-[30px] md:mt-0 md:w-[50%] flex justify-center">
                <Image
                  src="/home/main1.png"
                  alt="Hero Image"
                  width={300}
                  height={300}
                  className="w-[90%] md:w-auto max-w-[300px] md:max-w-full"
                />
              </div>
            </section>
          </div>
        </div>
      </div>

      <HomeComps />

      <MenuComp />

      <section className="bg-black py-2 lg:py-16 px-0">
        <div>
          <h2 className="text-center text-white">Testimonials</h2>
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-12">
              What our clients are saying
            </h2>
            <ClientCard />
          </div>
        </div>
      </section>

      <div className="relative w-full lg:h-[558px] h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/home/background3.png')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70">
            <section className="flex flex-col justify-evenly items-center md:items-center py-[50px] ml-4 md:ml-12 lg:ml-96">
              {/* Heading */}
              <div className="text-white w-[90%] md:w-[80%] lg:w-[50%] text-center md:text-left">
                <h1 className="text-[18px] md:text-[28px] lg:text-[32px] font-normal text-[#FF9F0D] whitespace-nowrap">
                  Restaurant Active Process
                </h1>

                <h1 className="text-[22px] md:text-[40px] lg:text-[50px] font-bold mt-3">
                  <span className="text-[#FF9F0D]">We</span> Document Every Food
                  Bean Process until it is saved
                </h1>

                <p className="text-[12px] md:text-[14px] lg:text-[16px] font-normal mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque diam pellentesque bibendum non dui volutpat fringilla
                  bibendum. Urna, elit augue urna,
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mt-6">
                  <button className="bg-transparent text-white w-[100px] h-[30px] md:w-[160px] md:h-[50px] lg:w-[190px] lg:h-[60px] border border-[#FF9F0D] rounded-full hover:bg-yellow-800">
                    See More
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
