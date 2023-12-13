import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sec1 = () => {
  return (
    <section className='w-full  my-9 .hide-scrollbar scrollbar-hide'>
      <p className='text-center'>À la une </p>
      <div className='hero mx-auto w-full '>
        <div className='hero-content flex-col lg:flex-row-reverse flex px-4 '>
          <Image
            src='/assets/hero-men.jpg'
            className='max-w-sm  object-fill shadow sm:w-[4900px] '
            alt='a la une'
            width={300}
            height={500}
          />
          <div className=''>
            <h1 className='text-5xl font-bold'> Style Décontracté Moderne</h1>
            <p className='py-6'>
              Plongez dans notre collection décontractée qui marie confort et
              tendance. Des tenues décontractées qui reflètent votre style
              décontracté, idéales pour une allure décontractée au quotidien
            </p>
            <Link href={"/Homme"} className='btn bg-base-200' type='button'>
              Découvrir plus
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec1;
