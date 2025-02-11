import Image from "next/image";
import React from "react";

const Cover = ({ children, background }) => {
  return (
    <div className="h-[60vh] text-black bg-cover relative min-h-[400px] flex items-center justify-center w-full">
      <Image
        src={background}
        alt="cover"
        fill
        priority
        sizes="100vw"
        className="object-cover object-top"
      />
      <div className="max-w-5xl z-10">{children}</div>
    </div>
  );
};

export default Cover;
