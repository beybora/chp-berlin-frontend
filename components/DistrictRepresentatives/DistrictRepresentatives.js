import React from "react";
import { getAdministrationMembers } from "utils/getAdministrationMembers";

const DistrictRepresentatives = async ({ attributes }) => {
  const administrationMembers = await getAdministrationMembers();

  return (
    <div className="w-full py-10">
      <div className="max-w-5xl mx-auto container">
        <h1 className="text-3xl font-bold flex justify-center">
          CHP Berlin Birliği İlçe Temsilcileri
        </h1>
        <p className="text-center text-gray-500 py-5">
          CHP Berlin Birliği'nin İlçe Temsilcileri, Berlin'in farklı
          bölgelerinde partiyi temsil eden ve yerel düzeyde çalışmalar yürüten
          önemli aktörlerdir. Bu temsilciler, bölgesel organizasyonları
          düzenleyerek CHP üyelerini bir araya getirir, toplumsal konulara
          duyarlılık oluşturur ve yerel sorunlara çözüm üretmek için aktif rol
          oynarlar.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-20 py-10">
          {administrationMembers.map((member) => (
            <div key={member.id}>
              <h2 className="text-lg font-bold">{member.acfFelder.name}</h2>
              <p className="text-sm text-gray-500">
                {member.acfFelder.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DistrictRepresentatives;
