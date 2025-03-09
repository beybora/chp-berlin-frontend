import React from "react";

const OrganizationalStructure = () => {
  return (
    <div className="bg-gray-200 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Überschrift */}
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          CHP Berlin Dernek Organları
        </h2>
        <p className="text-gray-700 mt-2 text-center text-subtitle">
          CHP Berlin, demokratik ilkeler doğrultusunda yönetilmektedir.
        </p>

        {/* Grid für die Hauptorgane */}
        <div className="grid md:grid-cols-3 gap-8 mt-8 text-center">
          {/* Yönetim Kurulu */}
          <div className="bg-white p-6 shadow-md ">
            <h3 className="text-2xl font-bold">Yönetim Kurulu</h3>
            <p className="text-gray-700 mt-2 text-paragraph">
              CHP Berlin’in karar alma organıdır. Dernek faaliyetlerini yönetir,
              stratejiler belirler ve derneğin hedeflerine ulaşmasını sağlar.
              Üyeler tarafından seçilir ve 2 yıl süreyle görev yapar.
            </p>
            <a href="/yonetim-kurulu">
              <button className="mt-4 px-6 py-2 bg-red-600 text-white shadow-md hover:bg-red-700 transition">
                Detaylar
              </button>
            </a>
          </div>

          {/* Denetim & Disiplin Kurulu */}
          <div className="bg-white p-6 shadow-md">
            <h3 className="text-2xl font-bold">Denetim & Disiplin</h3>
            <p className="text-gray-700 mt-2 text-paragraph">
              Dernek faaliyetlerinin şeffaf ve etik kurallar çerçevesinde
              yürütülmesini sağlar. Mali süreçleri denetleyerek aidat ve
              bağışların doğru kullanıldığını kontrol eder. Üyelerin tüzüğe
              uygun hareket ettiğini gözetir ve gerektiğinde disiplin kararları
              alır.
            </p>
            <a href="/denetim-disiplin">
              <button className="mt-4 px-6 py-2 bg-red-600 text-white shadow-md hover:bg-red-700 transition">
                Detaylar
              </button>
            </a>
          </div>

          {/* İlçe Temsilcilikleri */}
          <div className="bg-white p-6 shadow-md">
            <h3 className="text-2xl font-bold">İlçe Temsilcilikleri</h3>
            <p className="text-gray-700 mt-2">
              CHP Berlin’in şehir genelinde temsil edilmesini sağlar. Yerel
              etkinlikleri koordine eder, üyelerle doğrudan iletişim kurar ve
              derneğin çalışmalarını bölgesel düzeyde yaygınlaştırır.
            </p>
            <a href="/ilce-temsilcileri">
              <button className="mt-4 px-6 py-2 bg-[#E30B17] text-white shadow-md hover:bg-red-700 transition">
                Detaylar
              </button>
            </a>
          </div>
        </div>

        {/* Satzung & Mehr Infos */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Satzung & Tüzük</h2>
          <p className="text-gray-700 mt-2 text-subtitle">
            CHP Berlin’in resmi tüzüğünü ve kurallarını inceleyebilirsiniz.
          </p>

          <div className="flex justify-center gap-6 mt-2">
            <a href="/satzung.pdf">
              <button className="mt-4 px-6 py-2 bg-[#E30B17] text-white shadow-md hover:bg-red-700 transition">
                Satzung (Deutsch)
              </button>
            </a>
            <a href="/tuzuk.pdf">
              <button className="mt-4 px-6 py-2 bg-[#E30B17] text-white shadow-md hover:bg-red-700 transition">
                Tüzük (Türkçe)
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationalStructure;
