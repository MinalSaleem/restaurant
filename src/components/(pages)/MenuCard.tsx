import React from 'react'
import Image from 'next/image'

interface Props {
    image: string;
    title: string;
    h1: string;
    p1: string;
    h2: string;
    p2: string;
    h3: string;
    p3: string;
    h4: string;
    p4: string;
}

export default function MenuCard({ image,title,h1,p1,h2,p2,h3,p3,h4,p4 }: Props) {
  return (
<div className="min-h-screen flex flex-col lg:flex-row w-full lg:w-[1320px] lg:h-[628px] h-auto ml-3 mx-0 lg:ml-60 my-16">
  {/* Image Section */}
  <div className="w-full sm:w-[400px] lg:w-[448px] h-[300px] sm:h-[400px] lg:h-[626px] flex items-center justify-center mx-auto lg:mx-0">
    <Image src={image} alt={title} width={400} height={500} />
  </div>

  {/* Content Section */}
  <div className="w-full sm:w-[380px] lg:w-[600px] flex flex-col ml-0 lg:ml-14 mt-16 lg:mt-0 px-4 sm:px-0">
    {/* Title */}
    <div className="lg:my-7 my-4">
      <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold">{title}</h2>
    </div>

    {/* Content Items */}
    <div className="flex flex-col">
      {/* Content Item 1 */}
      <div className="flex flex-col border-[#E0E0E0] border-b-2">
        <div className="flex flex-col sm:flex-row sm:justify-between lg:space-y-2 sm:space-y-0 sm:space-x-3">
          <h2 className="text-lg sm:text-lg lg:text-2xl font-semibold">{h1}</h2>
          <p className="text-[#FF9F0D] text-lg sm:text-xl lg:text-2xl">32$</p>
        </div>
        <p className="text-[#4F4F4F] my-0 lg:my-3">{p1}</p>
        <p className="text-[#828282] mb-3">560 CAL</p>
      </div>

      {/* Content Item 2 */}
      <div className="flex flex-col border-[#E0E0E0] border-b-2">
        <div className="flex flex-col sm:flex-row sm:justify-between space-y-2 sm:space-y-0 sm:space-x-3 text-[#FF9F0D]">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold">{h2}</h2>
          <p className="text-lg sm:text-xl lg:text-2xl">32$</p>
        </div>
        <p className="text-[#4F4F4F] my-2 lg:my-3">{p2}</p>
        <p className="text-[#828282] mb-3">560 CAL</p>
      </div>

      {/* Content Item 3 */}
      <div className="flex flex-col border-[#E0E0E0] border-b-2">
        <div className="flex flex-col sm:flex-row sm:justify-between space-y-2 sm:space-y-0 sm:space-x-3">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold">{h3}</h2>
          <p className="text-[#FF9F0D] text-lg sm:text-xl lg:text-2xl">32$</p>
        </div>
        <p className="text-[#4F4F4F] my-2 lg:my-3">{p3}</p>
        <p className="text-[#828282] mb-3">560 CAL</p>
      </div>

      {/* Content Item 4 */}
      <div className="flex flex-col border-[#E0E0E0] border-b-2">
        <div className="flex flex-col sm:flex-row sm:justify-between space-y-2 sm:space-y-0 sm:space-x-3">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold">{h4}</h2>
          <p className="text-[#FF9F0D] text-lg sm:text-xl lg:text-2xl">32$</p>
        </div>
        <p className="text-[#4F4F4F] my-2 lg:my-3">{p4}</p>
        <p className="text-[#828282] mb-3">560 CAL</p>
      </div>
    </div>
  </div>
</div>

  )
}
