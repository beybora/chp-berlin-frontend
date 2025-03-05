import ButtonLink from 'components/ButtonLink/ButtonLink';
import Image from 'next/image';
import React from 'react';

const YouthClub = () => {
  return (
    <div className="w-full py-10">
      <div className="max-w-2xl mx-auto container flex flex-col md:flex-row items-center gap-8">
        
        {/* Bild links */}
        <div className="flex-1">
          <Image 
            src="/assets/images/undraw_winners_fre4.png"
            alt="Gençlik Kolumuz Illustration"
            width={200}
            height={100}
            className="w-full h-auto"
          />
        </div>

        {/* Text rechts */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-h2 font-bold">Gençlik Kolumuz</h2>
          <p className="text-subtitle my-4">
            Gençlik kolumuz, gençleri bir araya getirerek sosyal projeler, etkinlikler 
            ve eğitim fırsatları sunar. Bizimle beraber gençlik hareketine katıl!
          </p>
          <div className="w-full flex justify-left">
            <ButtonLink destination="/" label="Gençlik Hareketine Katıl" type="red" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default YouthClub;
