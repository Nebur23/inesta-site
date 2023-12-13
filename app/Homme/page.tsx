import React from "react";

const Hommepage = () => {
  return (
    <div className='overflow-hidden no-scrollbar min-h-screen'>
      <div
        className='hero min-h-screen object-cover  bg-no-repeat '
        style={{
          backgroundImage: "url(/assets/hero-men.jpg)",
        }}
      >
        <div className='hero-overlay bg-opacity-60'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className='max-w-md'>
            <h1 className='mb-5 text-5xl font-bold'>  Collection Élégance Urbaine </h1>
            <p className='mb-5'>
            Découvrez notre gamme raffinée d&apos;habits pour homme, alliant style contemporain et sophistication citadine. Parfaits pour toutes les occasions, nos vêtements incarnent l&apos;élégance moderne
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hommepage;
