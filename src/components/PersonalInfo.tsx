import React from 'react';

export const PersonalInfo: React.FC = () => {
  return (
    <section className="mb-5">
      <h2 className="text-2xl font-extrabold mb-2 text-[#787FCD]">Informations Personnelles</h2>
      <p><span className="underline">Date et lieu de naissance</span> :  01/09/2002 à Fès, Maroc</p>
      <p><span className="underline">Téléphone</span> : +212682427188</p>
      <p><span className="underline">Email</span> : niama.senhaji@gmail.com</p>
      <p><span className="underline">Adresse</span> : Tanger, Maroc</p>
    </section>
  );
};
