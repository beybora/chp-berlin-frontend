import React from "react";
import { getDistrictRepresentatives } from "utils/getDistrictRepresentatives";

const DistrictRepresentatives = async () => {
  const districtData = await getDistrictRepresentatives(); // Holt bereits sortierte & gruppierte Daten

  return (
    <div className="w-full py-20">
      <div className="max-w-4xl mx-auto container">
        <h1 className="text-h2 font-bold flex justify-center">
          CHP Berlin Birliği İlçe Temsilcileri
        </h1>
        <p className="text-center text-gray-500 py-5">
          CHP Berlin Birliği'nin İlçe Temsilcileri, Berlin'in farklı
          bölgelerinde partiyi temsil eden ve yerel düzeyde çalışmalar yürüten
          önemli aktörlerdir.
        </p>

        <div className="py-10 space-y-10">
          {districtData.map(({ district, representatives }) => (
            <div key={district}>
            
              <h3 className="text-h4 font-bold border-b pb-2 text-center">{district}</h3>

              <div className="mt-3 space-y-2">
                {representatives.map((rep) => (
                  <div key={rep.id}>
                    <h4 className="text-h5 font-semibold">{rep.acfFields.name}</h4>
                    <p className="text-sm text-gray-500">{rep.acfFields.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DistrictRepresentatives;
