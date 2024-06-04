import React from 'react';

export const Langues: React.FC = () => {
  return (
    <section className="mb-5">
      <h2 className="text-2xl font-extrabold mb-2 text-[#787FCD]">Langues</h2>
      <div>
        <p>Français : <span className="lang-level">★★★★☆</span></p>
        <p>Anglais  : <span className="lang-level">★★★★☆</span></p>
        <p>Arabe    : <span className="lang-level">★★★★★</span></p>
        <p>Turc     : <span className="lang-level">★★☆☆☆</span></p>
      </div>
    </section>
  );
};
