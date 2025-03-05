import React from 'react'
import { getAdministrationMembers } from 'utils/getAdministrationMembers';

const AdministrationRepresentatives = async ({attributes}   ) => {
  const administrationMembers = await getAdministrationMembers();
  console.log(attributes['explanation-text'], "attributes");
  return (
    <div className="w-full py-10">
      <div className="max-w-5xl mx-auto container">
        <h1 className="text-3xl font-bold flex justify-center">
          CHP Berlin Birliği Yönetim Kurulu Üyeleri
        </h1>
        <p className="text-center text-gray-500 py-5">
          {attributes['explanation-text']}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-20 py-10">
          {administrationMembers.map((member) => (
            <div key={member.id}>
              <h2 className="text-lg font-bold">{member.acfFelder.name}</h2>
              <p className="text-sm text-gray-500">{member.acfFelder.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdministrationRepresentatives
