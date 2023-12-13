import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <section className='.hide-scrollbar scrollbar-hide'>
      <div className='carousel rounded h-full .hide-scrollbar'>
        <div className='carousel-item'>
          <Image src='/assets/f1.jpg' width={400} height={800} alt='f1' />
        </div>
        <div className='carousel-item'>
          <Image src='/assets/f2.jpg' width={400} height={200} alt='f1' />
        </div>
        <div className='carousel-item'>
          <Image src='/assets/f3.jpg' width={400} height={200} alt='f1' />
        </div>
        <div className='carousel-item'>
          <Image src='/assets/f1.jpg' width={400} height={200} alt='f1' />
        </div>
        <div className='carousel-item'>
          <Image src='/assets/f1.jpg' width={400} height={200} alt='f1' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
