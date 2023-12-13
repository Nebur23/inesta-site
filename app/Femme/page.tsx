import React from "react";

const Femmepage = () => {
  return (
    <div className='overflow-hidden no-scrollbar min-h-screen'>
      <div
        className='hero min-h-screen object-cover  bg-no-repeat '
        style={{
          backgroundImage: "url(/assets/cover.jpg)",
        }}
      >
        <div className='hero-overlay bg-opacity-60'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className='max-w-md'>
            <h1 className='mb-5 text-5xl font-bold'> Élégance Féminine</h1>
            <p className='mb-5'>
              Explorez notre collection mettant en avant l&apos;élégance
              intemporelle et la féminité. Des pièces qui célèbrent la beauté
              naturelle et le charme de chaque femme.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Femmepage;
