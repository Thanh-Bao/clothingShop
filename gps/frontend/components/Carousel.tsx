'use client';

import { Carousel } from 'flowbite-react';
import Image from 'next/image';

export default function StaticCarousel() {
  return (
    <Carousel className="sm:h-[272px] xl:h-[336px] 2xl:h-[368px] ">
      <Image
            src="/slider2.png"
            alt="clothes shop logo"
            width={262}
            height={400}
            layout="responsive"
            className="object-contain"
          />
      <Image
            src="/slider2.png"
            alt="clothes shop logo"
            width={262}
            layout="responsive"
            height={400}
            className="object-contain"
          />
      <Image
            src="/slider2.png"
            alt="clothes shop logo"
            layout="responsive"
            width={262}
            height={400}
            className="object-contain"
          />
    </Carousel>
  )
}


