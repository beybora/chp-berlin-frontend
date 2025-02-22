import React from 'react';

const Membership = () => {
  return (
    <div className="w-full py-10">
      <div className="max-w-5xl mx-auto container">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-h3 font-bold">Üyelik</h2>
          <p className="text-subtitle mb-6">
            Üç basit adımda üye olun
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-center mt-10">
          {/* Adım 1 */}
          <div className="p-6 border rounded-lg shadow-lg">
            <h3 className="text-lg font-bold">1. Formu doldurun</h3>
            <p className="mt-2">Üyelik formunu indirin, doldurun ve imzalayın.</p>
            <a href="/mitgliedschaftsformular.pdf" className="text-blue-500 mt-3 inline-block">Formu indir</a>
          </div>
          
          {/* Adım 2 */}
          <div className="p-6 border rounded-lg shadow-lg">
            <h3 className="text-lg font-bold">2. Formu gönderin</h3>
            <p className="mt-2">Doldurduğunuz formu ofisimize gönderin.</p>
            <p className="font-semibold mt-3">CHP Berlin, Osloerstr. 104, 13359 Berlin</p>
          </div>
          
          {/* Adım 3 */}
          <div className="p-6 border rounded-lg shadow-lg">
            <h3 className="text-lg font-bold">3. Üyelik aidatını ödeyin</h3>
            <p className="mt-2">Üyelik aidatınızı otomatik ödeme talimatı ile düzenleyin.</p>
            <p className="mt-3">Banka bilgilerimizi tüzüğümüzde bulabilirsiniz.</p>
            <a href="/satzung.pdf">
              <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
                Tüzüğü görüntüle
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
