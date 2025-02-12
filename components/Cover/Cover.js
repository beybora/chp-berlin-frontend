import Image from "next/image";
import React from "react";

const Cover = ({ title, subtitle, background }) => {
  return (
    <div className="h-[60vh] bg-cover relative min-h-[400px] flex items-center justify-start w-full px-10" src={background}>
      <Image
        src={background}
        alt="cover"
        fill
        priority
        sizes="100vw"
        className="object-cover object-top"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="max-w-5xl z-10 text-white text-left">
        <div>
          <h1 className="text-5xl font-bold leading-tight border-b-4 border-blue-500 inline-block pb-1">
            {title}
          </h1>
          <p className="text-lg mt-4">test</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
