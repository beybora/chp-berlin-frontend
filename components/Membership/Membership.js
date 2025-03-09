import React from "react";
import {
  FaFileDownload,
  FaPaperPlane,
  FaCreditCard,
  FaBalanceScale,
} from "react-icons/fa";

const Membership = () => {
  return (
    <div className="w-full py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto container">
        {/* Titel */}
        <div className="text-center">
          <h2 className="text-h2 font-bold text-gray-900">Üyelik</h2>
          <p className="text-lg text-gray-700 mt-2">Üç basit adımda üye olun</p>
        </div>

        {/* Schritte */}
        <div className="grid md:grid-cols-3 gap-8 text-center mt-12">
          {/* Schritt 1 */}
          <div className="p-8 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaFileDownload className="text-red-600 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900">
              1. Formu doldurun
            </h3>
            <p className="mt-2 text-gray-700">
              Üyelik formunu indirin, doldurun ve imzalayın.
            </p>
            <a
              href="/mitgliedschaftsformular.pdf"
              className="mt-4 inline-block text-red-600 font-semibold hover:underline"
            >
              Formu indir
            </a>
          </div>

          {/* Schritt 2 */}
          <div className="p-8 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaPaperPlane className="text-red-600 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900">
              2. Formu gönderin
            </h3>
            <p className="mt-2 text-gray-700">
              Doldurduğunuz formu ofisimize gönderin.
            </p>
            <p className="text-gray-900 mt-3 italic">
              CHP Berlin
              <br />
              Osloerstr. 104, <br />
              13359 Berlin
            </p>
          </div>

          {/* Schritt 3 */}
          <div className="p-8 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaCreditCard className="text-red-600 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900">
              3. Üyelik aidatını ödeyin
            </h3>
            <p className="mt-2 text-gray-700">
              Üyelik aidatınızı otomatik ödeme talimatı ile düzenleyin.
            </p>

          </div>
        </div>

        {/* Satzungen Sektion */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Satzung & Tüzük</h2>
          <p className="text-gray-700 mt-2">
            Hier findest du unsere Satzung in Deutsch und Türkisch.
          </p>

          <div className="flex justify-center gap-6 mt-2">
          <a href="/satzung.pdf">
              <button className="mt-4 px-6 py-2 bg-red-600 text-white shadow-md hover:bg-red-700 transition-colors">
                Satzung (Deutsch)
              </button>
            </a>
             <a href="/satzung.pdf">
              <button className="mt-4 px-6 py-2 bg-red-600 text-white shadow-md hover:bg-red-700 transition-colors">
                Tüzük (Türkçe)
              </button>
            </a>
          </div>
        </div>

        {/* Automatische Überweisung */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Automatische Überweisung
          </h2>
          <p className="text-gray-700 mt-2">
            Du kannst deinen Mitgliedsbeitrag bequem per Dauerauftrag zahlen.
            Hier sind unsere Bankdaten:
          </p>

          <div className="mt-6 p-6 bg-white shadow-md rounded-lg text-gray-900 text-lg">
            <p>
              <strong>Empfänger:</strong> CHP Berlin e.V.
            </p>
            <p>
              <strong>IBAN:</strong> DE00 0000 0000 0000 0000 00
            </p>
            <p>
              <strong>BIC:</strong> XXXXDEXX
            </p>
            <p>
              <strong>Verwendungszweck:</strong> Mitgliedsbeitrag + dein Name
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
