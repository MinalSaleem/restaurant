import React from 'react'
import Image from 'next/image'

interface Props {
    image: string;
    date: string;
    detail: string;
}  

export default function FooterCard({ image,date,detail }: Props) {
  return (
    <div className="flex flex-row space-y-3 lg:space-y-0">
        <div>
            <Image
            src={image}
            alt={detail}
            width={76}
            height={76}
            className="flex items-center justify-center  w-[55px] h-[67px]"
            />
        </div>

        <div className="flex flex-col justify-between lg:ml-4 ml-0 ">
            <p className="text-gray-400 text-base">{date}</p>
            <p className="text-lg">{detail}</p>
        </div>
    </div>
  )
}
