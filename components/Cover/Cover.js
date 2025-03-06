import Image from "next/image";
import React from "react";

const Cover = ({ title, subtitle, background }) => {
  return (
    <div
      className="h-[60vh] bg-cover relative min-h-[400px] flex items-center justify-start w-full px-10"
      src={background}
    >
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
      <div className="container z-10 text-white text-left">
        <div clas>
          <h1 className="text-5xl font-bold leading-tight inline-block pb-1">
            CHP Berlin Birliği
          </h1>
          <p className="text-lg mt-4">
            CHP Berlin Birliği, Almanya’da Cumhuriyet Halk Partisi’nin
            temsilcisi olarak demokrasi, özgürlük ve adalet değerlerini savunur.
            Berlin’de yaşayan yurttaşları bir araya getirerek sosyal dayanışmayı
            güçlendirmeyi, Türkiye ve Almanya arasındaki ilişkileri geliştirmeyi
            hedefler.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
