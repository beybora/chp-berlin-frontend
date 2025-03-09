import React from "react";
import AboutUsCard from "./AboutUsCard/AboutUsCard";
import WorkGrid from "components/WorkGrid/WorkGrid";
import LatestStatements from "components/Statements/LatestStatements/LatestStatements";

const AboutUs = () => {
  return (
    <div className="w-full bg-[#E0E0E0]">
      {/* Hero Section */}
      <div className="relative w-full h-80 flex flex-col items-center justify-center bg-red-600 text-white text-center px-4">
        <h1 className="text-4xl font-bold">
          CHP Berlin Birliği'ne Hoş Geldiniz
        </h1>
        <p className="mt-2 max-w-2xl text-subtitle">
          Demokrasiye, laikliğe ve sosyal adalete inanıyoruz. Almanya’da yaşayan
          Türkiye kökenli vatandaşlarımızın haklarını savunuyor, birlik içinde
          daha güçlü bir gelecek inşa ediyoruz.
        </p>
      </div>

      {/* Wer sind wir? */}
      <div className="max-w-5xl mx-auto py-16 px-6 md:flex md:items-center md:gap-12">
        <div className="mt-8 md:mt-0 md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900">Biz Kimiz?</h2>
          <p className="text-gray-700 mt-4 text-paragraph">
            CHP Berlin Birliği, Almanya’da yaşayan Türkiye kökenli
            vatandaşlarımızın demokratik süreçlere aktif katılımını teşvik eden
            resmi bir dernektir. 27 Ocak 2013’te kurulmuş ve Almanya yasalarına
            uygun olarak faaliyet göstermektedir.
            <br />
            <br />
            Amacımız, toplumumuzun sosyal, kültürel ve siyasal süreçlerde daha
            güçlü yer almasını sağlamak, Türkiye ve Almanya arasındaki bağları
            güçlendirmektir.
          </p>
        </div>
        <img
          src="/chp-berlin.jpg"
          alt="CHP Berlin"
          className="w-full md:w-1/2 shadow-lg"
        />
      </div>

      {/* Mission & Vision */}
      <div className="bg-white py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="p-6 bg-gray-100 shadow-md">
            <h3 className="text-2xl font-bold">Misyonumuz</h3>
            <p className="text-gray-700 mt-2 text-paragraph">
              Demokrasi, laiklik, insan hakları ve sosyal adalet ilkelerine
              bağlıyız. Amacımız, toplumumuzun haklarını koruyarak siyasal ve
              sosyal süreçlere katılımını artırmak.
            </p>
          </div>
          <div className="p-6 bg-gray-100 shadow-md">
            <h3 className="text-2xl font-bold">Vizyonumuz</h3>
            <p className="text-gray-700 mt-2 text-paragraph">
              Türkiye kökenli vatandaşlarımızın Almanya’da daha güçlü bir sesi
              olması için demokratik katılımı teşvik ediyoruz. Daha adil, daha
              eşitlikçi bir toplum için çalışıyoruz.
            </p>
          </div>
        </div>
      </div>
      <LatestStatements />
      <WorkGrid title="Ne Yapıyoruz?" />
      {/* İletişim */}
      <div className="mx-auto py-16 px-6 bg-[#E30B17]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Google Maps */}
          <div className="w-full md:w-1/2">
            <iframe
              title="CHP Berlin Location"
              className="w-full h-64 rounded-lg shadow-md"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.9709284624174!2d13.3859086!3d52.5529318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a850d497e3641d%3A0xb5749f4e8c5d8414!2sOsloer%20Str.%20104%2C%2013359%20Berlin%2C%20Germany!5e0!3m2!1sen!2sde!4v1615975313732!5m2!1sen!2sde"
              allowFullScreen=""
            ></iframe>
          </div>

          {/* Adressdaten */}
          <div className="w-full md:w-1/2 text-white">
            <h2 className="text-h2 font-bold">İletişim</h2>
            <p className="mt-2 text-subtitle">
              CHP Berlin Birliği hakkında daha fazla bilgi almak için bizimle
              iletişime geçebilirsiniz.
            </p>
            <div className="mt-6 p-6 bg-white shadow-md text-gray-900 text-lg">
              <p>
                <strong>Adres:</strong> Osloerstr. 104, 13359 Berlin
              </p>
              <p>
                <strong>E-posta:</strong> info@chpberlin.de
              </p>
              <p>
                <strong>Telefon:</strong> +49 XXX XXXXXXX
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ActivityCard = ({ title, description }) => {
  return (
    <div className="p-6 bg-white shadow-md">
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-gray-700 mt-2">{description}</p>
    </div>
  );
};

export default AboutUs;
